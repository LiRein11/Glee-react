import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container-large">
        <div className="header__inner">
          <Link className="logo" to="/">
            <img className="logo__img" src="images/logo.png" alt="logo" />
          </Link>
          <nav className="menu">
            <button className="menu__btn">
              <span></span>
            </button>
            <ul className="menu__list">
              <li className="menu__list-item">
                <Link className="menu__list-link" to="/">
                  Home +
                </Link>
              </li>
              <li className="menu__list-item">
                <Link className="menu__list-link" to='/about'>
                  About
                </Link>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  Services
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  Pages +
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  News
                </a>
              </li>
              <li className="menu__list-item">
                <Link className="menu__list-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="user-nav">
            <a className="user-nav__search" href="#">
              <img className="user-nav__search-img" src="images/icons/search.svg" alt="search" />
            </a>
            <div className="user-nav__box">
              <a className="user-nav__heart" href="#">
                <img className="user-nav__heart-img" src="images/icons/heart.svg" alt="heart" />
                <span className="user-nav__num">0</span>
              </a>
              <a className="user-nav__cart" href="#">
                <img className="user-nav__cart-img" src="images/icons/cart.svg" alt="cart" />
                <span className="user-nav__num">0</span>
              </a>
            </div>
            <button className="user-nav__btn">
              <img className="user-nav__btn-img" src="images/navuser-btn.png" alt="btn" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;