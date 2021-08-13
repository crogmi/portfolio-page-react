import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <section className="main-info" id="portfolio" >
            <div className="container">
                <div className="columns is-centered">
                    <div className="column
                                    is-four-fifths
                                    text-centered
                                    portfolio-column">
                        <h1 className="title">Portfolio</h1>
                        <div className="portfolio-list">
                            <div className="portfolio-card" id="reddit-card">
                                <a href="https://modest-hermann-fab8b5.netlify.app/"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="link">
                                    <div className="card-overlay">
                                        <h2 className="subtitle card-title">Reddit Client</h2>
                                        <p className="information card-info">Another view of the Reddit interface recreated using the Reddit API</p>
                                    </div>
                                </a>
                            </div>
                            <div className="portfolio-card" id="online-ordering-card">
                                {/* Need to update the href link to include the actual deployed version of the project once that is complete */}
                                <a href="https://github.com/crogmi/online-ordering-restaurant"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="link">
                                    <div className="card-overlay">
                                        <h2 className="subtitle card-title">Online Ordering</h2>
                                        <p className="information card-info">An online ordering platform for a fictional coffee shop.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="portfolio-card" id="appointment-planner-card">
                                {/* Need to update the href link to include the actual deployed version of the project once that is complete */}
                                <a href="https://github.com/crogmi/appointment-planner"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="link">
                                    <div className="card-overlay">
                                        <h2 className="subtitle card-title">Appointment Planner</h2>
                                        <p className="information card-info">An application to allow you to maintain contacts and manage appointments.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

