module.exports = ctx => {
    let client = ctx.client;
    let content = ctx.msg.content;
    let replies = ctx.replies;

    if (
        content.includes('polytechnic') ||
        content.includes('poly')
    ) {
        if (content.includes('ngee') &&
            content.includes('ann')) {
            replies.push('Always that something xtra!!');
        }

        if (content.includes('singapore') ||
            content.includes('republic') ||
            content.includes('nanyang') ||
            content.includes('temasek')) {
            replies.push('A-ah.. No comment..');
        }
    }
}
