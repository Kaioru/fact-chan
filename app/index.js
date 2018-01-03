const Bot = require('./bot');
const glob = require('glob');
const path = require('path');

let behaviours = [];
let responses = [];
let map = {
  'app/behaviour/**/*.js': behaviours,
  'app/response/**/*.js': responses
};

Object.keys(map).forEach((key) => {
  glob.sync(key)
    .forEach(file => {
      map[key].push(require(path.resolve(file)));
    });
});

let instance = new Bot(
  process.env.BOT_TOKEN,
  behaviours,
  responses
);

instance.start();
