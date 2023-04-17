import { Link } from 'gatsby';
import React, { useContext, useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import logo from '../assets/images/logo.svg';
import ThemeContext, { useThemeContext } from '../context/ThemeContext';

const Navbar = ({ siteTitle }) => {
  const { dark, toggleDark } = useThemeContext();
  return (
    // <ThemeContext.Consumer>
    //  {/* {(theme) => ( */}
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button className="nav-btn">
            <FiAlignJustify />
          </button>
        </div>
        <div className="nav-links show-links">
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
          >
            recipes
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-link">
            tags
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              contact
            </Link>
          </div>
          <div>
            <button className="btn" onClick={toggleDark}>
              {dark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
            </button>
          </div>
        </div>
      </div>
    </nav>
    // {/* )} */}
    // </ThemeContext.Consumer>
  );
};
export default Navbar;
