module.exports = ctx => {
  let client = ctx.client;
  let content = ctx.msg.content;
  let replies = ctx.replies;

  if (
    content.includes('are')
  ) {
    if (content.includes('you')) {
      if (content.includes('gay') ||
        content.includes('lesbian')) {
        replies.push('A-ah... I\'m non binary..')
      }

      if (content.includes('engage') ||
        content.includes('married')) {
        replies.push('There is a time and place for everything - Professor Oak.');
      }

      if (content.includes('fake') ||
        content.includes('real')) {
          replies.push('A-am.. I?');
      }
    }
  }
}
