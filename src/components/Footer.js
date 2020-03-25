import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer text-center w-100 mt-5">
        <ul className="nav row justify-content-around footer-links">
            <li className="nav-item col-3">
                {/* <a href="#" className="nav-link">Home</a> */}
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item col-3">
                {/* <a href="#" className="nav-link">About</a> */}
                <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item col-3">
                {/* <a href="#" className="nav-link">Team</a> */}
                <Link to="/team" className="nav-link">Team</Link>
            </li>
            <li className="nav-item col-3">
                {/* <a href="#" className="nav-link">Contact Us</a> */}
                <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
        </ul>
        <div className="container my-5 footer-links">
            <p className="text-muted text-center">Toxic Shatter Gaming&reg;</p>
            <p className="text-muted text-center">&copy;2020</p>
        </div>
    </footer>
        </div>
    )
}

export default Footer;