const { getCharacter, getManyCharacters } = require('./getRMCharacter.js');

jest.mock('superagent', () => ({
  get: () => {
    return Promise.resolve({
      body: 
        { 'id':1, 'name':'Rick Sanchez', 'status':'Alive', 'species':'Human', 'type':'', 'gender':'Male' },    
    });
  }
}));

describe('Rick and morty functions', () => {
    
  it('it takes an id and returns a rick and morty character object', () => {     
    return getCharacter(1)
      .then(result => {
        expect(result).toEqual({ 
          name: 'Rick Sanchez', status: 'Alive', species: 'Human'
        });
      });

  });

  it('it takes in a array of id\'s and returns all the characters', () => {      
    return getManyCharacters([1, 2, 3])
      .then(result => {
        expect(result).toEqual([
          { name: 'Rick Sanchez', status: 'Alive', species: 'Human' },
          { name: 'Rick Sanchez', status: 'Alive', species: 'Human' },
          { name: 'Rick Sanchez', status: 'Alive', species: 'Human' }
        ]);
      });
  });
});
