import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import female from './assets/female.png'
import male from './assets/male.png'
import other from './assets/other.png'
import './Profile.css'

function Profile({ onClose }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Gender options
    const genders = [
      { id: 1, name: 'Female', image: female },
      { id: 2, name: 'Male', image: male },
      { id: 3, name: 'Nonbinary', image: other },
    ];
  
    // Handle arrow clicks
    const handleArrowClick = (direction) => {
      if (direction === 'left' && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (direction === 'right' && currentIndex < genders.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    // Handle dot clicks
    const handleDotClick = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="profile-overlay">
        <div className="profile-box">
          <h2>Create Your Profile</h2>
          <button onClick={onClose} className="close-button">
            &times; {/* Close button */}
          </button>
  
          {/* Gender Selection Slider */}
          <div className="gender-slider">
            <button className="arrow left-arrow" onClick={() => handleArrowClick('left')}>
              &lt;
            </button>
            <div className="slider-container">
              <div
                className="slider-track"
                style={{ transform: `translateX(${-currentIndex * 100}%)` }}
              >
                {genders.map((gender) => (
                  <div key={gender.id} className="slide">
                    <img src={gender.image} alt={gender.name} />
                    <p>{gender.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="arrow right-arrow" onClick={() => handleArrowClick('right')}>
              &gt;
            </button>
          </div>
  
          {/* Dots for Gender Selection */}
          <div className="slider-dots">
            {genders.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Profile;