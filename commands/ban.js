module.exports = {
  name: 'ban',
  description: 'this command bans a member',
  execute(client, message, args, Discord) {
    //getting the user that is mentioned
    //UPDATES NEED TO BE MADE TO THIS
    const userMentioned = message.mentions.users.first();
    const banReason = message.toString();

    //if a user is mentioned
    if (userMentioned) {
      //get the member which is the member of the specific discord, user is the global discord user
      const member = message.guild.members.cache.get(userMentioned.id);

      member.ban();
      message.channel.send('user has been banned from the server');
    } else {
      message.reply('user is not in the server');
    }
  },
};
