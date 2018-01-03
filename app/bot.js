const discord = require('discord.js');

const client = new discord.Client();

module.exports = class Bot {
  constructor(token, behaviours, responses) {
    this.token = token;
    this.behaviours = behaviours;
    this.responses = responses;
  }

  start() {
    client.on('ready', () => {
      this.behaviours.forEach(f => f(client));
      console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on('message', msg => {
      if (msg.author.bot) return;

      msg.originalContent = msg.content;
      msg.content = msg.originalContent.toLowerCase();

      let ctx = {
        client: client,
        msg: msg,
        replies: [],
        transformers: [],
        skip: false
      }

      let callback = (ctx) => {
        let replies = ctx.replies;

        if (!ctx.skip && replies.length === 0) {
          replies.push('I-i.. don\'t think I quite understood that..');
          replies.push('Sumimasen..! I don\'t understand..');
          replies.push('T--T I don\'t quite get it..');
        }

        if (replies.length > 0) {
          let reply = replies[Math.floor(Math.random() * replies.length)];
          let transformed = reply;

          ctx.transformers.forEach(t => {
            transformed = t(transformed);
          });

          msg.channel.stopTyping();
          msg.reply(transformed);
        }
      }

      this.responses.forEach(f => f(ctx, callback));
      callback(ctx);
    })

    client.login(this.token);
  }
}
