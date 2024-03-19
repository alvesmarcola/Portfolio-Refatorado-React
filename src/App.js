import React from 'react';

// Components 
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

// Hooks
import useTranslation from './hooks/Translate'

//Styles
import './index.css'
import './medias.css'

function App() {
  const { changeLanguage } = useTranslation();
  return (
    <>
      <Sidebar changeLanguage={changeLanguage} />
      <main className='main'>
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
