import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {

  const getSelection = e => {
    let {value} = e.target;
    console.log(value);
    //setPlatform(value);
  };
  
  const classToggle = () => {
  const navs = document.querySelectorAll('.nav-links')
  
  navs.forEach(nav => nav.classList.toggle('toggleShow'));
  };

  // document.querySelector('.link-toggle')
  // .addEventListener('click', classToggle);

  return (
    <nav>
      <Link className="navStyleLogo" to="/">
        <p>4TN8-MASTER</p>
      </Link>
      <div class="navStyle link-toggle" onClick={classToggle}>
        <i class="fas fa-bars"></i>
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
        <div class="navStyle tooltip">
          <span class="tooltiptext">Noch ohne Funktion...</span>
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
