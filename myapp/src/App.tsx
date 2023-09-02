
import './App.css'
import {Routes , Route} from 'react-router-dom'
// import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {


  return (
    <>
    <Routes>
      {/* <Route path='/' element={<Home/>}></Route> */}
      <Route path='/profile' element={<Profile/>}></Route>

    </Routes>
      
     
    </>
  )
}

export default App
