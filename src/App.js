import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LogoAnimation from './Components/Navbar/LogoAnimation/LogoAnimation';
import FrontPage from './Components/Navbar/FrontPage/FrontPage';
import Fleshblend from './Components/Navbar/Freshblend/Fleshblend';
import Collection from './Components/Navbar/Collection/Collection';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OurCollection from './Pages/OurCollection';
import Home from './Pages/Home';
import { useState } from 'react';


function App() {
  
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurCollection" element={<OurCollection />} />

        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <FrontPage />
      <Fleshblend />
      <Collection />
      <Footer /> */}
    </>
  );
}

export default App;
