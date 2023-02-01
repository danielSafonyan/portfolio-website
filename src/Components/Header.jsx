import React from 'react'
import { NavLink } from "react-router-dom";

import './Header.css'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const smMenuStyle = {
        visibility: isMenuOpen ? 'visible' : 'hidden',
        opacity: isMenuOpen ? 1 : 0
    }

    let activeStyle = {
        color: "var(--red)",
    };

    return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src="src/assets/img/avatar.jpg"
              alt="Daniil Safonov"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Daniil Safonov</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <NavLink to={'/'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }> <a className="header__link"> Home </a> </NavLink>
            </li>
            <li className="header__link-wrapper">
              <NavLink to={'/projects'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }><a className="header__link">
                Projects
              </a> </NavLink> 
            </li>
            <li className="header__link-wrapper">
              <NavLink to={'/about'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }><a className="header__link">About </a></NavLink>
            </li>
            <li className="header__link-wrapper">
              <NavLink to={'/contact'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }><a className="header__link"> Contact </a></NavLink>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont">
            

            {isMenuOpen ? <img
              src="src/assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className="header__main-ham-menu-close"
              onClick={() => setIsMenuOpen(false)}
            />
            :
            <img
              src="src/assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className="header__main-ham-menu"
              onClick={() => setIsMenuOpen(true)}
            /> }
          </div>
        </div>
      </div>
      <div className="header__sm-menu" style={smMenuStyle}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="./index.html"> Home </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#about"> About </a>
            </li>
            
            <li className="header__sm-menu-link">
              <a href="./index.html#projects"> Projects </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    )
}
