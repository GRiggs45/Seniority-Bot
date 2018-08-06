const discord = require("discord.js");
const enmap = require("enmap");
const fs = require("fs");

const client = new discord.Client();
const config = require("./config.json");

client.config = config;

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${files}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new enmap();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        //console.log(props);
        let commandName = file.split(".")[0];
        //console.log(commandName)
        console.log(`Attempting to load command ${commandName}`);
        client.commands.set(commandName, props);
        console.log(client.commands);
    });
});

client.login(config.token);