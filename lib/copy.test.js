const fs = require('fs').promises;
const { copyFile } = require('./copy.js');

describe('copy test', () => {

  beforeAll(() => {
    return fs.writeFile('./my-file.txt', 'this is my text file'); 
  });

  afterAll(() => {
    return Promise.all([
      fs.unlink('./my-file.txt'),
      fs.unlink('./my-new-file.txt')
    ]);
  });

  it('it copies a file and creates a new file', () => {

    return copyFile('./my-file.txt', './my-new-file.txt')
      .then(() => {
        return fs.readFile('./my-new-file.txt', { encoding: 'utf-8' });
      })
      .then(content => {
        expect(content).toEqual('this is my text file');
      });
  });
});
