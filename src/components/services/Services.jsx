import React, { useState } from 'react';

import './services.css'

const Services = () => {
    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);

    const toggleModal1 = () => {
        setModalOpen1(!modalOpen1);
    };

    const toggleModal2 = () => {
        setModalOpen2(!modalOpen2);
    };


    return (
        <section className="services section" id="services">
            <h1 className="section__title" data-translate="services">Serviços</h1>
            <span className="section__subtitle" data-translate="servicestwo">O que eu posso lhe oferecer?</span>

            {/* Serviço 1 */}
            <div className="services__container">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                    </div>
                    <h3 className="services__title" data-translate="designredes">Boots <br /> Automatizadores </h3>

                    <span className="button button--flex button--small button--link services__button" onClick={toggleModal1}>
                        Veja aqui!
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    {modalOpen1 && (
                        <div className="services__modal">
                            <div className="services__modal-content">
                                <h4 className="services__modal-title" data-translate="efeito">O que esse serviço te proporciona?</h4>
                                <i className="uil uil-times services__modal-close" onClick={toggleModal1}></i>

                                <ul className="services__modal-services">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p data-translate="one">Automação de serviços;</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p data-translate="two">Escalabilidade;</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p data-translate="three">Personalização; </p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p data-translate="four">Analise de dados</p>
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

                    <span className="button button--flex button--small button--link services__button" onClick={toggleModal2}>
                        Veja aqui!
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    {modalOpen2 && (
                        <div className="services__modal">
                            <div className="services__modal-content">
                                <h4 className="services__modal-content" data-translate="efeito">O que meu serviço te proporciona?</h4>
                                <i className="uil uil-times services__modal-close" onClick={toggleModal2}></i>

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
