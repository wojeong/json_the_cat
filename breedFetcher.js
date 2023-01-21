const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const cats = JSON.parse(body);
    const cat = cats[0];
    //console.log(cat.description);
    return cat.description;
  });
};

module.exports = { fetchBreedDescription };