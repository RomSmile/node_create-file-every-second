/* eslint-disable no-console */
'use strict';

const fs = require('fs');

setInterval(() => {
  const date = new Date();
  const nameOfFile
    = `app-${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}.log`;
  const content
    = `${date.getHours()}_hours ${date.getMinutes()}_minutes`
    + ` ${date.getSeconds()}_seconds`;

  fs.writeFile(`./src/${nameOfFile}`, content, (err) => {
    if (err) {
      console.log('ERROR');
    } else {
      console.log(`${content} - succsesfully`);
    }
  });
  console.log(date.getSeconds());
}, 1000);
