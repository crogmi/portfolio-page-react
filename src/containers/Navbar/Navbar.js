import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-link">
                    <NavHashLink smooth to={"/#home"}>Home</NavHashLink>
                </li>
                <li className="nav-link">
                    <NavHashLink smooth to={"/#about"}>About</NavHashLink>
                </li>
                <li className="nav-link">
                    <NavHashLink smooth to={"/#projects"}>Projects</NavHashLink>
                </li>
                <li className="nav-link">
                    <NavHashLink smooth to={"/#contact"}>Contact</NavHashLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;