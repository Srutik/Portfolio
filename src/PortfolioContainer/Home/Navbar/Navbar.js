import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="header-container">
        <div className="header-parent">
          <div className="header-hamburger">
          </div>
          <div className="header-logo">
            <span>SRUTIK</span>
          </div>
          <div className={click ? "header-options-active" : "header-options"}>
            <a className="header-option" href="#" onClick={handleClick}>
              <span>Home</span>
            </a>
            <a className="header-option" href="/#AboutMe" onClick={handleClick}>
              <span>AboutMe</span>
            </a>
            <a className="header-option" href="/#Resume" onClick={handleClick}>
              <span>Resume</span>
            </a>
            <a className="header-option" href='/#ContactMe' onClick={handleClick}>
              <span>ContactMe</span>
            </a>
          </div>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;



{/* <div className='Navbar'>
        <div className='nav-left'> SRUTIK</div>
        <div className='nav-right'>
          <div className='links' id={showLinks ? "hidden" : ""}>
            <a href='#home' smooth duration={2000} onClick={() => setShowLinks(!showLinks)}>Home</a>
            <a href='#AboutMe' smooth duration={2000} onClick={() => setShowLinks(!showLinks)}>AboutMe</a>
            <a href='#resume' smooth duration={2000} onClick={() => setShowLinks(!showLinks)}>Resume</a>
            <a href='#contact' smooth duration={2000} onClick={() => setShowLinks(!showLinks)}>ContactMe</a>
          </div>
          <button onClick={() => setShowLinks(!showLinks)}>
            {" "}
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div> */}