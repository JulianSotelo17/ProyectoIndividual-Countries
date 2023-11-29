import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCountry, searchName, getActivities, ordenamientoAlf, filtroAct, ordenamientoPob, cancelar, filtroCont} from "../../Redux/Actions/Actions";
import { Link } from "react-router-dom";
import Countries from "../Countries/Countries";
import SearchBar from "../SearchBar/SearchBar";
import Paginado from  '../Paginado/Paginado';
import Ordenamiento from "../Ordenamiento/Ordenamiento";
import Filtrado from "../Filtrado/Filtrado";
import './Home.css';
import miImagen from '../../assets/logo-Home.png';

const Home = () => {
    const dispatch = useDispatch();
    
    let countries = useSelector((state) => state.countriesFiltrados);
    const activities = useSelector((state) => state.actividades);
    
    const ordenadoAlf = useSelector((state) => state.ordenadoAlf);
    const ordenadoPob =useSelector((state) => state.ordenadoPob)
    const ordenadoPorPob = useSelector((state) => state.ordenPob);
    const ordenadoPorAlf = useSelector((state) => state.ordenAlf);
    
    const prueba =useSelector((state) => state.rerendizado)
    
    //*Paginado
    const [pagAct, setPagAct] = useState(1);
    const items = 10;
    const lastIndex =  pagAct * items;
    const firstIndex = lastIndex - items;
    const currentCount = countries.slice(firstIndex, lastIndex);

    let pageNumber = Math.ceil(countries.length / items)

    function siguiente(e){
        e.preventDefault()
        if ((pagAct + 1 )<= pageNumber){
            setPagAct(pagAct + 1)

        }
    }

    function anterior(e){
        e.preventDefault()
        if ((pagAct - 1 )>=1){
        setPagAct(pagAct - 1)
        }
    }


    //* Generacion del componente
    useEffect(() =>{
        
            dispatch(getCountry())

            dispatch(getActivities())

        return 
       
    }, [dispatch])
    
    //* busqueda por nombre

    const [name, setName] = useState("");

    function handleChange(e){
        e.preventDefault()
        
        setName(e.target.value)
        dispatch(searchName(e.target.value, actividad, continente))
        if (ordenPob !== ""){
            dispatch(ordenamientoPob(ordenPob));
        }
        if (ordenAlf !== ""){
            dispatch(ordenamientoAlf(ordenAlf));
        }
        
        setPagAct(1)     
    }
    
    //* ordenamiento Alf

    const [ordenAlf, setOrdenAlf] = useState(!ordenadoAlf ? "":ordenadoPorAlf);

    const handleChangeOrd = (e)=>{
        e.preventDefault()   
        
        setOrdenAlf(e.target.innerHTML)
        dispatch(ordenamientoAlf(e.target.innerHTML))
        setOrdenPob("")
    }

    //* ordenamiento Poblacion

    
        var [ordenPob, setOrdenPob] = useState(!ordenadoPob ? "" : ordenadoPorPob);

    

    const handleChangePob = (e) =>{
        e.preventDefault()

        setOrdenPob(e.target.innerHTML)
        dispatch(ordenamientoPob(e.target.innerHTML))
        setOrdenAlf("")
    }

    //* Filtrado por actividades

    const [actividad, setActividad] = useState("Actividades")

    const handleChangeFiltroAct = (e) => {
        e.preventDefault()
        setActividad(e.target.value)
        // dispatch(getCountry())
        dispatch(cancelar())
        dispatch(filtroAct(e.target.value))
        if (ordenPob !== ""){
            dispatch(ordenamientoPob(ordenPob));
        }
        if (ordenAlf !== ""){
            dispatch(ordenamientoAlf(ordenAlf));
        }
        if(continente !== "Continentes"){
            dispatch(filtroCont(continente, actividad))
        }
        setName("");
        setPagAct(1)
    }

    const [continente, setContinente] = useState("Continentes")

    const handleChangeFiltroCont= (e) => {
        e.preventDefault()
        setContinente(e.target.value)
        dispatch(cancelar())
        dispatch(filtroCont(e.target.value))
        if (ordenPob !== ""){
            dispatch(ordenamientoPob(ordenPob));
        }
        if (ordenAlf !== ""){
            dispatch(ordenamientoAlf(ordenAlf));
        }
        if (actividad !== "Actividades"){
            dispatch(filtroAct(actividad))
        }
        setName("")
        setPagAct(1)
    }
    

    //* cancelar cualquier filtro o orden

    const handleSubmit = (e) => {
        e.preventDefault() 

        dispatch(cancelar())

        setActividad("Actividades");   
        setContinente("Continentes");
        setOrdenAlf("");
        setOrdenPob("");
        setName("");
        setPagAct(1)
    }


    return (
        <div className="div-container-home">

            <div className="NavBar">
                
                {/* <img className="logo" src="../../assets/logoPlaneta.png" alt="Logo"></img> */}
                <img className="logo-home" src={miImagen} alt="Descripción de la imagen" />
                <Link to="/home/create">
                    <button className="button-home">Crear Actividad</button>
                </Link>
                <SearchBar name={name} handleChange={handleChange} ></SearchBar>
                
          
                    <Ordenamiento pob={ordenPob} alf={ordenAlf} cancelar={handleSubmit} ordenamientoAlf={handleChangeOrd} ordenamientoPob={handleChangePob}></Ordenamiento>
                    
           
                    <Filtrado filtrado={handleChangeFiltroAct} actividades={activities} actividad={actividad} filtradoCont={handleChangeFiltroCont} continente={continente}></Filtrado>
                    {/* {console.log(continente)} */}
            </div>
            <div className="div-home-paginado">

                <Paginado siguiente={siguiente} anterior={anterior} pagAct={pagAct} ></Paginado>

            </div>
            

          
          {countries?.length>0?<Countries countries={currentCount}></Countries>:<h1>No se encontraron Paises</h1>}

        </div>
    )
}

export default Home;