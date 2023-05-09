import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Posts from '../Posts';

const TermsBlock = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <section className='top'>
          <div className='top-container'>
            <h2 className='top__title title'>Terms</h2>
            <div className='breadcrumbs'>
              <ul className='breadcrumbs__list'>
                <li className='breadcrumbs__item'>
                  <a className='breadcrumbs__link' href='#'>
                    Home
                  </a>
                </li>
                <li className='breadcrumbs__item'>
                  <a className='breadcrumbs__link' href='#'>
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='terms'>
          <div className='container'>
            <div className='terms__content'>
              <h4 className='terms__title'>Types of Personal Information We Collect</h4>
              <ol className='terms__list'>
                <li className='terms__list-text'>
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore
                </li>
                <li className='terms__list-text'>
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore
                </li>
                <li className='terms__list-text'>
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </li>
                <li className='terms__list-text'>
                  Dagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </li>
                <li className='terms__list-text'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                </li>
              </ol>
              <h4 className='terms__title'>How marketpmss.com Collects Personal Infonnation</h4>
              <p className='terms__text'>
                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore
              </p>
              <h4 className='terms__title'>How marketprosscom Uses Personal Information</h4>
              <p className='terms__text'>
                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore
              </p>
            </div>
          </div>
        </section>

        <Posts />
      </main>

      <Footer />
    </>
  );
};

export default TermsBlock;
