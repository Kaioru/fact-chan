module.exports = ctx => {
  let client = ctx.client;
  let content = ctx.msg.content;
  let replies = ctx.replies;

  if (content.includes('quick') && content.includes('math')) {
    replies.push('two plus two is four minus one thats three quick maths!');
  }

  if (content.includes('boom')) {
    replies.push('the ting goes skkkkkraaa');
  }
}
