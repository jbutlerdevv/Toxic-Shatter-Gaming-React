import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow-lg">

                <a className="navbar-brand" href="/">
                    <img src="./assets/imgs/tsg-logo-5-12-19-no-TSG-header.png" width="50" height="50" alt="" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="nav">
                        <li className="nav-item mx-5">
                            {/* <a href="./index.html" className="nav-link">Home</a> */}
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item mx-5">
                            {/* <a href="/about" className="nav-link">About</a> */}
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item mx-5">
                            {/* <a href="/team" className="nav-link">Team</a> */}
                            <Link to="/team" className="nav-link">Team</Link>
                        </li>
                        <li className="nav-item mx-5">
                            {/* <a href="/contact" className="nav-link">Contact Us</a> */}
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>

                </div>

                <form className="d-flex">
                    <input className="form-control input-group" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success input-group-append" type="submit">Search</button>
                </form>

                    {/* <div class="input-group w-25">
                        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-success" type="button">Button</button>
                        </div>
                    </div> */}
                    
            </nav>
        </div>
    )

}

export default Navbar;