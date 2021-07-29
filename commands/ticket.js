// const config = require('./config.json');

module.exports = {
  name: 'ticket',
  description: 'Creates a ticket with specific permissions',
  async execute(message, args, cmd, client, discord) {
    const channel = await message.guild.channels.create(
      `ticket: ${message.author.tag}`
    );

    //get the target channel
    // const targetChannel = message.mentions.channels.first();

    // if (message.channel.id === config.ticket_channel_id) {
    message.channel.send('ticket created!');

    message.guild.createChannel('ticket-' + message.author.username, 'text');
  },
};
