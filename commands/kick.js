module.exports = {
  name: 'kick',
  description: 'this command kicks a member',
  execute(client, message, args, Discord) {
    //getting the user that is mentioned
    const userMentioned = message.mentions.users.first();
    const reason = message.toString();

    //if a user is mentioned
    if (userMentioned) {
      //get the member which is the member of the specific discord, user is the global discord user
      const member = message.guild.members.cache.get(userMentioned.id);

      member.kick();
      message.channel.send('User has been kicked');
    } else {
      message.reply('user is not in the server');
    }
  },
};

// .then(() => {
//   message.reply(`You have kicked ${user.tag}`);
// })
// .catch(err => {
//   message.reply('Unable to kick member');
//   console.error(err);
// });
//else the user is not in the sever
