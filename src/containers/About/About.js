import React from "react";
import "./About.css";

const About = () => {
    return (
        <section className="main-info" id="about">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column 
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
                        <button className="button" id="resume-button" type="button">
                            {/* Need to add functionality to download resume */}
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;