const request = require('superagent');

const getFuturamaQuote = id => {
    
  return request
    .get(`http://futuramaapi.herokuapp.com/api/quotes/${id}`)
    .then(({ body }) => console.log(
      body[0].quote
    ));
};

module.exports = getFuturamaQuote;

getFuturamaQuote(13);
