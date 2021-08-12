import React from "react";
import { NavHashLink } from "react-router-hash-link";
import ROUTES from "../../routes";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-link">
                    <NavHashLink smooth to={ROUTES.HOME}>Home</NavHashLink>
                </li>
                <li className="nav-link">
                    <NavHashLink smooth to={ROUTES.ABOUT}>About</NavHashLink>
                </li>
                <li className="nav-link">
                    <NavHashLink smooth to={ROUTES.PORTFOLIO}>Portfolio</NavHashLink>
                </li>
                <li className="nav-link">
                    <NavHashLink smooth to={ROUTES.CONTACT}>Get in Touch</NavHashLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;