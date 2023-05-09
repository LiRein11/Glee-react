import React from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import { useQuery } from 'react-query';
import { createComment, deleteComment, getCommentsByPost, getOnePost } from '../../../http/postAPI';
import { IPost } from '../../posts.interface';
import { useParams } from 'react-router-dom';
import { IDataToken, IUser } from '../../products.interface';
import { getUserById } from '../../../http/userAPI';
import jwt_decode from 'jwt-decode';
import RecentPosts from '../RecentPosts';

const BlogDetailsBlock = () => {
  const { id } = useParams();

  const token = localStorage.getItem('token');
  const [idUser, setIdUser] = React.useState<number>();

  const { data: post, refetch } = useQuery<IPost>(['fetchOnePost', id], () => getOnePost(id));
  const { data: user } = useQuery<IUser>(['fetchOneUser', idUser], () => getUserById(idUser));

  const [valueName, setValueName] = React.useState('');
  const [valueEmail, setValueEmail] = React.useState('');
  const [valueComment, setValueComment] = React.useState('');
  const [val, setVal] = React.useState('');

  const onClickBtn = (e, id, text) => {
    e.preventDefault();
    createComment(id, text);
    setVal(valueComment);
    setValueComment('');
  };
  console.log(post);
  const onClickDeleteComment = (e, id) => {
    const a = window.confirm('Вы хотите удалить комментарий?');
    if (a === true) {
      deleteComment(id).then((data) => alert(data));
    } else return;
  };

  React.useEffect(() => {
    setValueName(user ? user?.name : '');
    setValueEmail(user ? user?.email : '');
    if (token) {
      const data: IDataToken = jwt_decode(token);
      setIdUser(data.id);
    }
  }, [user]);

  React.useEffect(() => {
    refetch();
  }, [val]);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

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
                      <span className='blog-item__date'>
                        {new Date(post !== undefined ? post.createdAt : 0).toLocaleDateString(
                          'ru-RU',
                          options,
                        )}
                      </span>
                      <a className='blog-item__author' href='#'>
                        By {user?.role}
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
                          src={
                            post !== undefined
                              ? process.env.REACT_APP_API_URL + post?.user.avatarUrl
                              : ''
                          }
                          alt='img blog detalis'
                        />
                        <div className='blog-item__left-info'>
                          <h5 className='blog-item__left-title'>{post?.user.name}</h5>
                          <p className='blog-item__left-text'>{post?.user.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className='blog-item__right'>
                      <span className='blog-item__right-span'>Tags: </span>
                      <p className='blog-item__right-text'>{post?.tags.join(', ')}</p>
                    </div>
                  </div>
                  <div className='comments'>
                    <h4 className='comments__title comments__title--active'>
                      {post?.postComments.length} Comments
                    </h4>
                    {post?.postComments.map((comment) => (
                      <div className='comments__comment'>
                        <img
                          className='comments__img'
                          src={process.env.REACT_APP_API_URL + comment.user.avatarUrl}
                          alt='img avatar'
                        />
                        <div className='comments__content'>
                          <div className='comments__info'>
                            <h5 className='comments__info-title'>{comment.user.name}</h5>
                            <p className='comments__info-date'>
                              {new Date(comment.createdAt).toLocaleDateString('ru-RU', options)}
                              <button
                                className='comments__close-btn'
                                onClick={(e) => onClickDeleteComment(e, comment.id)}></button>
                            </p>
                          </div>
                          <p className='comments__text'>{comment.text}</p>
                          <a className='comments__reply' href='#'>
                            Reply
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h4 className='comments__title'>Leave A Comment</h4>
                  <form className='comments__form'>
                    <div className='comments__form-box'>
                      <input
                        className='comments__form-input comments__form-input--name'
                        placeholder='Name'
                        value={valueName}
                        onChange={(e) => setValueName(e.target.value)}
                        type='text'
                      />
                      <input
                        className='comments__form-input comments__form-input--email'
                        placeholder='Email'
                        value={valueEmail}
                        onChange={(e) => setValueEmail(e.target.value)}
                        type='text'
                      />
                    </div>
                    <textarea
                      className='comments__form-textarea comments__form-textarea--message'
                      placeholder='Comment'
                      value={valueComment}
                      onChange={(e) => setValueComment(e.target.value)}></textarea>
                    <button
                      className='comments__form-btn'
                      onClick={(e) => onClickBtn(e, post?.id, valueComment)}>
                      Post Comment
                    </button>
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

                <RecentPosts />
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
