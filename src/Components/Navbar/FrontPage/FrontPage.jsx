import React from 'react'
import './FrontPage.css'
const FrontPage = () => {
    return (
        <>
        <div className="backyard">
        <center>
        <div className="imag">
        <img className='sizeimage' src="drnnklogo.png" alt="" />
        </div>
        </center>
        <img src="Vectorbg.png" className='bgblur' alt="" />
        </div>

        <h4 className="fresh">A FRESHLY BLENDED GUILT-FREE EXPERIENCE</h4>
        <p className='info'>10 original drnks custom curated for those who enjoy the finer things in life- drnk is set to bring you an experience like no other. Grab your drnk while it lasts, and join the community.</p>
        <img className='coffee' src="coffee.jpg" alt="" />
        <button className='button'>
           Want to Click? 
        </button>

        <marquee className='marq' behavior="scroll" direction="left">Not your daddy’s drnks  Not your daddy’s drnks  Not your daddy’s drnks  Not your daddy’s drnks</marquee>
        </>
    )
}

export default FrontPage
