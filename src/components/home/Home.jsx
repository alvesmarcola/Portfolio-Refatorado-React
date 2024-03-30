import React from 'react'
import './home.css'


const Home = () => {
  return (
    <section className="home section site" id="home">
      <div className="home__container container grid">
        <div className="home__content">
          <div className="home__social">
            <a href="https://www.linkedin.com/in/omarcolvess/" className="home__social-icon" target="_blank">
              <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/alvess_marcoo/" className="home__social-icon" target="_blank">
              <i className="uil uil-instagram"></i>
            </a>
            <a href="https://github.com/alvesmarcola" className="home__social-icon" target="_blank">
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
          
          <div className="home__data">
            <h1 className="home__title">Marco Antônio</h1>
            <h3 className="home__subtitle" data-translate="developer">Desenvolvedor Front-end</h3>
            <p className="home__description" data-translate="descricao">Este é meu Website e Portfólio oficial.
              <br />
              Todos os detalhes dos trabalhos desenvolvidos por mim estão aqui.
            </p>
            <a href="#contact" className="button button--flex" data-translate="bora">Vamos conversar?<i className="uil uil-message button__icon"></i></a>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name" data-translate="roll">Role pra baixo!</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
