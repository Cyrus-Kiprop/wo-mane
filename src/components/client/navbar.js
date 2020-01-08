import React, {useState} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

function Navbar () {
  const [dropdownOpen, setDropdownOpen] = useState (false);

  const toggle = () => setDropdownOpen (prevState => !prevState);

  return (
	  <div>
		  <nav className="navbar navbar-expand-md navbar-dark bg-yellow">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h2> Wo~Mane </h2>
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Blog">
              Blogs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">
              Learn
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">
              Savings
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/Contact">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/laptops">
              Login/Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
	  </div>
  );
}

export default Navbar;
