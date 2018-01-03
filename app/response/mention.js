module.exports = ctx => {
    let client = ctx.client;
    let msg = ctx.msg;
    let replies = ctx.replies;

    if (msg.isMentioned(client.user)) {
        replies.push('A-at your service!');
        replies.push('H-how may I be of service?');
    }
}