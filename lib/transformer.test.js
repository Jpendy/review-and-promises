const fs = require('fs').promises;
const transform = require('./transform.js');

describe('copy test', () => {

  beforeAll(() => {
    return fs.writeFile('./my-file.txt', 'This is my Text File'); 
  });
  
  afterAll(() => {
    return Promise.all([
      fs.unlink('./my-file.txt')
    ]);
  });
  
  it('it transforms a file', () => {
  
    return transform('./my-file.txt')
      .then(content => {
        expect(content).toEqual(
          'ELI TXE YM SI SIH'
        );
      });

  });

});
  
