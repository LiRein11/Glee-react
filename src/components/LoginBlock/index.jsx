import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

import '../../scss/login.scss';

const LoginBlock = () => {
  return (
    <>
      <Header />

      <main className="main">
        <section className="top">
          <div className="top-container">
            <h2 className="top__title title">Log in</h2>
            <div className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="#">
                    Home
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="#">
                    Log in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="modal">
          <div className="container">
            <form className="modal__form" action="#">
              <label className="modal__label">
                Username or email address *
                <input className="modal__input" type="text" required />
              </label>
              <label className="modal__label">
                Password *
                <input className="modal__input" type="password" required />
              </label>
              <button className="modal__btn" type="submit">
                Login
              </button>
              <label className="modal__label modal__label-checkbox">
                <div className="modal__label-box">
                  <input type="checkbox" required />
                  Remember me
                </div>
                <a className="modal__label-text">Lost your password?</a>
              </label>
            </form>
            <p className="modal__text">Not registered? No problem</p>
            <a className="modal__link" href="#">
              Create an account
            </a>
          </div>
        </section>
        <section className="partners-section">
          <div className="container">
            <div className="partners-section__content">
              <div className="partners-section__images">
                <img
                  className="partners-section__images-img"
                  src="images/partners/1.png"
                  alt="partners img"
                />
                <img
                  className="partners-section__images-img"
                  src="images/partners/2.png"
                  alt="partners img"
                />
                <img
                  className="partners-section__images-img"
                  src="images/partners/3.png"
                  alt="partners img"
                />
                <img
                  className="partners-section__images-img"
                  src="images/partners/4.png"
                  alt="partners img"
                />
                <img
                  className="partners-section__images-img"
                  src="images/partners/5.png"
                  alt="partners img"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LoginBlock;
