const fs = require('fs').promises;

const copyFile = (src, dst) => {
  const readFilePromise = fs.readFile(src, { encoding: 'utf8' });
  
  return readFilePromise
    .then(result => {
      return fs.writeFile(dst, result);
    });
};

module.exports = {
  copyFile
};
