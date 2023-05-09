import React from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import { useQuery } from 'react-query';
import { getAllPosts } from '../../../http/postAPI';
import { IPosts } from '../../posts.interface';
import { NavLink } from 'react-router-dom';
import Pagination from '../../Pagination';
import { AppDispatch } from '../../../store';
import { useDispatch } from 'react-redux';
import { fetchOneBasket } from '../../../store/slices/cartSlice';
import jwt_decode from 'jwt-decode';
import { IUser } from '../../products.interface';
import RecentPosts from '../RecentPosts';


const BlogBlock = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [page, setPage] = React.useState(1);

  const token = localStorage.getItem('token');

  const { data: posts } = useQuery<IPosts>(['fetchLimitPost', page, 2], () => getAllPosts(page, 2));

  console.log(posts);

  React.useEffect(() => {
    dispatch(fetchOneBasket());
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const user: IUser = jwt_decode(token ? token : '');
  console.log(user);

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
                  {posts?.rows.map((post) => (
                    <div className='blog-item'>
                      <div className='blog-item__box'>
                        <NavLink to={'/blogDetails/' + post.id}>
                          <img
                            className='blog-item__img'
                            src={post ? process.env.REACT_APP_API_URL + post?.imageUrl : ''}
                            alt='blog img'
                          />
                        </NavLink>
                        <div className='blog-item__info'>
                          <span className='blog-item__date'>
                            {new Date(post?.createdAt).toLocaleDateString('ru-RU', options)}
                          </span>
                          <a className='blog-item__author' href='#'>
                            By {user.role}
                          </a>
                        </div>
                      </div>
                      <a className='blog-item__title'>{post.title}</a>
                      <p className='blog-item__text'>{post.text}</p>
                      <NavLink className='blog-item__link' to={'/blogDetails/' + post.id}>
                        View More
                      </NavLink>
                    </div>
                  ))}
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
                      <span>TAGS</span>
                    </h4>
                    {/* <form className='filter-category__form' action='#'>
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
                    </form> */}
                  </div>

                  <RecentPosts />
                </div>
              </div>
              <Pagination
                devices={posts ? posts : undefined}
                limit={2}
                count={posts?.count}
                pageBlog={page}
                setPageBlog={setPage}
              />
            </div>
          </section>
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

export default BlogBlock;
