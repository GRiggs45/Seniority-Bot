exports.run = async (client, message, args) => {
    switch (args[0]) {
      case 'send': {
        message.channel.send('yeet!');
        break;
      }
      case 'dm': {
        message.author.send('boi!');
      }
    }
};
