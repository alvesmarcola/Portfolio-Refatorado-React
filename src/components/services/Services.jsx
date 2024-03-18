import React, { useState } from 'react';

import './services.css'

const Services = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <section className="services section" id="services">
            <h1 className="section__title" data-translate="services">Serviços</h1>
            <span className="section__subtitle" data-translate="servicestwo">O que eu posso lhe oferecer?</span>

            {/* Serviço 1 */}
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                    </div>
                    <h3 className="services__title" data-translate="designredes">Design <br /> para redes sociais</h3>

                    <span className="button button--flex button--small button--link services__button" onClick={toggleModal}>
                        Veja aqui!
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    {modalOpen && (
                        <div className="services__modal">
                            <div className="services__modal-content">
                                <h4 className="services__modal-title" data-translate="efeito">O que esse serviço te proporciona?</h4>
                                <i className="uil uil-times services__modal-close" onClick={toggleModal}></i>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p data-translate="one">Redes Sociais organizadas;</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p data-translate="two">Produção de conteúdo profissional;</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p data-translate="three">Transformo conceitos complexos em artes simples; </p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p data-translate="four">Passar identificação com o cliente.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {/* Serviço 2 */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-brush-alt services__icon"></i>
                        <h3 className="services__title" data-translate="skill-one">Desenvolvimento <br /> Front-end</h3>
                    </div>

                    <span className="button button--flex button--small button--link services__button" onClick={toggleModal}>
                        Veja aqui!
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    {modalOpen && (
                        <div className="services__modal">
                            <div className="services__modal-content">
                                <h4 className="services__modal-content" data-translate="efeito">O que meu serviço te proporciona?</h4>
                                <i className="uil uil-times services__modal-close" onClick={toggleModal}></i>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p data-translate="five">Avalancagem do seu negócio;</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p data-translate="six">Sites responsivos e de carregamento rápido;</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p data-translate="seven">Padrões Modernos;</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p data-translate="eigtht">interfaces profissonais e inovadoras.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;
