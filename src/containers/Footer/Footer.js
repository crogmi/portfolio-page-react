import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="columns is-centered">
                    <a href="https://github.com/crogmi"
                       className="footer-link"
                       target="_blank">
                           <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/chris-ogami-cpa-bb192ba9/"
                       className="footer-link"
                       target="_blank">
                            <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="mailto:chrisogami16@gmail.com"
                       className="footer-link"
                       target="_blank">
                           <i class="far fa-envelope"></i>
                    </a>
                    <p id="copyright">&copy; Christopher Ogami 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;