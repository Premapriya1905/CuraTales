import './App.css'
import {data} from './data.js'
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";


function App() {
  const [menuClose,setMenuClose]=useState(false)
  const [darkMode, setDarkMode]=useState(true)
  const [value, setValue]=useState('')

  const onChange = (e)=>{
    setValue(e.target.value);1
  }

  const onSearch = (searchTerm)=>{
    setValue(searchTerm);
    console.log('search',searchTerm)
  }

  return (
    <>
    <div className={darkMode ? "dark-mode" : "light-mode"}>

      <div className='main'>
        <div className='nav2'>
          <FaBars className='menu' onClick={()=>setMenuClose(!menuClose)}/>
          {menuClose &&(
            <div className='dropdown'>
              <div>Signup</div>
              <div>Profile</div>
              <div>Home</div>
              <div>Recipies</div>
            </div> 
          )}
          <div className='title'>CuraTales</div>
          <div className='nav1'>
            {darkMode ?(
              <MdLightMode className='icon' onClick={() => setDarkMode(false)} />
            ) : (
              <MdNightlight className='icon' onClick={()=>setDarkMode(true)}/>
            )}
            <div className='community'>🌐</div>
          </div>
        </div>

        <p className="search-container">
          <div className='search-inner'>
            <input type="text" value={value} onChange={onChange}/>
            <button onClick={()=>onSearch(value)}>🔍</button>
          </div>    
          <div className='dropdown'>
            {data.filter(item => {
              const searchTerm = value.toLowerCase();
              const fullName=item.full_name.toLowerCase();

              return (searchTerm && fullName.startsWith(searchTerm) && fullName!=searchTerm );
            }).slice(0,10)
            .map((item)=>( 
              <div onClick={()=> onSearch(item.full_name)} className='dropdown-row' key={item.full_name}>{item.full_name}</div> 
            ))}
          </div>        
        </p>
        
      
      </div>


      </div>

      
    </>
  )
}

export default App
