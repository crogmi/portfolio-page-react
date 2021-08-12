import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-link">About</li>
                <li className="nav-link">Projects</li>
                <li className="nav-link">Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;