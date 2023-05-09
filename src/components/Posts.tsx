import React from 'react';
import { useQuery } from 'react-query';
import { IPosts } from './posts.interface';
import { getAllPosts } from '../http/postAPI';
import { NavLink } from 'react-router-dom';

const Posts = () => {
  const { data: posts } = useQuery<IPosts>(['fetchLimitPost', 1, 3], () => getAllPosts(1, 3));
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <>
      <section className='blog'>
        <div className='container'>
          <div className='blog__box'>
            <h3 className='blog__box-title'>Our Insights & Articles</h3>
            <NavLink className='blog__box-link' to={'/blog'}>
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
            </NavLink>
          </div>
          <div className='blog__items'>
            <div className='blog__item'>
              <NavLink className='blog__item-imglink' to={'/blogDetails/' + posts?.rows[0].id}>
                <img
                  src={posts ? process.env.REACT_APP_API_URL + posts?.rows[0].smallImageUrl : ''}
                  alt='img blog'
                />
              </NavLink>
              <div className='blog__item-box'>
                <span className='blog__item-news'>NEWS</span>
                <NavLink className='blog__item-title' to={'/blogDetails/' + posts?.rows[0].id}>
                  {posts?.rows[0].title}
                </NavLink>
              </div>
              <div className='blog__item-info'>
                <div className='blog__item-date'>
                  {new Date(posts ? posts?.rows[0].createdAt : '').toLocaleDateString(
                    'ru-RU',
                    options,
                  )}
                </div>
                <a className='blog__item-author'>By ADMIN</a>
              </div>
            </div>
          </div>
          <div className='blog__items'>
            <div className='blog__item'>
              <NavLink className='blog__item-imglink' to={'/blogDetails/' + posts?.rows[1].id}>
                <img
                  src={posts ? process.env.REACT_APP_API_URL + posts?.rows[1].smallImageUrl : ''}
                  alt='img blog'
                />
              </NavLink>
              <div className='blog__item-box'>
                <span className='blog__item-news'>NEWS</span>
                <NavLink className='blog__item-title' to={'/blogDetails/' + posts?.rows[1].id}>
                  {posts?.rows[1].title}
                </NavLink>
              </div>
              <div className='blog__item-info'>
                <div className='blog__item-date'>
                  {new Date(posts ? posts?.rows[1].createdAt : '').toLocaleDateString(
                    'ru-RU',
                    options,
                  )}
                </div>
                <a className='blog__item-author'>By ADMIN</a>
              </div>
            </div>
          </div>
          <div className='blog__items'>
            <div className='blog__item'>
              <NavLink className='blog__item-imglink' to={'/blogDetails/' + posts?.rows[2].id}>
                <img
                  src={posts ? process.env.REACT_APP_API_URL + posts?.rows[2].smallImageUrl : ''}
                  alt='img blog'
                />
              </NavLink>
              <div className='blog__item-box'>
                <span className='blog__item-news'>NEWS</span>
                <NavLink className='blog__item-title' to={'/blogDetails/' + posts?.rows[2].id}>
                  {posts?.rows[2].title}
                </NavLink>
              </div>
              <div className='blog__item-info'>
                <div className='blog__item-date'>
                  {new Date(posts ? posts?.rows[2].createdAt : '').toLocaleDateString(
                    'ru-RU',
                    options,
                  )}
                </div>
                <a className='blog__item-author'>By ADMIN</a>
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
    </>
  );
};

export default Posts;
