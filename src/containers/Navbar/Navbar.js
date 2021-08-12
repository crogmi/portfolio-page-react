import React from "react";
import { NavHashLink } from "react-router-hash-link";
import ROUTES from "../../routes";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-list-item">
                    <NavHashLink className="nav-link" smooth to={ROUTES.HOME}>Home</NavHashLink>
                </li>
                <li className="nav-list-item">
                    <NavHashLink className="nav-link" smooth to={ROUTES.ABOUT}>About</NavHashLink>
                </li>
                <li className="nav-list-item">
                    <NavHashLink className="nav-link" smooth to={ROUTES.PORTFOLIO}>Portfolio</NavHashLink>
                </li>
                <li className="nav-list-item">
                    <NavHashLink className="nav-link" smooth to={ROUTES.CONTACT}>Get in Touch</NavHashLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;