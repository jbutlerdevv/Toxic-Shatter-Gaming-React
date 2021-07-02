import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavbarLgXl = () => {

    return (

        <div className="d-none d-lg-block">
            <nav className="navbar navbar-expand-md navbar-dark sticky-top shadow-lg">

                <a className="navbar-brand" href="/">
                    <img src="./assets/imgs/tsg-logo-5-12-19-no-TSG-header.png" width="50" height="50" alt="" />
                </a>

                <div className="">

                    <ul className="nav">
                        <li className="nav-item mx-5">                           
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link to="/team" className="nav-link">Team</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>

                </div>

                {/*/ ms-auto replaced ml-auto (margin-left) | me-auto replaced mr-auto (margin-right)  */}
                <form className="d-flex ms-auto">
                    <input className="form-control input-group" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success input-group-append" type="submit">Search</button>
                </form>
                    
            </nav>
        </div>

        

    )

}

export default NavbarLgXl;