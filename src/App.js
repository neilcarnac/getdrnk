import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OurCollection from './Pages/OurCollection';
import Home from './Pages/Home';
import { useState } from 'react';


function App() {
  
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
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
