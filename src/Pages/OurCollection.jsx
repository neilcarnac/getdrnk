import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AllProducts from '../Components/Products/AllProducts'
import LogoAnimation from '../Components/Navbar/LogoAnimation/LogoAnimation'
import Footer from '../Components/Footer/Footer'


const OurCollection = () => {
  return (
<>
<Navbar />
<LogoAnimation />
<AllProducts />

<hr style={{ 
width: '1420px',
height: '0px',
marginLeft:'0px',
marginTop: '60px',

border: "4px solid #FFFFFF",}} />

<hr style={{ 
width: '1420px',
height: '0px',
marginLeft:'0px',
marginTop: '510px',

border: "4px solid #FFFFFF",}} />
<Footer />
</>
  )
}

export default OurCollection
