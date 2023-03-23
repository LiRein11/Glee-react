import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const BlogBlock = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <section className='top'>
          <div className='top-container'>
            <h2 className='top__title title'>Blog</h2>
            <div className='breadcrumbs'>
              <ul className='breadcrumbs__list'>
                <li className='breadcrumbs__item'>
                  <a className='breadcrumbs__link' href='#'>
                    Home
                  </a>
                </li>
                <li className='breadcrumbs__item'>
                  <a className='breadcrumbs__link' href='#'>
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <section className='blog-page'>
            <div className='container'>
              <div className='blog-page__inner'>
                <div className='blog-page__content'>
                  <div className='blog-item'>
                    <div className='blog-item__box'>
                      <a href='#'>
                        <img
                          className='blog-item__img'
                          src='images/blog/blog-page/1.jpg'
                          alt='blog img'
                        />
                      </a>
                      <div className='blog-item__info'>
                        <span className='blog-item__date'>28 JANUARY, 2020</span>
                        <a className='blog-item__author' href='#'>
                          BY ADMIN
                        </a>
                      </div>
                    </div>
                    <a className='blog-item__title'>Fonsectetur adipisicing eiusmod</a>
                    <p className='blog-item__text'>
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut alLorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                    <a className='blog-item__link' href='#'>
                      View More
                    </a>
                  </div>

                  <div className='blog-item'>
                    <div className='blog-item__box'>
                      <a href='#'>
                        <img
                          className='blog-item__img'
                          src='images/blog/blog-page/2.jpg'
                          alt='blog img'
                        />
                      </a>
                      <div className='blog-item__info'>
                        <span className='blog-item__date'>28 JANUARY, 2020</span>
                        <a className='blog-item__author' href='#'>
                          BY ADMIN
                        </a>
                      </div>
                    </div>
                    <a className='blog-item__title'>Fonsectetur adipisicing elit</a>
                    <p className='blog-item__text'>
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut alLorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                    <a className='blog-item__link' href='#'>
                      View More
                    </a>
                  </div>

                  <div className='blog-item'>
                    <div className='blog-item__box'>
                      <a href='#'>
                        <img
                          className='blog-item__img'
                          src='images/blog/blog-page/3.jpg'
                          alt='blog img'
                        />
                      </a>
                      <div className='blog-item__info'>
                        <span className='blog-item__date'>28 JANUARY, 2020</span>
                        <a className='blog-item__author' href='#'>
                          BY ADMIN
                        </a>
                      </div>
                    </div>
                    <a className='blog-item__title'>Fsectetur adipisicing tempor incididunt</a>
                    <p className='blog-item__text'>
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut alLorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                    <a className='blog-item__link' href='#'>
                      View More
                    </a>
                  </div>

                  <div className='blog-item'>
                    <div className='blog-item__box'>
                      <a href='#'>
                        <img
                          className='blog-item__img'
                          src='images/blog/blog-page/4.jpg'
                          alt='blog img'
                        />
                      </a>
                      <div className='blog-item__info'>
                        <span className='blog-item__date'>28 JANUARY, 2020</span>
                        <a className='blog-item__author' href='#'>
                          BY ADMIN
                        </a>
                      </div>
                    </div>
                    <a className='blog-item__title'>Vonsectetur adipisicing elit</a>
                    <p className='blog-item__text'>
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut alLorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                    <a className='blog-item__link' href='#'>
                      View More
                    </a>
                  </div>
                </div>

                <div className='blog-page__filters'>
                  <div className='filter-item filter-search'>
                    <form className='filter-search__form' action='#'>
                      <input className='filter-search__input' type='text' />
                      <button className='filter-search__btn' type='submit'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='17.03'
                          height='17'
                          viewBox='0 0 17.03 17'>
                          <defs>
                            {/* <style>
                          .cls-1 {
                            fill: #094074;
                            fill-rule: evenodd;
                          }
                        </style> */}
                          </defs>
                          <path
                            className='cls-1'
                            d='M1529.25,418.92a0.6,0.6,0,0,1-.42-0.174l-5.3-5.3a6.515,6.515,0,1,1,.84-0.839l5.3,5.3a0.6,0.6,0,0,1,0,.839A0.6,0.6,0,0,1,1529.25,418.92Zm-9.9-15.833a5.344,5.344,0,1,0,5.35,5.344A5.351,5.351,0,0,0,1519.35,403.087Z'
                            transform='translate(-1512.81 -401.906)'
                          />
                        </svg>
                      </button>
                    </form>
                  </div>

                  <div className='filter__item filter-category'>
                    <h4 className='filter__title'>
                      <span>CATEGORY</span>
                    </h4>
                    <form className='filter-category__form' action='#'>
                      <label className='filter-category__label'>
                        <input className='filter-category__input' type='checkbox' defaultChecked />
                        <div className='filter-category__checkbox'>
                          <span>Chair</span>
                          <span>{'>'}</span>
                        </div>
                      </label>
                      <label className='filter-category__label'>
                        <input className='filter-category__input' type='checkbox' />
                        <div className='filter-category__checkbox'>
                          <span>Table</span>
                          <span>{'>'}</span>
                        </div>
                      </label>
                      <label className='filter-category__label'>
                        <input className='filter-category__input' type='checkbox' />
                        <div className='filter-category__checkbox'>
                          <span>Lamp</span>
                          <span>{'>'}</span>
                        </div>
                      </label>
                      <label className='filter-category__label'>
                        <input className='filter-category__input' type='checkbox' />
                        <div className='filter-category__checkbox'>
                          <span>Watch</span>
                          <span>{'>'}</span>
                        </div>
                      </label>
                      <label className='filter-category__label'>
                        <input className='filter-category__input' type='checkbox' />
                        <div className='filter-category__checkbox'>
                          <span>Clock</span>
                          <span>{'>'}</span>
                        </div>
                      </label>
                    </form>
                  </div>

                  <div className='filter__item filter-posts'>
                    <h4 className='filter__title'>
                      <span>RECENT POSTS</span>
                    </h4>
                    <div className='filter-posts__item'>
                      <div className='filter-posts__content'>
                        <a className='filter-posts__img' href='#'>
                          <img src='images/blog/posts/1.jpg' alt='img posts' />
                        </a>
                        <div className='filter-posts__box'>
                          <a className='filter-posts__title' href='#'>
                            Corem ipsum dolor tetur adipisicing elit
                          </a>
                          <p className='filter-posts__date'>28 JANUARY, 2020</p>
                        </div>
                      </div>
                    </div>
                    <div className='filter-posts__item'>
                      <div className='filter-posts__content'>
                        <a className='filter-posts__img' href='#'>
                          <img src='images/blog/posts/2.jpg' alt='img posts' />
                        </a>
                        <div className='filter-posts__box'>
                          <a className='filter-posts__title' href='#'>
                            Fdipisicing elit, sed do eiusmod tempor
                          </a>
                          <p className='filter-posts__date'>28 JANUARY, 2020</p>
                        </div>
                      </div>
                    </div>
                    <div className='filter-posts__item'>
                      <div className='filter-posts__content'>
                        <a className='filter-posts__img' href='#'>
                          <img src='images/blog/posts/3.jpg' alt='img posts' />
                        </a>
                        <div className='filter-posts__box'>
                          <a className='filter-posts__title' href='#'>
                            Eonsectetur adipisicing elit, sed do eiusmod
                          </a>
                          <p className='filter-posts__date'>28 JANUARY, 2020</p>
                        </div>
                      </div>
                    </div>
                    <div className='filter-posts__item'>
                      <div className='filter-posts__content'>
                        <a className='filter-posts__img' href='#'>
                          <img src='images/blog/posts/4.jpg' alt='img posts' />
                        </a>
                        <div className='filter-posts__box'>
                          <a className='filter-posts__title' href='#'>
                            Gnim ad minim veniam, quis nostrud
                          </a>
                          <p className='filter-posts__date'>28 JANUARY, 2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pagination pagination-blog'>
                <a className='pagination__prev pagination__arrow' href='#'>
                  Previous
                </a>
                <ul className='pagination__list'>
                  <li className='pagination__item'>
                    <a className='pagination__link pagination__link--active' href='#'>
                      1
                    </a>
                  </li>
                  <li className='pagination__item'>
                    <a className='pagination__link' href='#'>
                      2
                    </a>
                  </li>
                  <li className='pagination__item'>
                    <a className='pagination__link' href='#'>
                      3
                    </a>
                  </li>
                </ul>
                <a className='pagination__next pagination__arrow' href='#'>
                  Next
                </a>
              </div>
            </div>
          </section>
        </section>
        <section className='partners-section'>
          <div className='container'>
            <div className='partners-section__content'>
              <div className='partners-section__images'>
                <img
                  className='partners-section__images-img'
                  src='images/partners/1.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='images/partners/2.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='images/partners/3.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='images/partners/4.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='images/partners/5.png'
                  alt='partners img'
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

export default BlogBlock;
