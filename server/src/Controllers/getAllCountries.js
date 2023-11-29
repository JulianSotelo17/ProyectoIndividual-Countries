const axios = require('axios');

const filtrarInfo = (arr) =>{
    const clean = arr.map((p) => {

        if (typeof(p.capital) === "object"){

            var capital = p.capital[0];
        }else{
            
            var capital = "undefined"
        }

        if(p.flags.png){
            var imagen = p.flags.png
        }else{
            var imagen = ""
        }
       
        return {
            id: p.cca3,
            nombre: p.name.common,
            imagen: imagen,
            continente: p.continents[0],
            capital: capital,
            subregion: p.subregion,
            area: p.area,
            poblacion: p.population,

        }
    })
    
    return clean
}

const getAllCountries = async () => {
    const {data} = await axios.get('http://localhost:5000/countries');
    const filtrado = filtrarInfo(data);
    
    return filtrado;
}

module.exports={
    getAllCountries
}