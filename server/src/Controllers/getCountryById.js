const {Country, ActCount} = require('../db.js')

const getCountryById = async (id) =>{
    const encontrado = await Country.findByPk(id);
    const activities = await ActCount.findAll({where: {CountryId: id}});

    if (activities.length>0){
        encontrado.dataValues.actividades = activities.map(obj => obj.ActivityId)
    }
 
    

    
    return encontrado
}   

module.exports= {
    getCountryById
}