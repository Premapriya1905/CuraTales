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
import { BiFontFamily, BiMessageAltDetail } from "react-icons/bi";
import { GoBook } from "react-icons/go"; 
import { HiOutlineGift } from "react-icons/hi"; 
import { RiUserCommunityFill } from "react-icons/ri"; 



const App = () => {
  return (
    <div>
      <div>
        <div className='container'>
          <div className='title'>
              <h3 className='cura'>Cura</h3>
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

      <div className='section2'>
            <div className='section2-head'>
              <h4 className='who'>WHO WE ARE</h4>
              <h1>Reviving Ancestral Healing Wisdom</h1>
              <div className='line'></div>
            </div>

            <div className='about'>
              <div>
                <div>
                  <div className='our'>Our Mission</div> <br />
                  <div className='about1'>
                    CuraTales was created with a simple yet powerful mission: to preserve and share traditional healing <br />
                    wisdom that has been passed down through generations. In a world dominated by modern <br />
                    medicine, we believe there's immense value in the time-tested remedies our ancestors relied upon.
                  </div> <br />
                  <div>
                    We provide a platform where people can discover natural solutions for common ailments without <br />
                    side effects, using ingredients often found right in their kitchen. By building a community of <br />
                    knowledge-sharers, we aim to keep traditional healing practices alive and accessible to everyone.
                  </div> <br />

                  <div className='cups4'>

                    <div >
                      <div className='cups'>
                        <div className='percents'>100+</div> <br />
                        <div>Traditional Remedies</div>
                      </div> <br />
                      <div className='cups'>
                        <div className='percents'>50+</div><br />
                        <div>Ailment Categories</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className='cups'>
                        <div className='percents'>15k+</div><br />
                        <div>Community Members</div>
                      </div> <br />
                      <div className='cups'>
                        <div className='percents'>100%</div><br />
                        <div>Natural Solutions</div>
                      </div>
                    </div>
                    
                  </div>

                </div>
              </div>

              <div>
                <div className='found-box'>
                    <div className='msg'><BiMessageAltDetail /></div>
                    <div className='whispers'>
                      "In the whispers of our elders lie the secrets to natural healing that modern <br />
                      medicine often overlooks. These remedies, tested through time, are our heritage <br />
                      and our future."
                    </div>
                    <div className='about-profile'>
                      <div className='circle4'><b>AD</b></div>
                      <div><span><b>Aanya Desai</b></span> <br />
                      Founder, CuraTales</div>
                    </div>
                </div>
                <div className='found-icons'>
                  <h1 className='found-icon'><GoBook /></h1>
                  <h1 className='found-icon'><RiUserCommunityFill /></h1>
                  <h1 className='found-icon'><HiOutlineGift /> </h1>
                </div>
              </div>
              
            
          </div>
      </div>
        
      
    </div>
    
  )
}

export default App
