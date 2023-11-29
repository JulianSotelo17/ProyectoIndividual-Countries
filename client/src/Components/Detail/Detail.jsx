import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux" 
import { getById, getActivities } from "../../Redux/Actions/Actions"
import { Link } from "react-router-dom"
import './Detail.css';

const Detail = () => {
    
    
    const dispatch= useDispatch();
    const {id} =useParams();

    useEffect(()=>{
        dispatch(getById(id));
        dispatch(getActivities());
    },[dispatch])

    const countrie = useSelector((state) => state.countrieID);
    const actividades = useSelector((state) => state.actividades)
    const actCount = actividades.filter(obj => countrie.actividades?.includes(obj.id))
    return (
        <div className="div-container-detail">
            <Link to='/home'>
                <button className="button-detail">Volver</button>
            </Link>
            <p className="p-detail">ID: {countrie.id}</p>
            <div className="div-nombre-detail">

                <h3 className="p-detail">{countrie.nombre}</h3>
            </div>
            <div className="div-imagen-details">
                <img className="imagen-detail" src={countrie.imagen} alt="bandera"/>

            </div>
            <p className="p-detail">Continente: {countrie.continente}</p>
            <p className="p-detail">Capital: {countrie.capital}</p>
            {countrie.subregion?<p>Subregion: {countrie.subregion}</p>:null}
            {countrie.area?<p>Area: {countrie.area}</p>:null}
            <p className="p-detail">Poblacion: {countrie.poblacion}</p>
            <p className="p-detail">Actividades:</p>
            {actCount.length >0 ? actCount.map((p, index)=>(
                <div className="actividad-detail" key={index}>
                    <h3 className="actividad-p-detail">{p.nombre}</h3>
                    <p className="actividad-p-detail">Dificultad: {p.dificultad}</p>
                    <p className="actividad-p-detail">Duracion(hrs): {p.duracion}</p>
                    <p className="actividad-p-detail">Temporada: {p.temporada}</p>
                </div>
            )):<p className="p-detail">No hay actividades disponibles para este Pais</p>}
            
        </div>
    )
}

export default Detail