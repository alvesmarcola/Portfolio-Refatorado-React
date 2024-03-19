import React from 'react'
import "./portfolio.css"

import growflix from '../../assets/images/grow.png'
import codai from '../../assets/images/codai.png'
import expansive from '../../assets/images/expansive.png' 
import hub from '../../assets/images/hub.png'


const Portfolio = () => {
  return (

    <div className="portfolio__container">
      <div className="titles">
      <h2 className="section__title">Portfólio</h2>
      <span className="section__subtitle">Meus últimos projetos desenvolvidos</span>
      </div>
      <div className="portfolio__column">
        <div className="portfolio__card">
          <a href="#" className="project__banner">
            <img src={growflix} alt="" className="project__card-img" />
          </a>
          <div className="project__content">
            <h3>Growflix</h3>
            <p className="project__description">
              Projeto construído durante o curso desenvolvimento Full Stack da Growdev, o site é baseado na Netflix.
            </p>
            <ul className="project__items">
              <li className="project__item">HTML</li>
              <li className="project__item">CSS</li>
              <li className="project__item">Javascript</li>
              <li className="project__item">Bootstrap</li>
            </ul>
          </div>
          <div className="project__links">
            <a href="https://github.com/alvesmarcola/App-inspiradora---Growflix" className="project__link" aria-label="Link github">
              <i className="uil uil-github"></i>
            </a>
            <a href="https://growflix-bice.vercel.app/" className="project__link" aria-label="Link Growflix">
              <i className="uil uil-eye"></i>
            </a>
          </div>
        </div>

        <div className="portfolio__card">
        <a href="#" className="project__banner">
            <img src={codai} alt="" className="project__card-img" />
          </a>
          <div className="project__content">
            <h3>Codaí</h3>
            <p className="project__description">
              Site simples com controle de finanças. Entradas, saídas, histórico de transações e saldo.
            </p>
            <ul className="project__items">
              <li className="project__item">HTML</li>
              <li className="project__item">CSS</li>
              <li className="project__item">Javascript</li>
              <li className="project__item">Bootstrap</li>
            </ul>
          </div>
          <div className="project__links">
            <a href="https://github.com/alvesmarcola/Projeto-Growdev" className="project__link" aria-label="Link github">
              <i className="uil uil-github"></i>
            </a>
            <a href="https://alvesmarcola.github.io/Projeto-Growdev/" className="project__link" aria-label="Link codai">
              <i className="uil uil-eye"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="portfolio__column">
        <div className="portfolio__card">
        <a href="#" className="project__banner">
            <img src={expansive} alt="" className="project__card-img" />
          </a>
          <div className="project__content">
            <h3>Tracker Expansive</h3>
            <p className="project__description">
              Projeto de controle de finanças feito em React.
            </p>
            <ul className="project__items">
              <li className="project__item">HTML</li>
              <li className="project__item">CSS</li>
              <li className="project__item">Javascript</li>
              <li className="project__item">React</li>
            </ul>
          </div>
          <div className="project__links">
            <a href="https://github.com/alvesmarcola/Extrato-bancario---React" className="project__link" aria-label="Link github">
              <i className="uil uil-github"></i>
            </a>
            <a href="https://extrato-bancario-react.vercel.app/" className="project__link" aria-label="Link Tracker expansive">
              <i className="uil uil-eye"></i>
            </a>
          </div>
        </div>
        <div className="portfolio__card">
        <a href="#" className="project__banner">
            <img src={hub} alt="" className="project__card-img" />
          </a>
          <div className="project__content">
            <h3>Hub atividades Growdev</h3>
            <p className="project__description">
              Hub desenvolvido para guardar atividades avaliativas da Growdev.
            </p>
            <ul className="project__items">
              <li className="project__item">HTML</li>
              <li className="project__item">CSS</li>
              <li className="project__item">Javascript</li>
            </ul>
          </div>
          <div className="project__links">
            <a href="https://github.com/alvesmarcola/Escola-Soneto-de-musica" className="project__link" aria-label="Link github">
              <i className="uil uil-github"></i>
            </a>
            <a href="https://github.com/alvesmarcola/Growdev---Atividades" className="project__link" aria-label="Link hub">
              <i className="uil uil-eye"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio
