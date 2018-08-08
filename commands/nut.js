const discord = require("discord.js");

exports.run = async (client, message, args) => {
    const nutpic = new discord.RichEmbed()
    .setAuthor("Holy Nut.")
    .setTitle("image")
    .setColor("#e542f4")
    .setImage("http://i.imgur.com/7ITZ6a0.png")
    .setFooter("Bot made by 𝕲𝖗𝖆𝖕𝖍𝖎𝖈𝖘#2577")
    .setURL("https://imgur.com/7ITZ6a0");
    message.channel.send(nutpic);
};