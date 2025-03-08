import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cura from './Cura.jsx'
import Profile from './Profile.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        {/* <Route path='/profile' element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
