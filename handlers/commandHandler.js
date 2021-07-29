const fs = require('fs');

module.exports = (client, Discord) => {
  //variable that will loop through all commands and filter ones that end with js
  const command_files = fs
    .readdirSync('./commands/')
    .filter(file => file.endsWith('.js'));

  for (const file of command_files) {
    const command = require(`../commands/${file}`);
    if (command.name) {
      client.commands.set(command.name, command);
    } else {
      continue;
    }
  }
};
