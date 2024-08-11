import './App.css';
import { Routes, Route } from "react-router-dom"
// import { useState, useEffect } from 'react';

import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Gallery from './components/gallery/gallery';
import Contact from './components/contact/contact';

//Film Components
import Redux from './components/projects/films/redux';
import Orphan from './components/projects/films/orphan';
import Gustella from './components/projects/films/gustela';
import Perfume from './components/projects/films/perfume';
import Pilgrimage from './components/projects/films/pilgrimage';
import Macedonia from './components/projects/films/macedonia';
import Gotse from './components/projects/films/gotse';
import Future from './components/projects/films/future';
import MagicSnowman from './components/projects/films/snowman';
import SnowmanBook from './components/projects/films/snowman-book';
import Hell from './components/projects/films/hell';
import Between from './components/projects/films/between';




function App() {
  return (
    <div className="app-outer-div">
        
        <NavBar />
        {/* <Location/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/the-films" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/the-magic-snowman-redux" element={<Redux/>} />
          <Route path="/my-heart-is-no-longer-an-orphan" element={<Orphan/>} />
          <Route path="/gustella-dances" element={<Gustella/>} />
          <Route path="/between-two-worlds" element={<Between/>} />
          <Route path="/the-magic-snowman-book" element={<SnowmanBook />} />
          <Route path="/the-magic-snowman" element={<MagicSnowman />} />
          <Route path="/happy-hell-night" element={<Hell />} />
          <Route path="/promise-of-perfume" element={<Perfume/>} />
          <Route path="/my-american-pilgrimage" element={<Pilgrimage/>} />
          <Route path="/colors-of-macedonia" element={<Macedonia/>} />
          <Route path="/gotse" element={<Gotse/>} />
          <Route path="/in-development" element={<Future/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
