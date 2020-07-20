import React from 'react';
import './App.css';
import { Link, withRouter } from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: "#aaaeb9"
    };


  return (
    <nav>
      <Link className="navStyleLogo" to="/">
        <h3>4TN8-MASTER</h3>
      </Link>
      <ul className="nav-links">
        <Link className="navStyle" to="/statistics">
            <li>Statistics</li>
        </Link>
        <Link className="navStyle" to="/upcuming">
            <li>Sneak Peak</li>
        </Link>
        <Link className="navStyle" to="/Shop">
            <li>Today's Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
