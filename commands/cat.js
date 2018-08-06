const snekfetch = require("snekfetch");
const discord = require("discord.js");

exports.run = async (client, message, args) => {
    const response = await snekfetch.get("http://aws.random.cat/meow");
    const catpic = new discord.RichEmbed()
    .setAuthor("Look at this cute cat picture.")
    .setTitle("image")
    .setColor("#e542f4")
    .setImage(response.body.file)
    .setFooter("Bot made by 𝕲𝖗𝖆𝖕𝖍𝖎𝖈𝖘#2577")
    .setURL(response.body.file);
    message.channel.send(catpic);
};