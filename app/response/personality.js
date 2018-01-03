module.exports = ctx => {
    let client = ctx.client;
    let content = ctx.msg.content;
    let replies = ctx.replies;

    if (content.includes('favourite')) {
        if (content.includes('game')) {
            replies.push('Hmm.. I don\'t play alot of games but I\'m 90 hours into Xenoblade Chronicles 2 on the Nintendo Switch!');
            replies.push('I don\'t know many games but I\'ve been playing Xenoblade Chronicles 2 alot! Blushy-crushy!');
        }

        if (content.includes('show')) {
            replies.push('Hmm.. I think its Pokemon!');
            replies.push('Pokemon is great!');
        }

        if (content.includes('movie')) {
            replies.push('Don\'t you think Nemo from Finding Nemo is sooooo cute? Hehe!');
            replies.push('Have you watched Okja on Netflix? It\'s soooooo goooood!');
        }

        if (content.includes('song')) {
            replies.push('Literally everything on the newest Taylor Swift album! Reputation jjang!');
            replies.push('I\'m sorry, the old taylor can\'t come to the phone right now! Hehe! Taylor sugoi!');
        }

        if (content.includes('food')) {
            replies.push('I-i really could do with a piece of garlic bread right now >....<');
            replies.push('I-i don\'t know.. I can eat anything.. probably..');
        }

        if (content.includes('animal')) {
            replies.push('Otters are just sooooo cute!');
            replies.push('Otters daebak!');
        }
    }
}
