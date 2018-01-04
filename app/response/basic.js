module.exports = ctx => {
  let client = ctx.client;
  let content = ctx.msg.content;
  let replies = ctx.replies;

  if (
    content.includes('be') &&
    content.includes('my') &&
    content.includes('friend')
  ) {
    replies.push('Aren\'t we friends already? Teehee..');
    replies.push('Friends for life!!');
    replies.push('I-its not like I don\'t want to or anything..!');
  }

  if (
    content.includes('marry') &&
    content.includes('me')
  ) {
    replies.push('A-ah!! I\'m getting all flustered! I\'m not ready for commitments yet >...<')
  }

  if (content.includes('stupid')) {
    replies.push('E-ehh.. so mean..');
  }
}
