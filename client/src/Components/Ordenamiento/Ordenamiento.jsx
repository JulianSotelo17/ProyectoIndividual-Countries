import './Ordenamiento.css';

const Ordenamiento = ({ordenamientoAlf, ordenamientoPob, cancelar,pob, alf}) => {
    return (
        <div className="div-ordenamiento">
            {/* <select onChange={ordenamiento}>
                <option></option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select> */}
            {/* <h3>ORDEN</h3> */}
            <button className="button-ordenamiento" onClick={ordenamientoAlf} value={alf}>A-Z</button>
            <button  className="button-ordenamiento" onClick={ordenamientoAlf} value={alf}>Z-A</button>

            <button className="button-ordenamiento" onClick={ordenamientoPob} value={pob}>Min-Max</button>
            <button className="button-ordenamiento" onClick={ordenamientoPob} value={pob}>Max-Min</button>

            <button className="button-ordenamiento" onClick={cancelar}>NONE</button>
        </div>
    )
}

export default Ordenamiento