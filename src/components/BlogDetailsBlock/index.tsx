import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { useQuery } from 'react-query';
import { getOnePost } from '../../http/postAPI';
import { IPost } from '../posts.interface';
import { useParams } from 'react-router-dom';

const BlogDetailsBlock = () => {
    
  const { id } = useParams();
  const { data: post } = useQuery<IPost>(['fetchOnePost', id], () => getOnePost(id));

  return (
    <>
      <Header />

      <main className='main'>
        <section className='top'>
          <div className='top-container'>
            <h2 className='top__title title'>Blog Details</h2>
            <div className='breadcrumbs'>
              <ul className='breadcrumbs__list'>
                <li className='breadcrumbs__item'>
                  <a className='breadcrumbs__link' href='#'>
                    Home
                  </a>
                </li>
                <li className='breadcrumbs__item'>
                  <a className='breadcrumbs__link' href='#'>
                    Blog Details
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='blog-page blog-page__detalis'>
          <div className='container'>
            <div className='blog-page__inner'>
              <div className='blog-page__content'>
                <div className='blog-item blog-item__detalis'>
                  <div className='blog-item__box'>
                    <a href='#'>
                      <img
                        className='blog-item__img'
                        src={post ? process.env.REACT_APP_API_URL + post?.imageUrl : ''}
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
                  <a className='blog-item__title blog-item__title-detalis'>{post?.title}</a>
                  <p className='blog-item__text-one'>{post?.text}</p>
                  <blockquote className='blog-item__blockquote'>
                    <p>{post?.quote}</p>
                    <span className='blog-item__blockquote-author'>Wiusmod tempor</span>
                  </blockquote>
                  <div className='blog-item__content'>
                    <img
                      className='blog-item__content-img'
                      src={post ? process.env.REACT_APP_API_URL + post?.smallImageUrl : ''}
                      alt='content img'
                    />
                    <div className='blog-item__content-box'>
                      <h6 className='blog-item__content-title'>{post?.miniTitleOne}</h6>
                      <p className='blog-item__content-text'>{post?.textMiniOne}</p>
                    </div>
                  </div>
                  <h6 className='blog-item__titletitle'>{post?.miniTitleTwo}</h6>
                  <p className='blog-item__texttext'>{post?.textMiniOne}</p>
                  <div className='blog-item__inner'>
                    <div className='blog-item__left'>
                      <div className='blog-item__left-content'>
                        <img
                          className='blog-item__left-img'
                          src='/images/blog/blog-detalis/2.jpg'
                          alt='img blog detalis'
                        />
                        <div className='blog-item__left-info'>
                          <h5 className='blog-item__left-title'>Mark N. Hernandez</h5>
                          <p className='blog-item__left-text'>Designer</p>
                        </div>
                      </div>
                    </div>
                    <div className='blog-item__right'>
                      <span className='blog-item__right-span'>Tags:</span>
                      <p className='blog-item__right-text'>All, Trending</p>
                      <span className='blog-item__right-span'>Share:</span>
                      <div className='blog-item__right-links'>
                        <a className='blog-item__right-link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='9px'
                            height='18px'
                            viewBox='0 0 9 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{
                                  stroke: 'none',
                                  fillRule: 'nonzero',
                                  fill: 'rgb(161,161,161)',
                                  fillOpacity: '1',
                                }}
                                d='M 7.851562 10.125 L 8.25 6.867188 L 5.75 6.867188 L 5.75 4.753906 C 5.75 3.863281 6.097656 2.992188 7.21875 2.992188 L 8.355469 2.992188 L 8.355469 0.21875 C 8.355469 0.21875 7.324219 0 6.339844 0 C 4.277344 0 2.933594 1.558594 2.933594 4.382812 L 2.933594 6.867188 L 0.644531 6.867188 L 0.644531 10.125 L 2.933594 10.125 L 2.933594 18 L 5.75 18 L 5.75 10.125 Z M 7.851562 10.125 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='blog-item__right-link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16px'
                            height='14px'
                            viewBox='0 0 16 14'
                            version='1.1'>
                            <g>
                              <path
                                style={{
                                  stroke: 'none',
                                  fillRule: 'nonzero',
                                  fill: 'rgb(161,161,161)',
                                  fillOpacity: '1',
                                }}
                                d='M 14.355469 4.148438 C 14.367188 4.273438 14.367188 4.398438 14.367188 4.523438 C 14.367188 8.316406 11.066406 12.683594 5.035156 12.683594 C 3.175781 12.683594 1.453125 12.214844 0 11.398438 C 0.265625 11.425781 0.519531 11.433594 0.792969 11.433594 C 2.324219 11.433594 3.734375 10.980469 4.863281 10.207031 C 3.421875 10.179688 2.214844 9.355469 1.796875 8.21875 C 2 8.242188 2.203125 8.261719 2.417969 8.261719 C 2.710938 8.261719 3.003906 8.226562 3.277344 8.164062 C 1.777344 7.898438 0.648438 6.742188 0.648438 5.347656 L 0.648438 5.3125 C 1.085938 5.527344 1.59375 5.660156 2.132812 5.675781 C 1.25 5.160156 0.671875 4.28125 0.671875 3.285156 C 0.671875 2.753906 0.832031 2.265625 1.117188 1.839844 C 2.730469 3.578125 5.15625 4.71875 7.878906 4.839844 C 7.828125 4.628906 7.796875 4.40625 7.796875 4.183594 C 7.796875 2.601562 9.257812 1.316406 11.074219 1.316406 C 12.019531 1.316406 12.871094 1.660156 13.472656 2.222656 C 14.214844 2.097656 14.921875 1.855469 15.554688 1.527344 C 15.308594 2.195312 14.792969 2.753906 14.113281 3.109375 C 14.773438 3.046875 15.410156 2.886719 16 2.664062 C 15.554688 3.234375 14.996094 3.738281 14.355469 4.148438 Z M 14.355469 4.148438 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='blog-item__right-link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14px'
                            height='14px'
                            viewBox='0 0 14 14'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{
                                  stroke: 'none',
                                  fillRule: 'nonzero',
                                  fill: 'rgb(161,161,161)',
                                  fillOpacity: '1',
                                }}
                                d='M 7.003906 3.855469 C 5.015625 3.855469 3.414062 5.257812 3.414062 6.996094 C 3.414062 8.734375 5.015625 10.140625 7.003906 10.140625 C 8.992188 10.140625 10.59375 8.734375 10.59375 6.996094 C 10.59375 5.257812 8.992188 3.855469 7.003906 3.855469 Z M 7.003906 9.039062 C 5.71875 9.039062 4.667969 8.125 4.667969 6.996094 C 4.667969 5.871094 5.714844 4.953125 7.003906 4.953125 C 8.289062 4.953125 9.335938 5.871094 9.335938 6.996094 C 9.335938 8.125 8.289062 9.039062 7.003906 9.039062 Z M 11.578125 3.726562 C 11.578125 4.132812 11.203125 4.460938 10.742188 4.460938 C 10.273438 4.460938 9.902344 4.132812 9.902344 3.726562 C 9.902344 3.320312 10.277344 2.996094 10.742188 2.996094 C 11.203125 2.996094 11.578125 3.324219 11.578125 3.726562 Z M 13.957031 4.46875 C 13.902344 3.488281 13.648438 2.621094 12.824219 1.902344 C 12.007812 1.1875 11.011719 0.960938 9.890625 0.914062 C 8.734375 0.855469 5.269531 0.855469 4.113281 0.914062 C 2.992188 0.960938 2 1.183594 1.179688 1.898438 C 0.355469 2.617188 0.101562 3.484375 0.046875 4.46875 C -0.0195312 5.480469 -0.0195312 8.511719 0.046875 9.523438 C 0.101562 10.503906 0.355469 11.375 1.179688 12.089844 C 2 12.808594 2.992188 13.03125 4.113281 13.082031 C 5.269531 13.140625 8.734375 13.140625 9.890625 13.082031 C 11.011719 13.035156 12.007812 12.8125 12.824219 12.089844 C 13.644531 11.375 13.898438 10.503906 13.957031 9.523438 C 14.023438 8.511719 14.023438 5.484375 13.957031 4.472656 Z M 12.460938 10.609375 C 12.21875 11.144531 11.746094 11.558594 11.132812 11.773438 C 10.210938 12.09375 8.023438 12.019531 7.003906 12.019531 C 5.984375 12.019531 3.792969 12.089844 2.875 11.773438 C 2.261719 11.5625 1.789062 11.148438 1.542969 10.609375 C 1.179688 9.804688 1.261719 7.890625 1.261719 6.996094 C 1.261719 6.105469 1.179688 4.1875 1.542969 3.386719 C 1.789062 2.847656 2.257812 2.4375 2.875 2.21875 C 3.796875 1.902344 5.984375 1.972656 7.003906 1.972656 C 8.023438 1.972656 10.210938 1.902344 11.132812 2.21875 C 11.742188 2.433594 12.214844 2.847656 12.460938 3.386719 C 12.828125 4.191406 12.742188 6.105469 12.742188 6.996094 C 12.742188 7.890625 12.828125 9.804688 12.460938 10.609375 Z M 12.460938 10.609375 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='blog-item__right-link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16px'
                            height='16px'
                            viewBox='0 0 16 16'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{
                                  stroke: 'none',
                                  fillRule: 'nonzero',
                                  fill: 'rgb(161,161,161)',
                                  fillOpacity: '1',
                                }}
                                d='M 16 8.179688 C 16 12.601562 12.824219 15.75 8.132812 15.75 C 3.632812 15.75 0 12.289062 0 8 C 0 3.710938 3.632812 0.25 8.132812 0.25 C 10.320312 0.25 12.164062 1.015625 13.582031 2.277344 L 11.371094 4.304688 C 8.476562 1.644531 3.09375 3.644531 3.09375 8 C 3.09375 10.703125 5.355469 12.894531 8.132812 12.894531 C 11.351562 12.894531 12.558594 10.695312 12.746094 9.554688 L 8.132812 9.554688 L 8.132812 6.886719 L 15.871094 6.886719 C 15.949219 7.285156 16 7.664062 16 8.179688 Z M 16 8.179688 '
                              />
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='comments'>
                    <h4 className='comments__title comments__title--active'>3 Comments</h4>
                    <div className='comments__comment'>
                      <img
                        className='comments__img'
                        src='/images/blog/avatar/1.jpg'
                        alt='img avatar'
                      />
                      <div className='comments__content'>
                        <div className='comments__info'>
                          <h5 className='comments__info-title'>Delores G. Roberts</h5>
                          <p className='comments__info-date'>Add 11 Oct 2020</p>
                        </div>
                        <p className='comments__text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                          fringilla massa et tristique convallis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse
                          orci sem, ultrices
                        </p>
                        <a className='comments__reply' href='#'>
                          Reply
                        </a>
                      </div>
                    </div>
                    <div className='comments__comment comments__comment--active'>
                      <img
                        className='comments__img'
                        src='/images/blog/avatar/2.jpg'
                        alt='img avatar'
                      />
                      <div className='comments__content'>
                        <div className='comments__info'>
                          <h5 className='comments__info-title'>Shannon S. Williams</h5>
                          <p className='comments__info-date'>Add 11 Oct 2020</p>
                        </div>
                        <p className='comments__text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                          fringilla massa et tristique convallis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra
                        </p>
                        <a className='comments__reply' href='#'>
                          Reply
                        </a>
                      </div>
                    </div>
                    <div className='comments__comment'>
                      <img
                        className='comments__img'
                        src='/images/blog/avatar/3.jpg'
                        alt='img avatar'
                      />
                      <div className='comments__content'>
                        <div className='comments__info'>
                          <h5 className='comments__info-title'>Nicholas R. Coley</h5>
                          <p className='comments__info-date'>Add 11 Oct 2020</p>
                        </div>
                        <p className='comments__text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                          fringilla massa et tristique convallis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse
                          orci sem,
                        </p>
                        <a className='comments__reply' href='#'>
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <h4 className='comments__title'>Leave A Comment</h4>
                  <form className='comments__form'>
                    <div className='comments__form-box'>
                      <input
                        className='comments__form-input comments__form-input--name'
                        placeholder='Name'
                        type='text'
                      />
                      <input
                        className='comments__form-input comments__form-input--email'
                        placeholder='Email'
                        type='text'
                      />
                    </div>
                    <textarea
                      className='comments__form-textarea comments__form-textarea--message'
                      placeholder='Comment'></textarea>
                    <button className='comments__form-btn'>Post Comment</button>
                  </form>
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

                {/* <div className='filter__item filter-category'>
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
                </div> */}

                <div className='filter__item filter-posts'>
                  <h4 className='filter__title'>
                    <span>RECENT POSTS</span>
                  </h4>
                  <div className='filter-posts__item'>
                    <div className='filter-posts__content'>
                      <a className='filter-posts__img' href='#'>
                        <img src='/images/blog/posts/1.jpg' alt='img posts' />
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
                        <img src='/images/blog/posts/2.jpg' alt='img posts' />
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
                        <img src='/images/blog/posts/3.jpg' alt='img posts' />
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
                        <img src='/images/blog/posts/4.jpg' alt='img posts' />
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
          </div>
        </section>

        <section className='partners-section'>
          <div className='container'>
            <div className='partners-section__content'>
              <div className='partners-section__images'>
                <img
                  className='partners-section__images-img'
                  src='/images/partners/1.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='/images/partners/2.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='/images/partners/3.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='/images/partners/4.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='/images/partners/5.png'
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

export default BlogDetailsBlock;
