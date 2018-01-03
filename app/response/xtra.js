const got = require('got');

module.exports = (ctx, callback) => {
    let client = ctx.client;
    let content = ctx.msg.content;
    let replies = ctx.replies;

    if (content.includes('joke')) {
        ctx.skip = true;

        got('https://icanhazdadjoke.com', {
            json: true
        }).then(result => {
            replies.push(result.body.joke);
            callback(ctx);
        });
    } else if (content.includes('advice') || (content.includes('fortune') && content.includes('cookie'))) {
        ctx.skip = true;

        got('http://api.adviceslip.com/advice', {
            json: true
        }).then(result => {
            replies.push(result.body.slip.advice);
            callback(ctx);
        });
    } else if (content.includes('quote') || content.includes('motivate') || content.includes('motivation')) {
        ctx.skip = true;

        got('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json', {
            json: true
        }).then(result => {
            replies.push(`${result.body.quoteText} - ${result.body.quoteAuthor}`);
            replies.push(`${result.body.quoteAuthor} once said: '${result.body.quoteText}'`);
            callback(ctx);
        });
    }
}
