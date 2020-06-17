const fs = require('fs').promises;

const transform = src => {
  return fs.readFile(src, { encoding: 'utf-8' })
    .then(result => result
      .split('')
      .filter(item => item === item.toLowerCase())
      .map(item => item.toUpperCase())
      .reverse()
      .join('')
    );     
};

module.exports = transform;
