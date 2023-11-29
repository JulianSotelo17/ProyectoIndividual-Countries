const {Country} = require('../db.js');


const postCountries = (countries) =>{
    
    countries.map((p) =>{
        Country.create(p);
    })
}

module.exports={
    postCountries
};