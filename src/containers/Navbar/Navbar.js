import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../routes";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-link">
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li className="nav-link">
                    <Link to={ROUTES.ABOUT}>About</Link>
                </li>
                <li className="nav-link">
                    <Link to={ROUTES.PORTFOLIO}>Portfolio</Link>
                </li>
                <li className="nav-link">
                    <Link to={ROUTES.CONTACT}>Get in Touch</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;