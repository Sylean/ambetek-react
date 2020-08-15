import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return  (
        <nav className="nav-header">
          <ul className="nav-header-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    );
}

export default Header;