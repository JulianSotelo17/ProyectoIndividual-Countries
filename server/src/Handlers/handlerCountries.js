const {getAllCountries} = require('../Controllers/getAllCountries.js');
const {postCountries} = require('../Controllers/postCountries.js');
const {getCountryById} = require('../Controllers/getCountryById.js');
const {getAllCountriesBD} = require('../Controllers/getAllCountriesBD.js');


const getCountriesHandler = async (req, res ) => {

    const countriesBD = await getAllCountriesBD()
    const {name} = req.query;

    // const prueba = await ActCount.findAll();


    try {
        
        if (countriesBD.length === 0){
            const countries = await getAllCountries();
            
            postCountries(countries);
           
            
            res.status(200).json(countries);
        }else{

            if (name){
                const encontrado = countriesBD.filter((p) => {
                   return  p.nombre.toLowerCase().includes(name.toLowerCase())
                })
                
                if (encontrado.length === 0){
                    // res.status(400).send("No se encontro ningun pais con este nombre");
                    throw new Error("No se encontro ningun pais con este nombre");
                }else{
                    res.status(200).json(encontrado);

                }
            }else{
                res.status(200).json(countriesBD);

            }
        }
        
   
    } catch(error){
        console.log(error)
        res.status(400).json({error: "No existe un pais con ese nombre."});

    }
}

const getCountryByIdHandler = async (req, res) =>{ 

    const {idPais} = req.params;

    try{
        const countrie = await getCountryById(idPais);
      
        res.status(200).json(countrie);
    }catch(error){
        console.log(error);
        res.status(400).json({error: "Error en encontrar el ID del pais."})
    }   
}

module.exports={
    getCountriesHandler,
    getCountryByIdHandler
}