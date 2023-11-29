import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCountry } from "../../Redux/Actions/Actions"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import validate from "./Validate"
import './Create.css';


const Create = () => {
    
    const dispatch = useDispatch();

    
    const prueba = useSelector(((state) => state.rerendizado))
    useEffect(() =>{
        if (prueba){

            dispatch(getCountry())
        }
    }, [dispatch])
    const countries = useSelector((state) => state.allCountries)



    const [input, setInput] = useState({
        nombre:"",
        dificultad:null,
        duracion:null,
        temporada:"",
        paises:[]

    })

    const [error, setError] = useState({
        nombre:"",
        dificultad:"",
        duracion:"",
        temporada:"",
        paises:""

    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });

        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }   

    function handleChangeCountry(e) {
        if (!input.paises.includes(e.target.value)){
            setInput({
                ...input,
                paises:[...input.paises, e.target.value]
            })
            
            setError(validate({
                ...input,
                paises: [...input.paises, e.target.value]
            }))
        }
        // setError(validate({
        //     ...input,
        //     paises: [...input.paises, e.target.value]
        // }))
    }

    function handleDelete(e){
        // console.log(e.target.textContent)
        setInput({
            ...input,
            paises: input.paises.filter(p => p !== e.target.textContent)
        })

        setError(validate({
            ...input,
            paises: input.paises.filter(p => p !== e.target.textContent)
        }))
    }

    async function handleSubmit(e){
        try {
            e.preventDefault()
            let enviado = input
            await axios.post(`http://localhost:3001/activities`, enviado)
            setInput({ 
                nombre:"",
                dificultad:null,
                duracion:null,
                temporada:"",
                paises:[]
            });
        }catch(error){
            alert(error)

        }
    }
    

    return (
        <div className="container-create">

            <Link to="/home">
                <button className="button-create">Volver</button>
            </Link>

            <form className="form-create">
                <div className="div-elemento-create">
                    <label className="label-create">Actividad</label>
                    <input className="input-create" name="nombre" placeholder="Nombre de la Actividad" value={input.value} onChange={handleChange}></input>
                    <span className="span-create">{error.nombre}</span>
                </div>
                <div className="div-elemento-create">
                    <label className="label-create">Dificultad</label>
                    {/* <input name="dificultad" placeholder="Dificultad de la Actividad" value={input.value} onChange={handleChange}></input> */}
                </div>
                    <button className="button-create" type="button" name="dificultad" value={1} onClick={handleChange}>1</button>
                    <button className="button-create" type="button" name="dificultad" value={2} onClick={handleChange}>2</button>
                    <button className="button-create" type="button" name="dificultad" value={3} onClick={handleChange}>3</button>
                    <button className="button-create" type="button" name="dificultad" value={4} onClick={handleChange}>4</button>
                    <button className="button-create" type="button" name="dificultad" value={5} onClick={handleChange}>5</button>
                    <label className="label-create">Dificultad Seleccionada: {input.dificultad}</label>
                    <span className="span-create">{error.dificultad}</span>
                <div className="div-elemento-create">
                    <label className="label-create">Duracion (horas)</label>
                    <input className="input-create" name="duracion" placeholder="Duracion de la Actividad" value={input.value} onChange={handleChange}></input>
                    <span className="span-create">{error.duracion}</span>
                </div>
                <div className="div-elemento-create"> 
                    <label className="label-create">Temporada</label>
                    <select className="select-create" name="temporada" onChange={handleChange}>
                        <option name="Verano" value={input.value}>Verano</option>
                        <option name="Otoño" value={input.value}>Otoño</option>
                        <option name="Invierno" value={input.value}>Invierno</option>
                        <option name="Primavera" value={input.value}>Primavera</option>
                    </select>
                </div>
                <div className="div-elemento-create">
                    <label className="label-create">Paises</label>
                    <select className="select-create" name="paises" onChange={handleChangeCountry}>
                        {countries?.map((p,index)=>(
                            <option key={index}>{p.nombre}</option>
                        ))}
                    </select>
                    <label className="label-create">Seleccionados: {input.paises.length}</label>
                    <span className="span-create">{error.paises}</span>
                </div>
                
            {input.paises?.map((p,index) => (
                <button type="button" className="button-create" onClick={handleDelete} key={index}>{p}</button>
            ))}
            <div className="button-submit-create">
                {input.nombre && input.dificultad && input.temporada && input.paises.length>0 && !error.nombre && !error.dificultad && !error.duracion && !error.temporada && !error.paises && 
                <Link to="/home"><button  className="button-create" onClick={handleSubmit}>CREAR</button></Link>}
                
            </div>
            </form>
          
        </div>
        
    )
}

export default Create