import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'

class SideBar extends Component {
  render() {
    return (
      <nav className="navbar-default navbar-side">
        <div className="sidebar-collapse">
          <Router>
            <ul className="nav">
              <li>
                <Link to="/" className="active-menu">
                  <i className="fa fa-dashboard"></i> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/"><i className="fa fa-desktop"></i> UI Elements</Link>
              </li>
              <li>
                <Link to="/"><i className="fa fa-bar-chart-o"></i> Charts</Link>
              </li>
              <li>
                <Link to="/"><i className="fa fa-qrcode"></i> Tabs &amp; Panels</Link>
              </li>

              <li>
                <Link to="/"><i className="fa fa-table"></i> Responsive Tables</Link>
              </li>
              <li>
                <Link to="/"><i className="fa fa-edit"></i> Forms </Link>
              </li>
              <li>
                <Link to="/"><i className="fa fa-sitemap"></i> Multi-Level Dropdown</Link>
              </li>
            </ul>
          </Router>
        </div>
      </nav>
    );
  }
}

export default SideBar;
