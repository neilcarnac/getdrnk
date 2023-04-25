import React from 'react'
import './Navbar.css';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Timer from './Countdown/Timer';
const Navbar = () => {
  return (
    <>
<div id="navbar">
    <div id="marqueebox">
        <p className='open'>[</p>
        <p className='shut'>...]</p>
        <div className="contain">
        <marquee className='mack' behavior="scroll" direction="">Next Available On Friday/Saturday & Sunday</marquee>
        </div>
    </div>
    <div className="timer">
    <Link
            variant="button"
            color="textPrimary"
            component={RouterLink}
            to="/Home"
          
          >   
        {/* <p className="time">Next drop: 01D : 02H: 42M:42S</p> */}
        <Timer />
          </Link>
    </div>
    <Link
            variant="button"
            color="textPrimary"
            component={RouterLink}
            to="/OurCollection"
          
          >   <button className='ordernow'>
          Order Now
          </button>
          </Link>
 
</div>
    </>
  )
}

export default Navbar
