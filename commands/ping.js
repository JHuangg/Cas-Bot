module.exports = {
  name: 'ping',
  description: 'Pinger Command',
  execute(client, message, args, Discord) {
    message.channel.send('Pong!');
  },
};
