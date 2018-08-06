exports.run = async (client, message, args) => {
    message.channel.send("Your ping is " + client.ping + "ms!");
};