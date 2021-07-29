'use strict';

const Discord = require('discord.js');

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

const { prefix, token } = require('./config.json');

['commandHandler', 'eventHandler'].forEach(handler => {
  //require them and loop through into this file
  //passing in discord for some commands
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(token);
