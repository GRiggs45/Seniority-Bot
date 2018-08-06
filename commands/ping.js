exports.run = async (client, message, args) => {
    message.channel.send("The bots ping is " + client.ping + "ms!");
};