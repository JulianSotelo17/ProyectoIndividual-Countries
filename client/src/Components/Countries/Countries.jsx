import Countrie from "../Countrie/Countrie";
import {Link} from 'react-router-dom'
import './countries.css';

const Countries = ({countries}) =>{
    return ( 
        <div className="countriesList"  >
            
            {countries?.map((countrie) => {
                return (
                    <Link  to={`/home/${countrie.id}`} key={countrie.id}>
                        <Countrie countrie={countrie} key={countrie.id}/>
                    
                    </Link>

                )
            })}
        </div>
    )
}

export default Countries;