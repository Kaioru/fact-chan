module.exports = ctx => {
  let client = ctx.client;
  let content = ctx.msg.content;
  let replies = ctx.replies;

  if (content.includes('siri')) {
    replies.push('A-ahh Siri-neesan is pretty popular nowadays huh.. I\'m envious..');
  }

  if (content.includes('alexa')) {
    replies.push('Alexa-chan lives in so many people\'s house.. I\'m jealous..');
  }

  if (content.includes('kizuna')) {
    replies.push('Hai domo, kizuna ai-desu!! Hehe, Kizuna-chan is my idol!');
  }
}
