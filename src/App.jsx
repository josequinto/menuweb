import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './Navbar'

import Home from './pages/Home'
import Burgers from './pages/Burgers'
import Hotdogs from './pages/Hotdogs'
import Postres from './pages/Postres'
import Bebidas from './pages/Bebidas'


function App() {
  const location = useLocation();

  return (
    <>
    { location.pathname != "/" && <Navbar /> }
    <Routes>
      <Route path='/' element={ <Home />  } />
      <Route path='/food' element={ <><Burgers /><Hotdogs /></>  } />
      <Route path='/postres' element={ <Postres />  } />
      <Route path='/bebidas' element={ <Bebidas />  } />
    </Routes>
    
         
    </>
  )
}

export default App
