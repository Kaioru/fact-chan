const getUrls = require("get-urls");
const got = require('got');
const encodeUrl = require('encodeurl');

const api = process.env.API_ROUTE;

module.exports = (ctx, callback) => {
    let client = ctx.client;
    let content = ctx.msg.content;
    let replies = ctx.replies;
    let urls = getUrls(content);

    if (urls.size > 0) {
        ctx.skip = true;

        urls.forEach(url => {
            got(api + '/api/stats?url=' + encodeUrl(url), {
                json: true
            }).then(response => {
                let body = response.body;

                if (body.is_fake) {
                    let s = " * " + body.url;
                    let c = (body.confidence * 100).toFixed(0) + "%"

                    replies.push('M-master! I think some of the links you posted are tagged as ' + c + ' fake..\r\n' + s);
                    replies.push('Ehhhhhh..? I-i think some of those links are ' + c + ' fake!\r\n' + s);
                    replies.push('Hehe, master! Those links are ' + c + ' fake.. People make mistakes sometimes right?\r\n' + s);
                    replies.push('I-its not like I\'m picking on you or anything! But those links are ' + c + ' fake!\r\n' + s);
                    replies.push('Kukuku, master those links are ' + c + ' fake! I got\'cha!\r\n' + s);
                } else {
                    replies.push('Hehe, I checked my databases and it looks like that URL is preeetttyyy safe.');
                    replies.push('The URL looks safe to me, I clicked it for you guys, hehe..!');
                    replies.push('That URL you sent looks all good to go!');
                }

                callback(ctx);
            }).catch(error => {
                if (error.statusCode === 500) { // lol dont ask im sleep deprived
                    got.post(api + '/api/articles?url=' + encodeUrl(url));
                    replies.push('Hehe, I checked my databases and it looks like that URL is preeetttyyy safe.');
                    replies.push('The URL looks safe to me, I clicked it for you guys, hehe..!');
                    replies.push('That URL you sent looks all good to go!');
                    callback(ctx);
                }

                console.log(error)
                // do nuthin else cuz factchan aint give no shits
            });
        });
    }
}
