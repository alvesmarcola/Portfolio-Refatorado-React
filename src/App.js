import React from 'react';

// Components 
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

import './index.css'
import './medias.css'

function App() {
  return (
    <>
      < Sidebar />
      <main className='main'>
        <Sidebar />
        <Home />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}

export default App;
