import React from 'react'
import './Navbar.css';
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
        <p className="time">Next drop: 01D : 02H: 42M:42S</p>
    </div>
    <button className='ordernow'>
    Order Now
    </button>
</div>
    </>
  )
}

export default Navbar
