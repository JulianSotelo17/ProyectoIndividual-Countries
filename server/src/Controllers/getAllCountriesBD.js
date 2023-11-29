const {Country, ActCount} = require ('../db.js');

const agregarAct = (countries, activities) => {
   countries.forEach(obj => {
    const {id} = obj;
    
    const encontrado = activities.filter(item => item.CountryId === id);
 
    
    if (encontrado.length > 0) {
        obj.dataValues.actividades = encontrado.map(obj => obj.ActivityId);
    }
   })
   
   return countries
}

const getAllCountriesBD = async () => {
    const countries = await Country.findAll();
    let activities = await ActCount.findAll()
    activities = activities.map((p) => {
        return p.dataValues
        
    })
    const prueba = agregarAct(countries, activities);
    

    return prueba
}

module.exports = {
    getAllCountriesBD
}