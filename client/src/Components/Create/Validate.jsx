const validate = (input) => {
    const error = {}

    if (input.nombre && (input.nombre.length < 3 || /\d/.test(input.nombre))) {
        error.nombre = "*El nombre no debe contener numeros. \n *El nombre debe tener al menos 3 letras."
      
    }else{
   
        error.nombre=""
    }

    if(input.dificultad && (isNaN(input.dificultad) || input.dificultad > 5 || input.dificultad < 1 )){
        error.dificultad = "*La dificultad debe ser puesta del 1 al 5."
    }else{
        error.dificultad = ""
    }

    if( input.duracion && (isNaN(input.duracion))){
        error.duracion="*Ingrese una duracion correcta."
    }else{
        error.duracion =""
    }

    if(input.duracion && input.temporada === ""){
        error.temporada = "*Debe ingresar una temporada."
    }else{
        error.temporada = ""
    }

    if(input.paises && (input.paises.length<1)){
        error.paises = "*Debe ingresar al menos un pais."
    }else{
        error.paises  =""
    }
    
    
    
    return error
}
export default validate