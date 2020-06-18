const request = require('superagent');

const getCharacter = id => {   
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ body: { name, status, species } }) => ({
      name,
      status,
      species
    }));
};

const getManyCharacters = idArr => {
  return Promise.all(
    idArr.map(id => {
      return getCharacter(id);
    })
  );
};

module.exports = {
  getCharacter,
  getManyCharacters
};
