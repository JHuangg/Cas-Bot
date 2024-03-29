const config = require('../../config.json');
module.exports = (Discord, client, message) => {
  const prefix = config.prefix;
  if (
    !message.content.startsWith(prefix) ||
    message.author.bot ||
    !message.guild
  )
    return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd);

  if (command) {
    command.execute(client, message, args, Discord);
  }
};
