import './App.css'
import {Route, Routes} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home.jsx';
import Detail from './Components/Detail/Detail.jsx';
import Create from './Components/Create/Create.jsx';

function App() {


  return (
    <div>
      

      <Routes>
        <Route path='/home/create' element={<Create/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/home/:id' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
