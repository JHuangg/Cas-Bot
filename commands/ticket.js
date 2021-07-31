// const config = require('./config.json');

module.exports = {
  name: 'ticket',
  description: 'Creates a ticket with specific permissions',
  async execute(client, message, args, Discord) {
    let guild = message.guild;
    guild.channels
      .create(`ticket-${message.author.tag}`, {
        type: 'text',
        permissionOverwrites: [
          {
            id: message.author.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          { id: message.guild.roles.everyone, deny: ['VIEW_CHANNEL'] },
        ],
      })
      .then(channel => {
        message.reply(`Check your ticket here: ${channel}`).then(msg => {
          //delete user sent message
          setTimeout(() => message.delete(), 6000);
          //delete bot sent message
          setTimeout(() => msg.delete(), 5000);
        });

        channel.setParent('870505075628457994');

        let initMessage = channel
          .send(new Discord.MessageEmbed().setDescription('Ready to close?'))
          .then(message => {
            message.react('✔');
            message.pin();
          });
      });
  },
};
