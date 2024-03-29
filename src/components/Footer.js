import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <Router />
            <Switch />
            <Route />
            <footer className='footer text-center w-100 mt-5 shadow'>
                <ul className='nav row justify-content-around footer-links'>
                    <li className='nav-item col-3'>
                        {/* <a href="#" className="nav-link">Home</a> */}
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item col-3'>
                        {/* <a href="#" className="nav-link">About</a> */}
                        <Link to='/about' className='nav-link'>
                            About
                        </Link>
                    </li>
                    <li className='nav-item col-3'>
                        {/* <a href="#" className="nav-link">Team</a> */}
                        <Link to='/team' className='nav-link'>
                            Team
                        </Link>
                    </li>
                    <li className='nav-item col-3'>
                        {/* <a href="#" className="nav-link">Contact Us</a> */}
                        <Link to='/contact' className='nav-link'>
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className='container my-5 footer-links'>
                    <div className='row'>
                        <p className='text-muted text-center'>
                            Toxic Shatter Gaming&reg;
                        </p>
                    </div>
                    <div className='row'>
                        <p className='text-muted text-center'>&copy;2020</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
