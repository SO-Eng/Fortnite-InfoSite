import React from 'react';
import './App.css';
import { Link, withRouter } from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: "white"
    };


  return (
    <nav>
      <Link className="navStyleLogo" to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/statistics">
            <li>Statistics</li>
        </Link>
        <Link style={navStyle} to="/upcuming">
            <li>Sneak Peak</li>
        </Link>
        <Link style={navStyle} to="/Shop">
            <li>Today's Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
