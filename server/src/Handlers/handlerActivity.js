const {postActivity} = require('../Controllers/postActivity.js');
const {getActivity} = require('../Controllers/getActivity.js');


const postActivityHandler= async (req,res) =>{
    const {nombre, dificultad, duracion, temporada, paises} = req.body

    try {

        if (!nombre || !dificultad || !temporada || !(paises.length > 0)) {
    
            res.status(400).json({error:"Tiene que completar todos los campos requeridos."});
    
        }
        
        const actividad = {
            nombre: nombre,
            dificultad: dificultad,
            duracion: duracion,
            temporada: temporada,
    
        }
    
        const agregado = postActivity(actividad, paises)

        if (agregado){
            res.status(200).send("Se agrego correctamente.");
        }else{
            res.status(400).json({error:"Error en agregar una actividad"})
        }
    }catch(error){
       
        res.status(400).json({error:"Error en la Actividad."});
    }

}

const getActivityHandler = async (req, res) =>{
    try {
        const activities = await getActivity();

        if (activities.length > 0){
            res.status(200).json(activities);
        }else{
            res.status(400).send("No se encontraron actividades registradas");
        }
    }catch(error){
        res.status(400).send("Error al conseguir las actividades");
    }
}

module.exports={
    postActivityHandler,
    getActivityHandler
}