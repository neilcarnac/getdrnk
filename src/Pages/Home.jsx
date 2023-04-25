
import React from 'react'
import Footer from '../Components/Footer/Footer'
import Collection from '../Components/Navbar/Collection/Collection'
import Fleshblend from '../Components/Navbar/Freshblend/Fleshblend'
import FrontPage from '../Components/Navbar/FrontPage/FrontPage'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
<>
<Navbar />
<FrontPage />
<Fleshblend />
<Collection />
<Footer />
</>
  )
}

export default Home
