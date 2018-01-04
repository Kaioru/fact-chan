module.exports = ctx => {
  let client = ctx.client;
  let content = ctx.msg.content;
  let replies = ctx.replies;

  if (content.includes('chinese')) {
    replies.push('ni hao ma!!');
  }

  if (content.includes('korean')) {
    replies.push('안녕!');
  }

  if (content.includes('japanese')) {
    replies.push('konnichiwa!');
  }
}
