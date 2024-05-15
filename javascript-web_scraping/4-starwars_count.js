#!/usr/bin/node

const request = require('request');

request(process.argv[2], (err, response, body) => {
  if (err) throw err;
  let count = 0;
  JSON.parse(body).results.forEach(it => {
    it.characters.forEach(character => {
      if (character.includes('/18/')) {
        count += 1;
      }
    });
  });
  console.log(count);
});
