import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import ROUTES from "../../routes";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    const toggleNav = (event) => {
        event.preventDefault();
        setOpen(!open);
    }
    
    return (
        <nav className="navbar">
            <ul className={`nav-list ${open ? "open" : ""}`}>
                <li className="nav-list-item" onClick={toggleNav}>
                    <NavHashLink className="nav-link link" smooth to={ROUTES.HOME}>
                        Home
                    </NavHashLink>
                </li>
                <li className="nav-list-item" onClick={toggleNav}>
                    <NavHashLink className="nav-link link" smooth to={ROUTES.ABOUT}>
                        About
                    </NavHashLink>
                </li>
                <li className="nav-list-item" onClick={toggleNav}>
                    <NavHashLink className="nav-link link" smooth to={ROUTES.PORTFOLIO}>
                        Portfolio
                    </NavHashLink>
                </li>
                <li className="nav-list-item" onClick={toggleNav}>
                    <NavHashLink className="nav-link link" smooth to={ROUTES.CONTACT}>
                        Get in Touch
                    </NavHashLink>
                </li>
            </ul>
            <div className="nav-hamburger" onClick={toggleNav}>
                <div className="line-1" />
                <div className="line-2" />
                <div className="line-3" />
            </div>
        </nav>
    );
};

export default Navbar;