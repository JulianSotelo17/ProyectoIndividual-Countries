const { Activity, Country } = require('../db.js');


const postActivity = async (actividad, paises) => {

    try {

        const newAct = await Activity.create(actividad)
    
        for (let i = 0; i < paises.length; i++){
            const pais = await Country.findOne({
                where: {nombre: paises[i]}
            })
            // console.log(pais)
            const resultado = await newAct.addCountry(pais);
        }

        return true
    }catch(error){
        return error
    }

    
} 

module.exports= {
    postActivity
}