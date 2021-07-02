import React from 'react';
import NavbarLgXl from './components/NavbarLgXl';
import NavbarSmMd from './components/NavbarSmMd';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarLgXl />
        <NavbarSmMd />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />



      </div>
    </Router>
  );
}

export default App;
