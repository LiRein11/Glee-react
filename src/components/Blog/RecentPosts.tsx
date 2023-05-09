import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IPosts } from '../posts.interface';
import { useQuery } from 'react-query';
import { getAllPosts } from '../../http/postAPI';

const RecentPosts: FC = () => {
  const { data: postsAll } = useQuery<IPosts>(['fetchAllPost', 1, 4], () => getAllPosts(1, 4));
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className='filter__item filter-posts'>
      <h4 className='filter__title'>
        <span>RECENT POSTS</span>
      </h4>
      {postsAll?.rows.map((post) => (
        <div key={post.id} className='filter-posts__item'>
          <div className='filter-posts__content'>
            <NavLink className='filter-posts__img' to={'/blogDetails/' + post.id}>
              <img src={process.env.REACT_APP_API_URL + post.smallestImageUrl} alt='img posts' />
            </NavLink>
            <div className='filter-posts__box'>
              <NavLink className='filter-posts__title' to={'/blogDetails/' + post.id}>
                {post.title}
              </NavLink>
              <p className='filter-posts__date'>
                {new Date(post.createdAt).toLocaleDateString('ru-RU', options)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
