exports.run = async (client, message, args) => {
    message.channel.send("The first arg is " + args[0] + "!");
};