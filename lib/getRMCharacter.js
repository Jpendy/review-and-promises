const request = require('superagent');

const getCharacter = id => {   
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ body }) => ({
      name: body.name,
      status: body.status,
      species: body.species
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
