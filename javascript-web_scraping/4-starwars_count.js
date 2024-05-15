#!/usr/bin/node

const request = require('request');

request(process.argv[2], (err, response, body) => {
  if (err) throw err;
  let count = 0;
  JSON.parse(body).results.forEach(it => {
    if (it.characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
      count += 1;
    }
  });
  console.log(count);
});
