import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const TermsBlock = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <section className='top'>
          <div className='top-container'>
            <h2 className='top__title title'>Log in</h2>
            <div className='breadcrumbs'>
              <ul className='breadcrumbs__list'>
                <li className='breadcrumbs__item'>
                  <a className='breadcrumbs__link' href='#'>
                    Home
                  </a>
                </li>
                <li className='breadcrumbs__item'>
                  <a className='breadcrumbs__link' href='#'>
                    Log in
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

        <section className='blog'>
          <div className='container'>
            <div className='blog__box'>
              <h3 className='blog__box-title'>Our Insights & Articles</h3>
              <a className='blog__box-link' href='#'>
                View All
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='6.1'
                  height='10.97'
                  viewBox='0 0 6.1 10.97'>
                  <path
                    className='cls-1'
                    d='M1539.33,4295.69a0.53,0.53,0,0,1-.41-0.19,0.6,0.6,0,0,1-.15-0.4,0.631,0.631,0,0,1,.17-0.43l4.55-4.47-4.55-4.48a0.607,0.607,0,0,1-.17-0.42,0.629,0.629,0,0,1,.15-0.41,0.559,0.559,0,0,1,.8-0.02l4.98,4.9,0.01,0.01a0.657,0.657,0,0,1,.12.17h0a0.7,0.7,0,0,1,.05.25h0a0.742,0.742,0,0,1-.05.25h0a0.61,0.61,0,0,1-.12.16c0,0.01-.01.01-0.01,0.02l-4.98,4.9A0.589,0.589,0,0,1,1539.33,4295.69Z'
                    transform='translate(-1538.78 -4284.72)'
                  />
                </svg>
              </a>
            </div>
            <div className='blog__items'>
              <div className='blog__item'>
                <a className='blog__item-imglink' href=''>
                  <img src='/images/blog/1.png' alt='img blog' />
                </a>
                <div className='blog__item-box'>
                  <span className='blog__item-news'>NEWS</span>
                  <a className='blog__item-title'>
                    Diusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam
                  </a>
                </div>
                <div className='blog__item-info'>
                  <div className='blog__item-date'>28 JANUARY, 2020</div>
                  <a className='blog__item-author'>BY ADMIN</a>
                </div>
              </div>
            </div>
            <div className='blog__items'>
              <div className='blog__item'>
                <a className='blog__item-imglink' href=''>
                  <img src='/images/blog/2.png' alt='img blog' />
                </a>
                <div className='blog__item-box'>
                  <span className='blog__item-news'>NEWS</span>
                  <a className='blog__item-title'>
                    Diusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam
                  </a>
                </div>
                <div className='blog__item-info'>
                  <div className='blog__item-date'>28 JANUARY, 2020</div>
                  <a className='blog__item-author'>BY ADMIN</a>
                </div>
              </div>
            </div>
            <div className='blog__items'>
              <div className='blog__item'>
                <a className='blog__item-imglink' href=''>
                  <img src='/images/blog/3.png' alt='img blog' />
                </a>
                <div className='blog__item-box'>
                  <span className='blog__item-news'>NEWS</span>
                  <a className='blog__item-title'>
                    Diusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam
                  </a>
                </div>
                <div className='blog__item-info'>
                  <div className='blog__item-date'>28 JANUARY, 2020</div>
                  <a className='blog__item-author'>BY ADMIN</a>
                </div>
              </div>
            </div>
            <div className='partners'>
              <div className='partners__images'>
                <img src='/images/partners/1.png' alt='partners img' />
                <img src='/images/partners/2.png' alt='partners img' />
                <img src='/images/partners/3.png' alt='partners img' />
                <img src='/images/partners/4.png' alt='partners img' />
                <img src='/images/partners/5.png' alt='partners img' />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TermsBlock;
