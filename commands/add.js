exports.run = async (client, message, args) => {
    let sum = +args[0] + +args[1];
    message.channel.send(args[0] + " + " + args[1] + " = " + sum);
};