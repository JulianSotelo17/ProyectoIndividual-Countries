import './Filtrado.css';

const Filtrado = ({filtrado, actividades, actividad, filtradoCont, continente}) => {
       
    // useEffect(()=>{
    //     resetOption();
    // },[resetOption])

    return (


            <div className="div-filtrado">
                
                <select className='select-filtrado' onChange={filtradoCont} value={continente}>
                    <option className='option-filtrado' value="Continentes">Continentes</option>
                    <option className='option-filtrado' value="Asia">Asia</option>
                    <option className='option-filtrado' value="Europe">Europe</option>
                    <option className='option-filtrado' value="Africa">Africa</option>
                    <option className='option-filtrado' value="North America">North America</option>
                    <option className='option-filtrado' value="Antarctica">Antarctica</option>
                    <option className='option-filtrado' value="South America">South America</option>

                </select>
                
                <select className="select-filtrado" onChange={filtrado} value={actividad}>
                    
                    <option  className="option-filtrado" value="Actividades">Actividades</option>
                    {actividades?.map((p, index) => (
                        <option value={p.id} key={index}>{p.nombre}</option>
                    ))}
                </select>
            </div>

    )
}

export default Filtrado