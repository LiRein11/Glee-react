import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top__item footer-top__contact">
            <a className="logo footer-top__logo" href="#">
              <img className="logo__img" src="/images/logo.png" alt="logo" />
            </a>
            <a className="footer-top__address" href="#">
              ADDRESS: 4772 Wines Lane Houston, TX 77032
            </a>
            <a className="footer-top__phone" href="tel:+8323475843">
              TELEPHONE: +832-347-5843
            </a>
            <a className="footer-top__email" href="mailto:contact@Glee.com">
              EMAIL: contact@Glee.com
            </a>
          </div>
          <div className="footer-top__item footer-top__nav">
            <h6 className="footer-top__title">Services</h6>
            <ul className="footer-top__list">
              <li className="footer-top__item">
                <a className="footer-top__link" href="#">
                  About us
                </a>
              </li>
              <li className="footer-top__item">
                <a className="footer-top__link" href="#">
                  Return Policy
                </a>
              </li>
              <li className="footer-top__item">
                <a className="footer-top__link" href="#">
                  Our Blog
                </a>
              </li>
              <li className="footer-top__item">
                <a className="footer-top__link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="footer-top__item">
                <a className="footer-top__link" href="#">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top__item footer-top__nav">
            <h6 className="footer-top__title">Account</h6>
            <ul className="footer-top__list">
              <li className="footer-top__item">
                <a className="footer-top__link" href="#">
                  Your Account
                </a>
              </li>
              <li className="footer-top__item">
                <a className="footer-top__link" href="#">
                  Checkout
                </a>
              </li>
              <li className="footer-top__item">
                <a className="footer-top__link" href="#">
                  Login
                </a>
              </li>
              <li className="footer-top__item">
                <a className="footer-top__link" href="#">
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top__item footer-top__item-form">
            <h6 className="footer-top__title">newsletter</h6>
            <p className="footer-top__text">Subscribe by our newsletter and get update protidin.</p>
            <form className="footer-top__form" action="#">
              <input
                className="footer-top__form-input"
                type="email"
                placeholder="Email address"
                required
              />
              <button className="footer-top__form-btn" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-bottom__copy">©2020 CopyRight Example. All rights reserved.</p>
          <div className="footer-bottom__links">
            <a className="footer-bottom__link" href="#">
              Home
            </a>
            <Link className="footer-bottom__link footer-bottom__link--active" to="/about">
              About
            </Link>
            <a className="footer-bottom__link footer-bottom__link--active" href="#">
              Blog
            </a>
            <a className="footer-bottom__link footer-bottom__link--active" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;