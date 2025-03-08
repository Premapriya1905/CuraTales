import './App.css'
import girl from './assets/girl.png'
// import {data} from './data.js'
import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import Profile from './Profile.jsx'
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { GoFileDirectory } from "react-icons/go";
import { FaArrowDownLong } from "react-icons/fa6";



const App = () => {
  return (
    <div>

      <div>
        <div className='container'>
          <div className='title'>
              <h3 className='title1'>Cura</h3>
              <h3>Tales</h3>
          </div>
          <div className='sections'>
            <a href='Home'>Home</a>
            <a href='About'>About</a>
            <a href='Features'>Features</a>
            <a href='Remedies'>Remedies</a>
            <a href='Community'>Community</a>
            <a href='Recipies'>Recipies</a>
          </div>
        </div>

        <div className='circle1'></div>

        <div className='home'>
          <div className='trad'>

            <div>
              <h1 className='title1'>Traditional Wisdom</h1>
              <h1 className='modern'>Modern Healing</h1>
            </div>

            <div className='discover'>
              <h6>Discover and share time-tested home remedies passed down through <br /> generations. Natural solutions for everyday ailments without side effects.</h6>
            </div> 
            <button className='explore'>Explore Remedies</button>
            <button className='share'>Share your wisdom</button>
          </div>

          <div className='search-box'>
            <h4 className='find'>Find Natural Remedies</h4>

            <div className='circle2'></div>

            <input className='search' type="text" placeholder=' 🔍 Search symptoms or ailments...'/>

            <div className='symp'>
              <button className='symp1'>Cough</button>
              <button className='symp1'>Fever</button>
              <button className='symp1'>Cold</button>
              <button className='symp1'>Headache</button>
              <button className='symp1'>Digestion</button>
            </div>
          </div>
        </div>

        <div className='quote'>
          <h6>"My grandmother's turmeric <br /> milk remedy cured my cold in <br /> just 2 days!"</h6>
          <h6>Sara T.</h6>
        </div>

        <div className='circle3'></div>

        <div className='home-end'>
          <div className='home-end'>
            <div className='icons'><MdOutlineVerifiedUser /></div>
            <div>Natural Solutions <br />Time-tested & safe</div>
          </div>
          <div className='home-end'>
            <div className='icons'><FaUserGroup /></div>
            <div>Community Wisdom <br />1000+ shared remedies</div>
          </div>
          <div className='home-end'>
            <div className='icons'><GoFileDirectory /></div>
            <div>Organized Categories <br />Easy to navigate</div>
          </div>
        </div>

        <div className='down-arrow'><FaArrowDownLong /></div>
      </div>
      
      <div>
        <div>
          <h4>WHO WE ARE</h4>
          <h1>Reviving Ancestral Healing Wisdom</h1>
        </div>

        <div></div>
        <div></div>
      </div>
      
    </div>
    
  )
}

export default App
