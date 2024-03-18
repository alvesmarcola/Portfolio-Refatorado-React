import React from 'react'
import "./skills.css"

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
                        <img src="../../assets/images/skills/html-1.svg" alt="" />
                      </div>
                      <h3 className="skills__name"> HTML </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="skills__info skill1">
                    <div className="skills__data">
                      <div className="skills__blob">
                        <img src="images/skills/css-3.svg" alt="" />
                      </div>
                      <h3 className="skills__name"> CSS </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="skills__info skill1">
                    <div className="skills__data">
                      <div className="skills__blob">
                        <img src="images/skills/logo-javascript.svg" alt="" />
                      </div>
                      <h3 className="skills__name"> JavaScript </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="skills__info skill1">
                    <div className="skills__data">
                      <div className="skills__blob">
                        <img src="images/skills/sass-1.svg" alt="" />
                      </div>
                      <h3 className="skills__name"> Sass </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="skills__info skill1">
                    <div className="skills__data">
                      <div className="skills__blob">
                        <img src="images/skills/vue-9.svg" alt="" />
                      </div>
                      <h3 className="skills__name"> VueJs </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="skills__info skill1">
                    <div className="skills__data">
                      <div className="skills__blob">
                        <img src="images/skills/react-2.svg" alt="" />
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
                        <img src="../../assets/images/skills/php-1.svg" alt="" />
                      </div>
                      <h3 className="skills__name"> PHP </h3>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div class="skills__info skill4">
                    <div class="skills__data">
                      <div class="skills__blob">
                        <img src="images/skills/java-4.svg" alt="" />
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
