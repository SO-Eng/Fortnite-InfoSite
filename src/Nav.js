import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {

  const getSelection = e => {
    let {value} = e.target;
    console.log(value);
    //setPlatform(value);
  };
  
  //https://www.freecodecamp.org/news/how-to-build-a-responsive-navbar-with-a-toggle-menu-using-flexbox-3438e1d08783/
  const classToggle = () => {
  const navs = document.querySelectorAll('.nav-links')
  
  navs.forEach(nav => nav.classList.toggle('toggleShow'));
  };

  return (
    <nav>
      <Link className="navStyleLogo" to="/">
        <p>4TN8-MASTER</p>
      </Link>
      <div className="navStyle link-toggle" onClick={classToggle}>
        <i className="fas fa-bars"></i>
      </div>
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
        <div className="navStyle tooltip">
          <span className="tooltiptext">Noch ohne Funktion...</span>
          <select className="selectBarNav" onChange={getSelection} tooltip="test">
            <option value="de">Deutsch</option>
            <option value="en">English</option>
          </select>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
