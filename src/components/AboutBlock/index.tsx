import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

import styles from './AboutBlock.module.scss';

const AboutBlock = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <section className='top'>
          <div className='top-container'>
            <h2 className='top__title title'>About</h2>
            <div className='breadcrumbs'>
              <ul className='breadcrumbs__list'>
                <li className='breadcrumbs__item'>
                  <a className='breadcrumbs__link' href='#'>
                    Home
                  </a>
                </li>
                <li className='breadcrumbs__item'>
                  <a className='breadcrumbs__link' href='#'>
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='about-top'>
          <div className='container'>
            <div className='about-top__inner'>
              <img className='about-top__img' src='/images/about/1.jpg' alt='about img' />
              <div className='about-top__content'>
                <div className='about-top__content-box'>
                  <img
                    className='about-top__content-img'
                    src='/images/about/2.jpg'
                    alt='about num img'
                  />
                  <div className='about-top__content-info'>
                    <p>Years</p>
                    <p>Experience</p>
                    <p>Working</p>
                  </div>
                </div>
                <h3 className='about-top__title'>Mission of our creative house</h3>
                <p className='about-top__text'>
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum
                </p>

                <div className='about-top__items'>
                  <div className='about-top__item'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='36.41'
                      height='37.719'
                      viewBox='0 0 36.41 37.719'>
                      <defs>{/* <style className={styles.cls - 1}></style> */}</defs>
                      <path
                        className='cls-1'
                        d='M993.975,958.96A1.984,1.984,0,0,1,992,956.969V929.691a0.915,0.915,0,0,1,.264-0.643l7.476-7.542a0.9,0.9,0,0,1,.638-0.267h19.09a1.98,1.98,0,0,1,1.97,1.991V926.1a0.9,0.9,0,1,1-1.8,0V923.23a0.172,0.172,0,0,0-.17-0.17h-18.19v5.552a1.98,1.98,0,0,1-1.97,1.99h-5.5v26.367a0.17,0.17,0,0,0,.168.17h25.5a0.173,0.173,0,0,0,.17-0.17v-13.9a0.9,0.9,0,1,1,1.8,0v13.9a1.98,1.98,0,0,1-1.97,1.991h-25.5Zm1.108-30.178h4.227a0.17,0.17,0,0,0,.168-0.17v-4.265Zm3.976,23.708a0.91,0.91,0,0,1,0-1.82H1003l1.39-5.066a0.9,0.9,0,0,1,.23-0.4l0.02-.015h-5.581a0.91,0.91,0,0,1,0-1.82h7.381l5.43-5.48H999.059a0.911,0.911,0,0,1,0-1.821h14.621l8.43-8.5a3.038,3.038,0,0,1,4.32,0l1.06,1.071a3.1,3.1,0,0,1,0,4.356L1010,950.632a0.889,0.889,0,0,1-.39.234l-5.7,1.6c-0.03.007-.23,0.029-0.23,0.029h-4.621Zm5.921-2.218,2.65-.744-1.91-1.933Zm1.56-4.424,2.83,2.853,14.43-14.562-2.83-2.852Zm16.84-17L1022.25,930l2.83,2.853,1.13-1.147a1.264,1.264,0,0,0,0-1.782l-1.06-1.071a1.225,1.225,0,0,0-.88-0.369A1.265,1.265,0,0,0,1023.38,928.852Z'
                        transform='translate(-992 -921.25)'
                      />
                    </svg>
                    <div className='about-top__span-box'>
                      <span className='about-top__span-title'>520+</span>
                      <span className='about-top__span-text'>Projects</span>
                    </div>
                  </div>
                  <div className='about-top__item'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='43.12'
                      height='39.094'
                      viewBox='0 0 43.12 39.094'>
                      <defs>
                        {/* <style>
                      .cls-1 {
                        fill: #a3bbc8;
                        fillRule: evenodd;
                      }
                    </> */}
                      </defs>
                      <path
                        className='cls-1'
                        d='M1227.87,929.648v-7.126a2.174,2.174,0,0,0-1.05-1.887,2.076,2.076,0,0,0-2.13-.021,48.669,48.669,0,0,1-20.7,6.383c-0.06,0-6.68.034-6.68,0.034a3.286,3.286,0,0,0-3.23,2.949h-1.36a2.749,2.749,0,0,0-2.71,2.774v6.1a2.748,2.748,0,0,0,2.71,2.774h1.36a3.32,3.32,0,0,0,1.91,2.664l4.85,13.723a2.118,2.118,0,0,0,1.98,1.428h4.86a2.1,2.1,0,0,0,1.73-.925,2.221,2.221,0,0,0,.25-1.986l-4.15-11.785a48.668,48.668,0,0,1,19.18,6.244,2.08,2.08,0,0,0,2.13-.021,2.174,2.174,0,0,0,1.05-1.887v-7.126A6.228,6.228,0,0,0,1227.87,929.648Zm-33.82,9.836h-1.33a0.622,0.622,0,0,1-.62-0.634v-6.1a0.623,0.623,0,0,1,.62-0.634h1.33v7.364Zm2.78,2.844a1.2,1.2,0,0,1-.69-1.1V930.374h0a1.185,1.185,0,0,1,1.17-1.2h5.67v13.262s-5.72,0-5.75,0A1.027,1.027,0,0,1,1196.83,942.328Zm10.88,14.93a0.037,0.037,0,0,1-.01.028c-0.01.013-.01,0.013-0.02,0.013h-4.86a0.049,0.049,0,0,1-.03-0.018l-4.48-12.708h4.92Zm18.08-8.179a0.037,0.037,0,0,1-.03.041,0.04,0.04,0,0,1-.05,0,50.66,50.66,0,0,0-20.65-6.57v-13.5a50.692,50.692,0,0,0,20.65-6.571,0.04,0.04,0,0,1,.05,0,0.037,0.037,0,0,1,.03.041v26.557Zm2.08-9.292v-7.974A4.089,4.089,0,0,1,1227.87,939.787Z'
                        transform='translate(-1190 -920.344)'
                      />
                    </svg>
                    <div className='about-top__span-box'>
                      <span className='about-top__span-title'>$4M</span>
                      <span className='about-top__span-text'>Revenue</span>
                    </div>
                  </div>
                  <div className='about-top__item'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='41.78'
                      height='40.406'
                      viewBox='0 0 41.78 40.406'>
                      <defs>
                        {/* <style>
                      .cls-1 {
                        fill: #a3bbc8;
                        fill-rule: evenodd;
                      }
                    </style> */}
                      </defs>
                      <path
                        className='cls-1'
                        d='M1399.9,951.7a8.516,8.516,0,0,1,.83-3.671l-13.22-20.446a0.919,0.919,0,0,1,.11-1.139l6.32-6.418a0.9,0.9,0,0,1,.63-0.266h27.35a0.882,0.882,0,0,1,.63.266l6.32,6.418a0.906,0.906,0,0,1,.11,1.139l-13.22,20.447a8.508,8.508,0,0,1,.83,3.67A8.346,8.346,0,1,1,1399.9,951.7Zm1.79,0a6.556,6.556,0,1,0,6.56-6.661A6.617,6.617,0,0,0,1401.69,951.7Zm8.55-8.23a8.324,8.324,0,0,1,4.47,2.884l11.87-18.362h-6.34Zm-8.46,2.883a8.354,8.354,0,0,1,4.48-2.883l-10.01-15.478h-6.34Zm6.45-3.127h0.03l9.85-15.234h-19.73Zm-17.82-17.047h35.67l-4.53-4.606h-26.61Zm17.25,28.919v-4.9h-0.53a0.907,0.907,0,0,1,0-1.814h1.42a0.9,0.9,0,0,1,.89.908v5.808A0.89,0.89,0,1,1,1407.66,955.093Z'
                        transform='translate(-1387.34 -919.75)'
                      />
                    </svg>
                    <div className='about-top__span-box'>
                      <span className='about-top__span-title'>250</span>
                      <span className='about-top__span-text'>Awards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='info'>
          <div className='container'>
            <div className='info__items'>
              <div className='info__item'>
                <div className='info__box-img'>
                  <img src='/images/about/info/1.png' alt='info img' />
                </div>
                <h4 className='info__title'>99%</h4>
                <p className='info__text'>Satisﬁed Clients Rate</p>
              </div>
              <div className='info__item'>
                <div className='info__box-img'>
                  <img src='/images/about/info/2.png' alt='info img' />
                </div>
                <h4 className='info__title'>5020+</h4>
                <p className='info__text'>Products Delivered</p>
              </div>
              <div className='info__item'>
                <div className='info__box-img'>
                  <img src='/images/about/info/3.png' alt='info img' />
                </div>
                <h4 className='info__title'>23hr</h4>
                <p className='info__text'>Daily Working Time</p>
              </div>
              <div className='info__item'>
                <div className='info__box-img'>
                  <img src='/images/about/info/4.png' alt='info img' />
                </div>
                <h4 className='info__title'>140+</h4>
                <p className='info__text'>Brands in Store</p>
              </div>
            </div>
          </div>
        </section>

        <section className='team'>
          <div className='container'>
            <div className='team__inner'>
              <div className='team__info'>
                <h4 className='team__title'>Our Team</h4>
                <p className='team__text'>
                  Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusmod tempor
                  inciLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a className='team__link' href='#'>
                  Join With US
                </a>
              </div>
              <div className='team__content'>
                <div className='team__box-img'>
                  <a className='team__img-link' href='#'>
                    <img src='/images/about/team/1.jpg' alt='team img' />
                  </a>
                  <div className='team__content-box'>
                    <div className='team__info-content'>
                      <a className='team__info-title' href='#'>
                        Eliza Elliot
                      </a>
                      <p className='team__info-text'>Commodo tempor</p>
                    </div>
                    <div className='team__info-links'>
                      <a className='team__info-link team__info-link--one' href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='17.19'
                          height='17.19'
                          viewBox='0 0 17.19 17.19'>
                          <defs>
                            <style className={styles.clss}></style>
                          </defs>
                          <path
                            id='Union_5'
                            data-name='Union 5'
                            className='cls-1'
                            d='M1004.59,1961.94a4.322,4.322,0,0,1-3.43-3.75c-0.23-1.45-.25-8.19.17-9.65a4.387,4.387,0,0,1,3.75-3.35,34.173,34.173,0,0,1,4.31-.19c1.6,0,3.22.04,4.19,0.1a4.724,4.724,0,0,1,3.14,1.28,4.517,4.517,0,0,1,1.38,2.94c0.12,1.35.21,7.74-.19,9.24a4.411,4.411,0,0,1-3.8,3.44,42.333,42.333,0,0,1-4.74.19A29.143,29.143,0,0,1,1004.59,1961.94Zm0.92-15.26a2.958,2.958,0,0,0-2.75,2.59,57.587,57.587,0,0,0-.06,8.69,2.8,2.8,0,0,0,2.12,2.43,27.569,27.569,0,0,0,4.63.25c1.8,0,3.57-.06,4.24-0.13a2.941,2.941,0,0,0,2.75-2.6,61.315,61.315,0,0,0,.11-8.45,2.9,2.9,0,0,0-2.58-2.74,40.212,40.212,0,0,0-4.3-.16C1007.96,1946.56,1006.26,1946.6,1005.51,1946.68Zm-0.32,6.92a4.445,4.445,0,0,1,4.45-4.41,4.37,4.37,0,0,1,4.37,4.41,4.458,4.458,0,0,1-4.45,4.41A4.37,4.37,0,0,1,1005.19,1953.6Zm1.55-.03a2.834,2.834,0,0,0,2.81,2.88h0.02a2.882,2.882,0,0,0,2.88-2.82,2.82,2.82,0,0,0-2.8-2.88h-0.03A2.881,2.881,0,0,0,1006.74,1953.57Zm6.45-4.55a1.029,1.029,0,0,1,1.03-1.03h0.01a1.016,1.016,0,0,1,1.02,1.04,1.035,1.035,0,0,1-1.04,1.02A1.014,1.014,0,0,1,1013.19,1949.02Z'
                            transform='translate(-1001 -1945)'
                          />
                        </svg>
                      </a>
                      <a className='team__info-link team__info-link--two' href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='22.66'
                          height='14.38'
                          viewBox='0 0 22.66 14.38'>
                          <defs>
                            <style className={styles.clss}></style>
                          </defs>
                          <path
                            id='Union_6'
                            data-name='Union 6'
                            className='cls-1'
                            d='M1052.75,1960.35a7.121,7.121,0,0,1-6.59-5.65,6.6,6.6,0,0,1-.14-1.93,7.277,7.277,0,0,1,5.49-6.56,5.282,5.282,0,0,1,1.18-.19c0.23-.01.46-0.02,0.69-0.02a6.786,6.786,0,0,1,3.4.93,9.386,9.386,0,0,1,1.27.93c-0.72.71-1.41,1.4-2.11,2.09a3.914,3.914,0,0,0-2.1-1.02,4.259,4.259,0,0,0-.61-0.04,4.307,4.307,0,0,0-4.14,3.35,3.817,3.817,0,0,0-.1,1.3,4.3,4.3,0,0,0,2.94,3.74,4.35,4.35,0,0,0,1.25.19c0.1,0,.2-0.01.3-0.01a4.2,4.2,0,0,0,2.09-.67,3.314,3.314,0,0,0,1.43-2.17h-3.85c0-.09.02-1.89,0.02-2.76l0.01-.12h6.76a7.773,7.773,0,0,1-1.28,6.05,6.273,6.273,0,0,1-3.55,2.32,7.539,7.539,0,0,1-1.94.25C1053.03,1960.36,1052.89,1960.36,1052.75,1960.35Zm13.33-4.05h-1.89v-0.07l0.02-2.43h-2.51v-0.08l0.02-1.82v-0.07h2.5l0.02-2.43v-0.07h1.96v0.07l-0.02,2.43h2.51v0.07l-0.01,1.82v0.08h-2.51l-0.02,2.43v0.07h-0.07Z'
                            transform='translate(-1046.03 -1946)'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='team__box-img'>
                  <a className='team__img-link' href='#'>
                    <img src='/images/about/team/2.jpg' alt='team img' />
                  </a>
                  <div className='team__content-box'>
                    <div className='team__info-content'>
                      <a className='team__info-title' href='#'>
                        Roscoe A.
                      </a>
                      <p className='team__info-text'>Commodo tempor</p>
                    </div>
                    <div className='team__info-links'>
                      <a className='team__info-link team__info-link--one' href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='17.19'
                          height='17.19'
                          viewBox='0 0 17.19 17.19'>
                          <defs>
                            <style className={styles.clss}></style>
                          </defs>
                          <path
                            id='Union_5'
                            data-name='Union 5'
                            className='cls-1'
                            d='M1004.59,1961.94a4.322,4.322,0,0,1-3.43-3.75c-0.23-1.45-.25-8.19.17-9.65a4.387,4.387,0,0,1,3.75-3.35,34.173,34.173,0,0,1,4.31-.19c1.6,0,3.22.04,4.19,0.1a4.724,4.724,0,0,1,3.14,1.28,4.517,4.517,0,0,1,1.38,2.94c0.12,1.35.21,7.74-.19,9.24a4.411,4.411,0,0,1-3.8,3.44,42.333,42.333,0,0,1-4.74.19A29.143,29.143,0,0,1,1004.59,1961.94Zm0.92-15.26a2.958,2.958,0,0,0-2.75,2.59,57.587,57.587,0,0,0-.06,8.69,2.8,2.8,0,0,0,2.12,2.43,27.569,27.569,0,0,0,4.63.25c1.8,0,3.57-.06,4.24-0.13a2.941,2.941,0,0,0,2.75-2.6,61.315,61.315,0,0,0,.11-8.45,2.9,2.9,0,0,0-2.58-2.74,40.212,40.212,0,0,0-4.3-.16C1007.96,1946.56,1006.26,1946.6,1005.51,1946.68Zm-0.32,6.92a4.445,4.445,0,0,1,4.45-4.41,4.37,4.37,0,0,1,4.37,4.41,4.458,4.458,0,0,1-4.45,4.41A4.37,4.37,0,0,1,1005.19,1953.6Zm1.55-.03a2.834,2.834,0,0,0,2.81,2.88h0.02a2.882,2.882,0,0,0,2.88-2.82,2.82,2.82,0,0,0-2.8-2.88h-0.03A2.881,2.881,0,0,0,1006.74,1953.57Zm6.45-4.55a1.029,1.029,0,0,1,1.03-1.03h0.01a1.016,1.016,0,0,1,1.02,1.04,1.035,1.035,0,0,1-1.04,1.02A1.014,1.014,0,0,1,1013.19,1949.02Z'
                            transform='translate(-1001 -1945)'
                          />
                        </svg>
                      </a>
                      <a className='team__info-link team__info-link--two' href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='22.66'
                          height='14.38'
                          viewBox='0 0 22.66 14.38'>
                          <defs>
                            <style className={styles.clss}></style>
                          </defs>
                          <path
                            id='Union_6'
                            data-name='Union 6'
                            className='cls-1'
                            d='M1052.75,1960.35a7.121,7.121,0,0,1-6.59-5.65,6.6,6.6,0,0,1-.14-1.93,7.277,7.277,0,0,1,5.49-6.56,5.282,5.282,0,0,1,1.18-.19c0.23-.01.46-0.02,0.69-0.02a6.786,6.786,0,0,1,3.4.93,9.386,9.386,0,0,1,1.27.93c-0.72.71-1.41,1.4-2.11,2.09a3.914,3.914,0,0,0-2.1-1.02,4.259,4.259,0,0,0-.61-0.04,4.307,4.307,0,0,0-4.14,3.35,3.817,3.817,0,0,0-.1,1.3,4.3,4.3,0,0,0,2.94,3.74,4.35,4.35,0,0,0,1.25.19c0.1,0,.2-0.01.3-0.01a4.2,4.2,0,0,0,2.09-.67,3.314,3.314,0,0,0,1.43-2.17h-3.85c0-.09.02-1.89,0.02-2.76l0.01-.12h6.76a7.773,7.773,0,0,1-1.28,6.05,6.273,6.273,0,0,1-3.55,2.32,7.539,7.539,0,0,1-1.94.25C1053.03,1960.36,1052.89,1960.36,1052.75,1960.35Zm13.33-4.05h-1.89v-0.07l0.02-2.43h-2.51v-0.08l0.02-1.82v-0.07h2.5l0.02-2.43v-0.07h1.96v0.07l-0.02,2.43h2.51v0.07l-0.01,1.82v0.08h-2.51l-0.02,2.43v0.07h-0.07Z'
                            transform='translate(-1046.03 -1946)'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='team__box-img'>
                  <a className='team__img-link' href='#'>
                    <img src='/images/about/team/3.jpg' alt='team img' />
                  </a>
                  <div className='team__content-box'>
                    <div className='team__info-content'>
                      <a className='team__info-title' href='#'>
                        Ruby M.
                      </a>
                      <p className='team__info-text'>Commodo tempor</p>
                    </div>
                    <div className='team__info-links'>
                      <a className='team__info-link team__info-link--one' href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='17.19'
                          height='17.19'
                          viewBox='0 0 17.19 17.19'>
                          <defs>
                            <style className={styles.clss}></style>
                          </defs>
                          <path
                            id='Union_5'
                            data-name='Union 5'
                            className='cls-1'
                            d='M1004.59,1961.94a4.322,4.322,0,0,1-3.43-3.75c-0.23-1.45-.25-8.19.17-9.65a4.387,4.387,0,0,1,3.75-3.35,34.173,34.173,0,0,1,4.31-.19c1.6,0,3.22.04,4.19,0.1a4.724,4.724,0,0,1,3.14,1.28,4.517,4.517,0,0,1,1.38,2.94c0.12,1.35.21,7.74-.19,9.24a4.411,4.411,0,0,1-3.8,3.44,42.333,42.333,0,0,1-4.74.19A29.143,29.143,0,0,1,1004.59,1961.94Zm0.92-15.26a2.958,2.958,0,0,0-2.75,2.59,57.587,57.587,0,0,0-.06,8.69,2.8,2.8,0,0,0,2.12,2.43,27.569,27.569,0,0,0,4.63.25c1.8,0,3.57-.06,4.24-0.13a2.941,2.941,0,0,0,2.75-2.6,61.315,61.315,0,0,0,.11-8.45,2.9,2.9,0,0,0-2.58-2.74,40.212,40.212,0,0,0-4.3-.16C1007.96,1946.56,1006.26,1946.6,1005.51,1946.68Zm-0.32,6.92a4.445,4.445,0,0,1,4.45-4.41,4.37,4.37,0,0,1,4.37,4.41,4.458,4.458,0,0,1-4.45,4.41A4.37,4.37,0,0,1,1005.19,1953.6Zm1.55-.03a2.834,2.834,0,0,0,2.81,2.88h0.02a2.882,2.882,0,0,0,2.88-2.82,2.82,2.82,0,0,0-2.8-2.88h-0.03A2.881,2.881,0,0,0,1006.74,1953.57Zm6.45-4.55a1.029,1.029,0,0,1,1.03-1.03h0.01a1.016,1.016,0,0,1,1.02,1.04,1.035,1.035,0,0,1-1.04,1.02A1.014,1.014,0,0,1,1013.19,1949.02Z'
                            transform='translate(-1001 -1945)'
                          />
                        </svg>
                      </a>
                      <a className='team__info-link team__info-link--two' href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='22.66'
                          height='14.38'
                          viewBox='0 0 22.66 14.38'>
                          <defs>
                            <style className={styles.clss}></style>
                          </defs>
                          <path
                            id='Union_6'
                            data-name='Union 6'
                            className='cls-1'
                            d='M1052.75,1960.35a7.121,7.121,0,0,1-6.59-5.65,6.6,6.6,0,0,1-.14-1.93,7.277,7.277,0,0,1,5.49-6.56,5.282,5.282,0,0,1,1.18-.19c0.23-.01.46-0.02,0.69-0.02a6.786,6.786,0,0,1,3.4.93,9.386,9.386,0,0,1,1.27.93c-0.72.71-1.41,1.4-2.11,2.09a3.914,3.914,0,0,0-2.1-1.02,4.259,4.259,0,0,0-.61-0.04,4.307,4.307,0,0,0-4.14,3.35,3.817,3.817,0,0,0-.1,1.3,4.3,4.3,0,0,0,2.94,3.74,4.35,4.35,0,0,0,1.25.19c0.1,0,.2-0.01.3-0.01a4.2,4.2,0,0,0,2.09-.67,3.314,3.314,0,0,0,1.43-2.17h-3.85c0-.09.02-1.89,0.02-2.76l0.01-.12h6.76a7.773,7.773,0,0,1-1.28,6.05,6.273,6.273,0,0,1-3.55,2.32,7.539,7.539,0,0,1-1.94.25C1053.03,1960.36,1052.89,1960.36,1052.75,1960.35Zm13.33-4.05h-1.89v-0.07l0.02-2.43h-2.51v-0.08l0.02-1.82v-0.07h2.5l0.02-2.43v-0.07h1.96v0.07l-0.02,2.43h2.51v0.07l-0.01,1.82v0.08h-2.51l-0.02,2.43v0.07h-0.07Z'
                            transform='translate(-1046.03 -1946)'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='team__box-img'>
                  <a className='team__img-link' href='#'>
                    <img src='/images/about/team/4.jpg' alt='team img' />
                  </a>
                  <div className='team__content-box'>
                    <div className='team__info-content'>
                      <a className='team__info-title' href='#'>
                        Marie F. Bloss
                      </a>
                      <p className='team__info-text'>Commodo tempor</p>
                    </div>
                    <div className='team__info-links'>
                      <a className='team__info-link team__info-link--one' href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='17.19'
                          height='17.19'
                          viewBox='0 0 17.19 17.19'>
                          <defs>
                            <style className={styles.clss}></style>
                          </defs>
                          <path
                            id='Union_5'
                            data-name='Union 5'
                            className='cls-1'
                            d='M1004.59,1961.94a4.322,4.322,0,0,1-3.43-3.75c-0.23-1.45-.25-8.19.17-9.65a4.387,4.387,0,0,1,3.75-3.35,34.173,34.173,0,0,1,4.31-.19c1.6,0,3.22.04,4.19,0.1a4.724,4.724,0,0,1,3.14,1.28,4.517,4.517,0,0,1,1.38,2.94c0.12,1.35.21,7.74-.19,9.24a4.411,4.411,0,0,1-3.8,3.44,42.333,42.333,0,0,1-4.74.19A29.143,29.143,0,0,1,1004.59,1961.94Zm0.92-15.26a2.958,2.958,0,0,0-2.75,2.59,57.587,57.587,0,0,0-.06,8.69,2.8,2.8,0,0,0,2.12,2.43,27.569,27.569,0,0,0,4.63.25c1.8,0,3.57-.06,4.24-0.13a2.941,2.941,0,0,0,2.75-2.6,61.315,61.315,0,0,0,.11-8.45,2.9,2.9,0,0,0-2.58-2.74,40.212,40.212,0,0,0-4.3-.16C1007.96,1946.56,1006.26,1946.6,1005.51,1946.68Zm-0.32,6.92a4.445,4.445,0,0,1,4.45-4.41,4.37,4.37,0,0,1,4.37,4.41,4.458,4.458,0,0,1-4.45,4.41A4.37,4.37,0,0,1,1005.19,1953.6Zm1.55-.03a2.834,2.834,0,0,0,2.81,2.88h0.02a2.882,2.882,0,0,0,2.88-2.82,2.82,2.82,0,0,0-2.8-2.88h-0.03A2.881,2.881,0,0,0,1006.74,1953.57Zm6.45-4.55a1.029,1.029,0,0,1,1.03-1.03h0.01a1.016,1.016,0,0,1,1.02,1.04,1.035,1.035,0,0,1-1.04,1.02A1.014,1.014,0,0,1,1013.19,1949.02Z'
                            transform='translate(-1001 -1945)'
                          />
                        </svg>
                      </a>
                      <a className='team__info-link team__info-link--two' href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='22.66'
                          height='14.38'
                          viewBox='0 0 22.66 14.38'>
                          <defs>
                            <style className={styles.clss}></style>
                          </defs>
                          <path
                            id='Union_6'
                            data-name='Union 6'
                            className='cls-1'
                            d='M1052.75,1960.35a7.121,7.121,0,0,1-6.59-5.65,6.6,6.6,0,0,1-.14-1.93,7.277,7.277,0,0,1,5.49-6.56,5.282,5.282,0,0,1,1.18-.19c0.23-.01.46-0.02,0.69-0.02a6.786,6.786,0,0,1,3.4.93,9.386,9.386,0,0,1,1.27.93c-0.72.71-1.41,1.4-2.11,2.09a3.914,3.914,0,0,0-2.1-1.02,4.259,4.259,0,0,0-.61-0.04,4.307,4.307,0,0,0-4.14,3.35,3.817,3.817,0,0,0-.1,1.3,4.3,4.3,0,0,0,2.94,3.74,4.35,4.35,0,0,0,1.25.19c0.1,0,.2-0.01.3-0.01a4.2,4.2,0,0,0,2.09-.67,3.314,3.314,0,0,0,1.43-2.17h-3.85c0-.09.02-1.89,0.02-2.76l0.01-.12h6.76a7.773,7.773,0,0,1-1.28,6.05,6.273,6.273,0,0,1-3.55,2.32,7.539,7.539,0,0,1-1.94.25C1053.03,1960.36,1052.89,1960.36,1052.75,1960.35Zm13.33-4.05h-1.89v-0.07l0.02-2.43h-2.51v-0.08l0.02-1.82v-0.07h2.5l0.02-2.43v-0.07h1.96v0.07l-0.02,2.43h2.51v0.07l-0.01,1.82v0.08h-2.51l-0.02,2.43v0.07h-0.07Z'
                            transform='translate(-1046.03 -1946)'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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

export default AboutBlock;
