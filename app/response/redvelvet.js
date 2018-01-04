module.exports = ctx => {
  let client = ctx.client;
  let content = ctx.msg.content;
  let replies = ctx.replies;

  if (content.includes('play') &&
    content.includes('game')) {
    replies.push('Let\'s play a game of russian roulette!');
  }

  if (content.includes('what') &&
    (content.includes('flavor') || content.includes('flavour'))) {
      replies.push('Red Flavor!');
  }
}
