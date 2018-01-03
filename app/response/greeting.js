module.exports = ctx => {
    let client = ctx.client;
    let content = ctx.msg.content;
    let replies = ctx.replies;
    let splits = content.split(' ');
    let has_hi = splits.includes('hi'); // help im getting cancer

    if (has_hi ||
        content.includes('hello') ||
        content.includes('annyeong') ||
        content.includes('konnichiwa')) {
        replies.push('Moshi moshi, FactChan desu!');
        replies.push('H-hi, nice to meet you..!');
        replies.push('I-its not like I want to say hi to you or anything..! Baka!');
        replies.push('H-hello..');
    }
}
