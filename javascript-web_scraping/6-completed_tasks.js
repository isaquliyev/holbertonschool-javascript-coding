#!/usr/bin/node

const request = require('request');

request(process.argv[2], (err, response, body) => {
  if (err) throw err;
  body = JSON.parse(body);

  const result = body.reduce((x, y) => {
    if (!x[y.userId]) x[y.userId] = 0;
    if (y.completed) x[y.userId] += 1;
    return x;
  }, {});

  console.log(result);
});
