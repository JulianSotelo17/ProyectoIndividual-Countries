import { GET_COUNTRY, SEARCH_NAME_FILTRO, GET_BY_ID, GET_ACTIVITIES, ORDENAMIENTO_ALF, CANCELAR, FILTRO_ACT, 
    SEARCH_NAME_SIN_FILTRO,ORDENAMIENTO_POB, FILTRO_CONT} from "../Actions/Actions";

let initialState = {
    countriesFiltrados:[],
    allCountries:[],
    countrieID:{},
    actividades:[],
    rerendizado:true,
    ordenadoPob:false,
    ordenadoAlf:false,
    ordenPob:"",
    ordenAlf:""

    
}

function rootReducer(state= initialState, action){
    switch (action.type){

        case SEARCH_NAME_FILTRO:
            // console.log("SEARCH_NAME")
            return{
                ...state,
                countriesFiltrados:action.payload
            }
         
        case SEARCH_NAME_SIN_FILTRO:
            // const sinFiltro = state.countriesFiltrados.filter(p => p.nombre.toLowerCase().includes(action.payload.toLowerCase()))
            
            return {
                ...state,
                countriesFiltrados:action.payload

            }


        case GET_COUNTRY:
            // console.log("GET_COUNTRY")
            let prueba = []
            prueba = action.payload.map((p) => {return p})
            return {
                ...state,
                countriesFiltrados: action.payload,
                allCountries: prueba,
                rerendizado:false
            }


        case GET_BY_ID:
            // console.log("GET_BY_ID")
            return {
                ...state,
                countrieID: action.payload
            }    

        case GET_ACTIVITIES:
            // console.log("GET_ACTIVITIES")
            // console.log(state.allCountries)
            return{
                ...state,
                actividades:action.payload,
                rerendizado:false
            }    

        case ORDENAMIENTO_ALF:
            
            // console.log("ORDENAMIENTO AALF")
            // console.log(state.countriesFiltrados)
            const countAlf = state.countriesFiltrados?.map((p) => {return p})

            const sortedCount = 
            action.payload === "Z-A" 
            ? countAlf.sort((a,b)=>{
                
                if(a.nombre.toLowerCase() > b.nombre.toLowerCase()){
                    
                    return -1;
                }
                if(b.nombre.toLowerCase() > a.nombre.toLowerCase()){
                    return 1;
                }
                
                return 0
            }) : countAlf.sort((a,b) =>{
                if(a.nombre.toLowerCase() > b.nombre.toLowerCase()){
                    return 1;
                }
                if(b.nombre.toLowerCase() > a.nombre.toLowerCase()){
                    return -1;
                }
                return 0
            });
            // console.log(state.allCountries)
            return{
                ...state,
                countriesFiltrados: sortedCount,
                ordenadoAlf:true,
                ordenAlf: action.payload
            }

            
            
            case ORDENAMIENTO_POB:
                // console.log("estoy en el ordenamiento pob")
                // console.log(state.allCountries)
                const countPob = state.countriesFiltrados?.map((p) => {return p})

                const sortedPob = 
                action.payload === "Max-Min" 
                ? countPob.sort((a,b)=>{
                    
                if(a.poblacion> b.poblacion){
                    
                    return -1;
                }
                if(b.poblacion > a.poblacion){
                    return 1;
                }
                
                return 0
            }) : countPob.sort((a,b) =>{
                if(a.poblacion > b.poblacion){
                    return 1;
                }
                if(b.poblacion > a.poblacion){
                    return -1;
                }
                return 0
            });
            // console.log(state.allCountries)
            return{
                ...state,
                countriesFiltrados: sortedPob,
                ordenadoPob:true,
                ordenPob: action.payload
            }
         
        case CANCELAR:
            // console.log("estoy en el reducer cancelar")
            // console.log(state.allCountries)
            const count = state.allCountries.map((p) =>{ return p})
            return{
                ...state,
                countriesFiltrados: count,
                ordenadoPob:true,
                ordenadoAlf:true,
                ordenAlf:"",
                ordenPob:""
            }    
            
        case FILTRO_ACT:
            if (action.payload === "Actividades"){
                return {
                    ...state,
                    countriesFiltrados: state.allCountries
                }
            }else{
                   const filtrado = state.countriesFiltrados.filter(p=> p.actividades?.includes(parseInt(action.payload)));
                    
                return {
                    ...state,                        
                    countriesFiltrados: filtrado
                }
            }

        case FILTRO_CONT:
            if(action.payload === "Continentes"){
                return {
                    ...state,
                    countriesFiltrados: state.allCountries
                }
            }else{
                const filtrado = state.countriesFiltrados.filter(p => p.continente === action.payload);

                return {
                    ...state,
                    countriesFiltrados: filtrado
                }
            }
            
            default:
                return state
                
        
    }
}

export default rootReducer;