import React from "react";
import resume from "../../img/resume.pdf";
import "./About.css";

const About = () => {
    return (
        <section className="main-info" id="about">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column
                                    is-centered
                                    is-four-fifths
                                    text-centered">
                        <h1 className="title">About</h1>
                        <p className="information">
                            I started my journey to become a Full Stack Developer in 2020 when I began to study programming during the lockdown caused by the Covid-19 pandemic. I naturally fell in love with everything that programming had to offer and began to take my studies seriously in June 2021.
                            <span className="break"></span>
                            Before I began my studies, I graduated from Pepperdine University with a B.S. in Accounting. Thereafter, I worked for two of the "Big 4" accounting firms over the course of five years and currently hold an active CPA (Certified Public Accountant) license.
                            <span className="break"></span>
                            I hope to build on my knowledge of programming every day, one piece of code at a time.
                        </p>
                        <h2 className="subtitle">
                            Languages I Speak
                        </h2>
                        <div className="language-container">
                            <i className="fab fa-js-square language-icon"></i>
                            <i className="fab fa-react language-icon"></i>
                            <i className="fab fa-html5 language-icon"></i>
                            <i className="fab fa-css3-alt language-icon"></i>
                        </div>
                        <a href={resume} download>
                            <button className="button" id="resume-button" type="button">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;