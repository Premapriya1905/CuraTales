import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Remedies from './components/Remedies.jsx'
import Landing from './components/Landing.jsx'


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Remedies' element={<Remedies />} />
          {/* <Route path='/navbar' element={<navbar />} /> */}
        </Routes>
      </BrowserRouter>    
  )
}

export default App