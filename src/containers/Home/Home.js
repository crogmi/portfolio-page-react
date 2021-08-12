import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Home.css";
import ROUTES from "../../routes";

const Home = () => {
    return (
        <section className="main-info"
                 id="home" >
            <div className="container home-container">
                <div className="columns is-centered home-columns">
                    <div className="column is-four-fifths" id="home-banner">
                        <div className="banner-info">
                            <h1 className="title 
                                           title-size-1-desktop
                                           title-size-2-tablet">
                                Chris Ogami
                            </h1>
                            <h2 className="subtitle">Full Stack Web Developer</h2>
                            <h3 className="information last-child">Est. June 2021</h3>
                        </div>
                        <HashLink className="banner-link"
                                  smooth to ={ROUTES.PORTFOLIO}>
                            View Collection
                        </HashLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;