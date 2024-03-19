import React from 'react'
import "./skills.css"


import html from '../../assets/images/skills/html-1.svg'
import js from '../../assets/images/skills/logo-javascript.svg'
import css from '../../assets/images/skills/css-3.svg'
import java from '../../assets/images/skills/java-4.svg'
import vue from '../../assets/images/skills/vue-9.svg'
import react from '../../assets/images/skills/react-2.svg'
import php from '../../assets/images/skills/php-1.svg'
import sass from '../../assets/images/skills/sass-1.svg'

const Skills = () => {
  return (
    <section className="skills section init-hidden" id="skills" data-aos="fade-up">
      <div className="container">
        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">Meus conhecimentos atuais</span>

        <div className="row">
          {/* Front End */}
          <div className="col-lg-6">
            <div className="skills__content">
              <h3 className="skills__title">
                <i className="uil uil-brackets-curly"></i> Desenvolvimento Front End
              </h3>

              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="skills__info skill1">
                    <div className="skills__data">
                      <div className="skills__blob">
                        <img src={html} alt="" />
                      </div>
                      <h3 className="skills__name"> HTML </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="skills__info skill1">
                    <div className="skills__data">
                      <div className="skills__blob">
                        <img src={css} alt="" />
                      </div>
                      <h3 className="skills__name"> CSS </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="skills__info skill1">
                    <div className="skills__data">
                      <div className="skills__blob">
                        <img src={js} alt="" />
                      </div>
                      <h3 className="skills__name"> JavaScript </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="skills__info skill1">
                    <div className="skills__data">
                      <div className="skills__blob">
                        <img src={sass} alt="" />
                      </div>
                      <h3 className="skills__name"> Sass </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="skills__info skill1">
                    <div className="skills__data">
                      <div className="skills__blob">
                        <img src={vue} alt="" />
                      </div>
                      <h3 className="skills__name"> VueJs </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="skills__info skill1">
                    <div className="skills__data">
                      <div className="skills__blob">
                        <img src={react} alt="" />
                      </div>
                      <h3 className="skills__name"> React </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Back End */}
          <div className="col-lg-6">
            <div className="skills__content">
              <h3 className="skills__title">
                <i className="uil uil-shopping-cart"></i> Desenvolvimento Back End
              </h3>

              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="skills__info skill4">
                    <div className="skills__data">
                      <div className="skills__blob">
                        <img src={php} alt="" />
                      </div>
                      <h3 className="skills__name"> PHP </h3>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div class="skills__info skill4">
                    <div class="skills__data">
                      <div class="skills__blob">
                        <img src={java} alt="" />
                      </div>
                      <h3 class="skills__name"> Java </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
