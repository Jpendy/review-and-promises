const fs = require('fs').promises;

const transform = src => {

  return fs.readFile(src, { encoding: 'utf-8' })
    .then(result => result.split('').filter(item => {
      return item === item.toLowerCase();
    }))
    .then(result => result.map(item => {
      return item.toUpperCase();
    }))
    .then(result => result.reverse().join('')); 
};

module.exports = transform;
