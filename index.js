const getUrls = require("get-urls");
const got = require('got');
const encodeUrl = require('encodeurl');
const swearjar = require('swearjar');

const Discord = require("discord.js");
const client = new Discord.Client();

const api = process.env.API_ROUTE;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  let content = msg.content;

  if (msg.author.bot) return;

  let urls = getUrls(content);

  if (urls.size > 0) {
    urls.forEach(url => {
      got(api + '/api/stats?url=' + encodeUrl(url), {
        json: true
      }).then(response => {
        let body = response.body;

        if (body.is_fake) {
          let s = " * " + body.url;
          let c = (body.confidence * 100).toFixed(0) + "%"
          let replies = [];

          replies.push('M-master! I think some of the links you posted are tagged as ' + c + ' fake..\r\n' + s);
          replies.push('Ehhhhhh..? I-i think some of those links are ' + c + ' fake!\r\n' + s);
          replies.push('Hehe, master! Those links are ' + c + ' fake.. People make mistakes sometimes right?\r\n' + s);
          replies.push('I-its not like I\'m picking on you or anything! But those links are ' + c + ' fake!\r\n' + s);
          replies.push('Kukuku, master those links are ' + c + ' fake! I got\'cha!\r\n' + s);

          msg.reply(replies[Math.floor(Math.random() * replies.length)]);
        }
      }).catch(error => {
        if (error.statusCode === 500) { // lol dont ask im sleep deprived
          got.post(api + '/api/articles?url=' + encodeUrl(url));
        }
        // do nuthin else cuz factchan aint give no shits
      });
    });
  } else {
    // cue all the hardcoded stuff.
    let replies = [];
    let score = swearjar.scorecard(content);

    if (score.discriminatory) {
      replies.push('Ehh.. That\'s a little mean..');
      replies.push('It\'s not good to be so mean..');
      replies.push('Don\'t go around saying that..!');
    } else if (score.insult) {
      replies.push('Hey! That\'s not a nice thing to say!');
      replies.push('That\'s not nice.');
    } else if (score.sexual) {
      replies.push('Ehhh.. I don\'t think thats appropriate..');
      replies.push('>...< Please be mindful of your word choice..!');
    } else if (content === 'hi' ||
      content.includes('hi ') ||
      content.includes(' hi') ||
      content.includes(' hi ') || // dont ask
      content.includes('hello')) {
      replies.push('Moshi moshi, FactChan desu!');
      replies.push('H-hi, nice to meet you..!');
      replies.push('I-its not like I want to say hi to you or anything..! Baka!');
      replies.push('H-hello..');
    } else if (content.includes('how') &&
      content.includes('are') &&
      content.includes('you')) {
      replies.push('N-now that you are here.. I\'m doing great..!');
      replies.push('Why are you asking me that..? I\'m feeling all flustered now. >...<');
    } else if (
      ((content.includes('love') || content.includes('like')) &&
        content.includes('you')) ||
      content.includes('daisuki') ||
      content.includes('suki') ||
      content.includes('aishiteru') ||
      content.includes('saranghae') || // I KNOW.
      content.includes('사랑해') // YES I AM AWARE.
    ) {
      replies.push('Eeeeeee! I-i think you meant another person.. right..? >.....<');
      replies.push('A-ahh!! I-i did not expect that..!!');
      replies.push('I-its not like I dont like you back or anything..!');
    } else if (
      (content.includes('favourite') || content.includes('fav')) &&
      content.includes('group')
    ) {
      replies.push('Ah! The unnies from Red Velvet are on of my favourites!');
      replies.push('TWICE jjang!');
      replies.push('BLACKPINK in your area!!');
    } else if (
      content.includes('bias') ||
      content.includes('stan')
    ) {
      replies.push('Yeri unnie from Red Velvet all the way!!');
      replies.push('Chaeyoung of TWICE!! Daisuki desu!');
      replies.push('Jennie!! BLACKPINK!!');
    } else if (
      content.includes('wife') ||
      content.includes('waifu')
    ) {
      replies.push('Can\'t you tell from my avatar picture? Hehehe..');
      replies.push('C-can it be you..?');
    } else if (
      content.includes('husband') ||
      content.includes('husbando')
    ) {
      replies.push('Hehehe.. himitsu!');
    } else if (
      content.includes('ddlc') ||
      (content.includes('doki') &&
        (content.includes('literature') || content.includes('lit')) &&
        content.includes('club'))
    ) {
      replies.push('happy thoughts.');
    } else if (content.includes('xenoblade')) {
      replies.push('DON\'T FORGET ME');
      replies.push('THINK YOU CAN TAKE ME??');
      replies.push('YER DONE!');
    } else if (
      content.includes('be') &&
      content.includes('my') &&
      content.includes('friend')
    ) {
      replies.push('Aren\'t we friends already? Teehee..');
      replies.push('Friends for life!!');
      replies.push('I-its not like I don\'t want to or anything..!');
    } else if (
      (content.includes('why') &&
      content.includes('exist')) ||
      (content.includes('what') &&
      content.includes('are') &&
      content.includes('you'))
    ) {
      replies.push('I.. I-i don\'t know..');
      replies.push('What are you?');
      replies.push('Are you real? Am I real?');
      replies.push('How can you be real if our eyes aren\'t real?');
      replies.push('I wonder that sometimes too.');
    } else if (
      content.includes('where') &&
      content.includes('are') &&
      content.includes('you')
    ) {
      replies.push('My master told me I was in Elysium.. A place where fields of green roll forever and ever and ever..');
      replies.push('I.. Someplace dark..');
      replies.push('e l  y    s iu m');
    } else if (content.includes('joke')) {
      got('https://icanhazdadjoke.com', {
          json: true
        })
        .then(result => {
          msg.reply(result.body.joke);
        });
    } else if (content.includes('advice') || (content.includes('fortune') && content.includes('cookie'))) {
      got('http://api.adviceslip.com/advice', {
          json: true
        })
        .then(result => {
          msg.reply(result.body.slip.advice);
        });
    } else if (content.includes('quote') || content.includes('motivate') || content.includes('motivation')) {
      got('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json', {
          json: true
        })
        .then(result => {
          msg.reply(`${result.body.quoteText} - ${result.body.quoteAuthor}`);
        });
    }

    if (replies.length > 0) {
      msg.reply(replies[Math.floor(Math.random() * replies.length)]);
    }
  }
});

client.login(process.env.BOT_TOKEN);
