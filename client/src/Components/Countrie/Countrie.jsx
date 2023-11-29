import './countrie.css';

const Countrie = ({countrie}) => {

    
    return (
        <div className='countrie'>
            <img className="bandera" src={`${countrie.imagen}`} alt="bandera"></img>
            <p>Nombre: {countrie.nombre}</p>
            <p>Continente: {countrie.continente}</p>
            
            
        </div>
    )
}

export default Countrie