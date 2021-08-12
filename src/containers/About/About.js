import React from "react";

const About = () => {
    return (
        <section className="main-info" id="about">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-three-fifths">
                        <div className="about-placeholder">
                            Insert image here
                        </div>
                        <div className="about-conatiner" id="about-desc">
                            <h1 className="title">About</h1>
                            <p className="information">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <button type="button">
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