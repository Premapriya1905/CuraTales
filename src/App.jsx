import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Cura from './components/Cura.jsx'
import Landing from './components/Landing.jsx'
// import Profile from './Profile.jsx'



const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>    
  )
}

export default App
