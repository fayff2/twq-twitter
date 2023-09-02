
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Rigster from './pages/Rigster'
import Home from './pages/Home'
import Login from './pages/Login'


function App() {


  return (
    <>
    <Routes>

      <Route path='/' element={<Rigster/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
 
      

    </Routes>
      
     
    </>
  )
}

export default App
