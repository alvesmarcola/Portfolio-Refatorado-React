import React from 'react'

import './footer.css'

const footer = () => {
    return (

        <footer className="footer__inner-container">
            <div className="footer__social">
                <ul className="footer__social-wrapper">
                    <li>
                        <a className="footer__social-link" aria-label="Meu perfil no github" href="https://github.com/alvesmarcola" rel="noreferrer" target="_blank">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" aria-hidden="true" focusable="false" className="footer__social-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="footer__social-link" aria-label="Meu perfil no LinkedIn" href="https://www.linkedin.com/in/omarcolvess/" rel="noreferrer" target="_blank">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" aria-hidden="true" focusable="false" className="footer__social-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="footer__social-link" aria-label="Email para contato" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=alvesbrunom8@gmail.com" rel="noreferrer" target="_self">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="footer__social-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <title></title>
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="footer__social-link" aria-label="Meu instagram" href="https://www.instagram.com/alvess_marcoo/" rel="noreferrer" target="_blank">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" focusable="false" className="footer__social-icon" style={{ height: '1.5rem', width: '1.5rem' }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M382.88 322c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05C384.37 216.44 384.37 295.56 382.88 322Z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer__attributions">
                <p className="footer__author">By <a className="footer__link-bottom" aria-label="Link para github" href="https://github.com/alvesmarcola" rel="noreferrer" target="_blank">Marco Alves</a></p>
            </div>
        </footer>
    );
};


export default footer
