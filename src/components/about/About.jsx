import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import Image from '../../assets/images/marcos.png';


const About = () => {
    return (
        <motion.section
            className="about container section"
            id="about"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} // Definição da animação ao entrar
            transition={{ duration: 1.5 }} 
        >
            <div className="about__container grid">

                <div className="about__img-container">
                    <h2 className="section__title">Sobre mim</h2>
                    <img src={Image} alt="" className="about__img" />
                </div>
                

                <div className="about__data">
                    <div className="about__info">
                        <p className="about__description">
                            Bolsista em desenvolvimento Full-Stack pela Growdev no programa DESPERTAR.DEV e com conhecimento em linguagem Java. Além de produções para redes sociais utilizando Photoshop. Apenas 17 anos e grande identificação pela criação e desenvolvimento de interfaces, buscando cada vez mais profissionalismo e inovação.
                        </p>
                        <a href="#" className="btn">Download CV</a>
                    </div>
                    <div className="skills__container">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Desenvolvimento Front end</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage front"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UX/UI</h3>
                                <span className="skills__number">20%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage ui"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Desenvolvimento Back End</h3>
                                <span className="skills__number">60%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage back"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
