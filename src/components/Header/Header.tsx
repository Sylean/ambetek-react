import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as AmbetekLogo2 } from '../../resources/ambetek2.svg';
import './Header.scss';

function Header() {
    return  (
        <header className="nav-header">
          <Link to="/">
            <AmbetekLogo2 className="nav-header-logo" />
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
                <NavLink exact to="/adder" aria-current="page">Adder</NavLink>
              </li>
            </ul>
          </nav>
        </header>
    );
}

export default Header;