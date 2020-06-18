const fs = require('fs').promises;
const request = require('superagent');


const readFilePromise = fs.readFile('./package.json', { encoding: 'utf8' });
  
readFilePromise
  .then(result => console.log(result));


fs.writeFile('./my-file.txt', 'this is my text file')
  .then(() => console.log('DONE!'));


