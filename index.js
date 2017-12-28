const getUrls = require("get-urls");
const got = require('got');
const encodeUrl = require('encodeurl');

const Discord = require("discord.js");
const client = new Discord.Client();

const api = process.env.API_ROUTE;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  let content = msg.content;

  if (msg.author.bot) return;

  getUrls(content).forEach(url => {
    got(api + '/api/stats?url=' + encodeUrl(url), {
      json: true
    }).then(response => {
      let body = response.body;

      if (body.is_fake) {
        let s = " * " + body.url;
        let replies = [];

        replies.push('M-master! I think some of the links you posted are tagged as fake..\r\n' + s);
        replies.push('Ehhhhhh..? I-i think some of those links are fake!\r\n' + s);
        replies.push('Hehe, master! Those links are fake.. People make mistakes sometimes right?\r\n' + s);
        replies.push('I-its not like I\'m picking on you or anything! But those links are fake!\r\n' + s);
        replies.push('Kukuku, master those links are fake! I got\'cha!\r\n' + s);

        msg.reply(replies[Math.floor(Math.random() * replies.length)]);
      }
    }).catch(error => {
      if (error.statusCode === 500) { // lol dont ask im sleep deprived
        got.post(api + '/api/articles?url=' + encodeUrl(url));
      }
      // do nuthin else cuz factchan aint give no shits
    });
  });
});

client.login(process.env.BOT_TOKEN);
