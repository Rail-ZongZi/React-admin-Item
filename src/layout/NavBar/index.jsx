import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './index.scss';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default top-navbar">
        <Router className="navbar-header">
          <Link className="navbar-brand" to="/">
            <b>In</b>sight
          </Link>
        </Router>
        <Router>
          <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown">
              <Link className="dropdown-toggle" to="/">
                <img src={logo} alt="logo" className="img-circle"/>
                <span>admin</span>
              </Link>
            </li>
          </ul>
        </Router>
      </nav>
    );
  }
}

export default NavBar;
