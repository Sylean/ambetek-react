import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
    return  (
        <nav className="nav-header">
          <ul className="nav-header-pages">
            <li>
              <NavLink exact to="/" aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/about" aria-current="page">About</NavLink>
            </li>
            <li>
              <NavLink exact to="/users" aria-current="page">Users</NavLink>
            </li>
          </ul>
        </nav>
    );
}

export default Header;