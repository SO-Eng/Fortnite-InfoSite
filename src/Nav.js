import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {

  return (
    <nav>
      <Link className="navStyleLogo" to="/">
        <p>4TN8-MASTER</p>
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
