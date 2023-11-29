import React from "react";
import './Paginado.css';


const Paginado = ({siguiente, anterior, pagAct}) => {
    // const pageNumber = [];

    // for ( let i =1; i<=Math.ceil(countries / items); i++){
    //     pageNumber.push(i);
    // }

    return (
        <div className="div-paginado">
            {/* <select onChange={paginado}>
                {pageNumber && pageNumber.map((p, index)=>(
                    <option value={p} key={index}>{p}</option>
                ))}
            </select> */}
            
            <button className="button-paginado" onClick={anterior}>Anterior</button>
            <p className="p-paginado">{pagAct}</p>
            <button className="button-paginado" onClick={siguiente}>Siguiente</button>
        </div>
   
    )
}

export default Paginado;