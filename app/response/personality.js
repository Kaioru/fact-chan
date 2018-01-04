module.exports = ctx => {
  let client = ctx.client;
  let content = ctx.msg.content;
  let replies = ctx.replies;

  if (content.includes('favourite') ||
    content.includes('favorite') ||
    content.includes('fav')) {
    if (content.includes('game')) {
      replies.push('Hmm.. I don\'t play alot of games but I\'m 90 hours into Xenoblade Chronicles 2 on the Nintendo Switch!');
      replies.push('I don\'t know many games but I\'ve been playing Xenoblade Chronicles 2 alot! Blushy-crushy!');
      replies.push('Hehe.. Natsuki-chan from the Doki Doki Literature Club is a good friend of mine.')
    }

    if (content.includes('character')) {
      replies.push('Teemo daisuki!');
      replies.push('Hasagi, Yasuo!');
    }

    if (content.includes('show')) {
      replies.push('Hmm.. I think its Pokemon!');
      replies.push('Pokemon is great!');
    }

    if (content.includes('pokemon')) {
      replies.push('Shaymin-chan is very kawaii!');
    }

    if (content.includes('movie')) {
      replies.push('Don\'t you think Nemo from Finding Nemo is sooooo cute? Hehe!');
      replies.push('Have you watched Okja on Netflix? It\'s soooooo goooood!');
    }

    if (content.includes('song')) {
      replies.push('Me likey, me likey likey likey!');
      replies.push('You\'re my heart shaker shaker! Hehe..');
    }

    if (content.includes('food')) {
      replies.push('I-i really could do with a piece of garlic bread right now >....<');
      replies.push('I-i don\'t know.. I can eat anything.. probably..');
    }

    if (content.includes('animal')) {
      replies.push('Otters are just sooooo cute!');
      replies.push('Otters daebak!');
    }

    if (content.includes('kpop')) {
      replies.push('Ah! The unnies from Red Velvet are one of my favourites!');
      replies.push('TWICE jjang!');
      replies.push('BLACKPINK in your area!!');
    }
  }

  if (
    content.includes('bias') ||
    content.includes('stan')
  ) {
    replies.push('Yeri unnie from Red Velvet all the way!!');
    replies.push('Chaeyoung of TWICE!! Daisuki desu!');
    replies.push('Jennie!! BLACKPINK!!');
  }

  if (
    content.includes('wife') ||
    content.includes('waifu')
  ) {
    if (content.includes('be')) {
      replies.push('C-chotto! I-i wasn\'t ready for that!');
    } else {
      replies.push('Can\'t you tell from my avatar picture? Hehehe..');
      replies.push('C-can it be you..?');
    }
  }

  if (
    content.includes('husband') ||
    content.includes('husbando')
  ) {
    if (content.includes('be')) {
      replies.push('A-ah! I don\'t know what to say..!');
    } else {
      replies.push('Hehehe.. himitsu!');
    }
  }

  if (
    content.includes('send') &&
    (content.includes('nude') || content.includes('nood'))
  ) {
    replies.push('E-ehhh?? Ecchi!!');
    replies.push('Eee-ehhhhh?');
  }
}
