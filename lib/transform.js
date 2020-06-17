const fs = require('fs').promises;

const transform = src => {

  const readFilePromise = fs.readFile(src, { encoding: 'utf-8' });
  return readFilePromise
    .then(result => result.split('').filter(item => {
      return item === item.toLowerCase();
    }))
    .then(result => result.map(item => {
      return item.toUpperCase();
    }))
    .then(result => result.reverse().join(''));
    
};

transform('./my-file.txt')
  .then(result => console.log('hello  ' + result));

module.exports = transform;

