import {Link} from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='landingPage-container'>
            <h1 className="title-LandingPage">Countries PI</h1>
            <Link to='/home'> 
                <button className='button-LandingPage'>Home</button>
            </Link>
        </div>
    )
}

export default LandingPage;