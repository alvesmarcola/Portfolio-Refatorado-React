import React from 'react';

// Components 
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';

import './index.css'

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
      </main>
    </>
  );
}

export default App;
