const swearjar = require('swearjar');

module.exports = ctx => {
    let client = ctx.client;
    let content = ctx.msg.content;
    let replies = ctx.replies;
    let score = swearjar.scorecard(content);

    if (score.discriminatory) {
        replies.push('Ehh.. That\'s a little mean..');
        replies.push('It\'s not good to be so mean..');
        replies.push('Don\'t go around saying that..!');
    }
    
    if (score.insult) {
        replies.push('Hey! That\'s not a nice thing to say!');
        replies.push('That\'s not nice.');
    } 
    
    if (score.sexual) {
        replies.push('Ehhh.. I don\'t think thats appropriate..');
        replies.push('>...< Please be mindful of your word choice..!');
    }
}
