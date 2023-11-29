import './SearchBar.css'

const SearchBar = ({handleChange, name}) => {
    return (
        <div> 
            {/* <form onChange={handleChange}> 
            </form> */}
                <input className="input-busqueda" onChange={handleChange} value={name} placeholder="Busque el pais..." type="search"></input>
                {/* <button type="submit" >Buscar</button> */}
        </div>
    )
}

export default SearchBar