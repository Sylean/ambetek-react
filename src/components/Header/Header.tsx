import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as AmbetekLogo2 } from '../../resources/ambetek2.svg';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import './Header.scss';

function Header() {
    return  (
        <header className="nav-header">
          <div className="nav-header-left">
            <MenuRoundedIcon className="nav-menu" />
            <Link to="/" className="nav-header-logo-container">
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
          </div>
          <div className="nav-header-right">
            <ul className="nav-header-right-links">
                <li>
                  <a href="mailto:anson.prima@gmail.com" className="nav-header-contact">Contact Me</a>
                </li>
            </ul>
          </div>
        </header>
    );
}

export default Header;