import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column 
                                    is-two-fifths
                                    text-centered">
                        <div className="social-links">
                            <a href="https://github.com/crogmi"
                               className="external-link"
                               target="_blank"
                               rel="noreferrer">
                                   <i className="fab fa-github social-icon"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/chris-ogami-cpa-bb192ba9/"
                               className="external-link"
                               target="_blank"
                               rel="noreferrer">
                                    <i className="fab fa-linkedin-in social-icon"></i>
                            </a>
                            <a href="mailto:chrisogami16@gmail.com"
                               className="external-link"
                               target="_blank"
                               rel="noreferrer">
                                   <i className="far fa-envelope social-icon"></i>
                            </a>
                        </div>
                        <p className="information" id="copyright">
                            &copy; Christopher Ogami 2021
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;