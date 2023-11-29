import axios from 'axios';



export const GET_COUNTRY = 'GET_COUNTRY';
export const SEARCH_NAME_FILTRO = 'SEARCH_NAME_FILTRO';
export const SEARCH_NAME_SIN_FILTRO = 'SEARCH_NAME_SIN_FILTRO';
export const GET_BY_ID ='GET_BY_ID';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const ORDENAMIENTO_ALF = 'ORDENAMIENTO_ALF';
export const ORDENAMIENTO_POB = 'ORDENAMIENTO_POB';
export const CANCELAR = 'CANCELAR'
export const FILTRO_ACT = 'FILTRO_ACT';
export const FILTRO_CONT = 'FILTRO_CONT';


export function getCountry(){
    return async function(dispatch){
        try{
            const response = await axios.get('http://localhost:3001/countries');
            
            return dispatch({   
                type: GET_COUNTRY,
                payload: response.data
            })

        }catch(error){
            alert(error.response.data.error)
        }
    }
}

// export function searchName(nombre, activity, continente){
//     return async function(dispatch){
//         const response = await axios.get(`http://localhost:3001/countries/?name=${nombre}`) 
        
//         if (activity === "Actividades" && continente === "Continentes"){
//             console.log("entre en el primer if")
//             return dispatch({
//                 type: SEARCH_NAME_FILTRO,
//                 payload: response.data
//             })

//         }
//         if(activity !== "Actividades" && continente !== "Continentes"){
//             console.log("entre en el segundo if")
//             let filtrados = response.data.filter(p => p.actividades?.includes(parseInt(activity)))
//             filtrados = filtrados.filter(p => p.continente === continente)
//             return dispatch({
//                 type: SEARCH_NAME_SIN_FILTRO,
//                 payload: filtrados
//             })
//         }
//         if(activity !== "Actividades" && continente === "Continentes"){
//             console.log("entre al tercer if")
//             let filtrados = response.data.filter(p => p.actividades?.includes(parseInt(activity)))
//             return dispatch({
//                 type: SEARCH_NAME_SIN_FILTRO,
//                 payload: filtrados
//             })
//         }
//         if(continente !== "Continetentes" && activity === "Actividades"){
//             console.log("entre al cuarto if")
//             let filtrados = response.data.filter(p => p.continente === continente)
//             return dispatch({
//                 type: SEARCH_NAME_SIN_FILTRO,
//                 payload: filtrados
//             })
//         }
//         console.log("llegue aca")
//     }
// }


export function searchName(nombre, activity, continente){
    return async function(dispatch){
        try{
            const response = await axios.get(`http://localhost:3001/countries/?name=${nombre}`) 
            // console.log("llegue aca")
            var filtrados = response.data;
    
            if (activity !== "Actividades"){
                filtrados = filtrados.filter(p => p.actividades?.includes(parseInt(activity)));
            }
    
            if (continente !== "Continentes"){
                filtrados = filtrados.filter(p=> p.continente === continente);
            }
            
            // console.log(filtrados)
            // console.log(response.data)
            return dispatch({
                type:SEARCH_NAME_FILTRO,
                payload: filtrados
            });

        }catch(error){
            alert(error.response.data.error)
        }
    }
}

export function getById(id){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/countries/${id}`);
    
            return dispatch({
                type: GET_BY_ID,
                payload: response.data
            })

        }catch(error){
            alert(error.response.data.error)
        }
    }

}

export function getActivities(){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/activities`);
        return dispatch({
            type: GET_ACTIVITIES,
            payload: response.data
        })
    }
}

export function ordenamientoAlf(orden){
   
    return async function(dispatch){
        return dispatch({
            type: ORDENAMIENTO_ALF,
            payload: orden
        })
    }
}

export function ordenamientoPob(orden){
    return function (dispatch){
        return dispatch({
            type: ORDENAMIENTO_POB,
            payload:orden
        })
    }
}

export function cancelar() {
    // console.log("estoy en cancelar action")
    return function(dispatch){
        return dispatch({
            type:CANCELAR
        })
    }
}

export function filtroAct(activity){
    return async function(dispatch){
        return dispatch({
            type:FILTRO_ACT,
            payload: activity
        })
    }
}


export function filtroCont(continente){
    return async function(dispatch){
        return dispatch({
            type: FILTRO_CONT,
            payload: continente
                
    
        })
    }
}
