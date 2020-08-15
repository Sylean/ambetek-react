import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
    return  (
        <header className="nav-header">
          <Link to="/">
            <h2 className="nav-header-logo">
                Ambetek                
            </h2>
          </Link>
          <nav className="nav-header-nav">
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
        </header>
    );
}

export default Header;