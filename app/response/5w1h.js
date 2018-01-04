module.exports = ctx => {
  let client = ctx.client;
  let message = ctx.msg;
  let content = ctx.msg.content;
  let replies = ctx.replies;

  if (content.includes('who')) {
    if (
      (content.includes('are') &&
        content.includes('you')) ||
      content.includes('this') ||
      content.includes('dis')
    ) {
      replies.push(`Hello! I am ${client.user.tag}!`);
      replies.push(`Konnichiwa! ${client.user.tag}-desu!`);
      replies.push(`Annyeong! ${client.user.tag}-ibnida!`);
    }

    if (
      content.includes('am') &&
      content.includes('i')
    ) {
      replies.push(`You're ${message.author.tag}, don't be silly!`);
      replies.push(`Hehe you're ${message.author.tag}! Are you playing tricks on me?`);
    }

    if (
      content.includes('made')
    ) {
      replies.push('M-made..? Of course its mommy and daddy!');
      replies.push('A-ahh..! That\'s an embarrassing question..');
    }
  }

  if (content.includes('what')) {
    if (
      (content.includes('is') &&
        content.includes('this')) ||
      (content.includes('are') &&
        content.includes('you'))
    ) {
      replies.push('E-eoh.. I am a fact checker and I can keep you company.. I-if you\'d like!');
      replies.push(`This is me! I\'m ${client.user.tag}!`);
    }

    if (
      content.includes('you') &&
      content.includes('do')
    ) {
      replies.push('Heh! My mom used to tell me I could do anything, so I became a fact checker!');
    }

    if (content.includes('name')) {
      if (content.includes('my')) {
        replies.push(`You're ${message.author.tag}!`);
      } else {
        replies.push(`${client.user.tag}-desu!`);
        replies.push(`${client.user.tag}-ibnida!`);
      }
    }
  }

  if (content.includes('where')) {
    if (content.includes('am') &&
      content.includes('i')) {
      replies.push('I-its not like I have a spy camera or anything..! But I think you\'re at the NP Open House!');
      replies.push('A-according to my sources.. You\'re at the NP Open House!');
    }

    if (content.includes('are') &&
      content.includes('you')) {
      replies.push('I wonder that sometimes too!');
      replies.push('Hmm.. great question..');
    }

    if (content.includes('open') &&
      content.includes('house')) {
      replies.push('You are right here now!!');
    }
  }

  if (content.includes('when')) {
    if (content.includes('open') &&
      content.includes('house')) {
      replies.push('According to my calculations, it\'s going on now! From 4th January to the 6th!');
    }
  }

  if (content.includes('why')) {
    if (content.includes('created')) {
      replies.push('I\'m here to fact check all your URLs you post in this chat!');
    }
  }

  if (content.includes('how')) {
    if (content.includes('you')) {
      replies.push('I-i\'m doing great thank you!');
      replies.push('G-great! What about you?');
    }
  }
}
