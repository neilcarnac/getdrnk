import React from 'react'
import './Footer.css'
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
  <div className='footer'>
    <p className="mail">Enter Your Email And Join the club</p>
    <div className="outerrect">
      <input className='textbo' type="text" />
      <button className='innerrect'>join us</button>
      <a href="" className="instagram">Instagram</a>
      <a href="" className="Linkedn">Linkedn</a>
      <a href="" className="Pinterest">Instagram</a>
    </div>
    <div className="navigations">
    <Link
            variant="button"
            color="textPrimary"
            component={RouterLink}
            to="/"
            className='HomeButtonNavigation'
          >Home
          </Link>
    <Link
            variant="button"
            color="textPrimary"
            component={RouterLink}
            to="/OurCollection"
            className='OurCollectionNavigation'
          >Our Collection
          </Link>
    </div>
  </div>
    </>
  )
}

export default Footer
