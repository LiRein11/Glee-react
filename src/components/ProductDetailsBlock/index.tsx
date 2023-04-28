import React, { FC } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { useNavigate, useParams } from 'react-router-dom';
import { addDeviceToBasket, addRating, checkRating, fetchOneDevice } from '../../http/deviceAPI';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { fetchOneBasket } from '../../store/slices/cartSlice';
import { useQuery } from 'react-query';
import RatingStars from '../Ratings';

const ProductDetailsBlock: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const [resRate, setResRate] = React.useState(0);
  const [isAccessRating, setIsAccessRating] = React.useState(false);
  const { id }: any = useParams();
  const token: string | null = localStorage.getItem('token');
  let [count, setCount] = React.useState(1);

  const { data: device, isLoading: loadingDevice } = useQuery(['fetchDevice', id], () =>
    fetchOneDevice(id),
  );

  const addToCart = async (id: number) => {
    await addDeviceToBasket(id);
    dispatch(fetchOneBasket());
    alert('Товар добавлен в корзину!');
  };

  React.useEffect(() => {
    if (token) {
      checkRating({ deviceId: id }).then((res) => setIsAccessRating(res.allow));
    }
  }, [resRate]);

  const handleClick = async (nextValue: number) => {
    try {
      await addRating({ rate: nextValue, deviceId: id });

      setResRate(nextValue);
      // Здесь выполняется проверка рейтинга после обновления
      checkRating({ deviceId: id }).then((res) => setIsAccessRating(res.allow));
      alert('Спасибо за оценку');
    } catch (error) {
      console.error(error);
    }
  };

  const onClickLeftBtn = React.useCallback(() => {
    if (count !== 1) setCount(--count);
  }, [count]);

  const onClickRightBtn = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const totalCount = React.useMemo(() => count, [count]);
  
  return (
    <>
      {device ? (
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

            <section className='product'>
              <div className='container'>
                <div className='product-item'>
                  <div className='product-item__inner'>
                    <div className='product-item__slide product-slide'>
                      <div className='product-slide__thumb'>
                        <div className='product-slide__thumb-item'>
                          <img src={process.env.REACT_APP_API_URL + device.img} alt='product img' />
                        </div>
                        <div className='product-slide__thumb-item'>
                          <img src={process.env.REACT_APP_API_URL + device.img} alt='product img' />
                        </div>
                        <div className='product-slide__thumb-item'>
                          <img src={process.env.REACT_APP_API_URL + device.img} alt='product img' />
                        </div>
                      </div>
                      <div className='product-slide__big'>
                        <div className='product-slide__big-item'>
                          <img src={process.env.REACT_APP_API_URL + device.img} alt='product img' />
                        </div>
                        {/* <div className='product-slide__big-item'>
                      <img src='/images/product/1.jpg' alt='product img' />
                    </div>
                    <div className='product-slide__big-item'>
                      <img src='/images/product/1.jpg' alt='product img' />
                    </div> */}
                      </div>
                    </div>
                    <div className='product-item__content'>
                      <div className='product-item__box'>
                        <h3 className='product-item__title'>{device.name}</h3>
                        <RatingStars
                          clickRating={handleClick}
                          ratingVal={device.rating}
                          isAuth={token ? true : false}
                          isAccessRating={isAccessRating}
                        />
                        <span className='product-item__price'>{device.price}$</span>
                        <p className='product-item__text'>{device.description}</p>
                        <form className='product-item__form' action=''>
                          <button className='product-item__btn-left' onClick={onClickLeftBtn}>
                            -
                          </button>
                          <div className='product-item__num'>{totalCount}</div>
                          <button className='product-item__btn-right' onClick={onClickRightBtn}>
                            +
                          </button>
                          <button className='product-item__btn' type='submit'>
                            ADD TO CART
                          </button>
                        </form>
                        {/* <span className='product-item__info'>SKU: 014</span>
                    <span className='product-item__info'>Category: Lights</span>
                    <span className='product-item__info'>Tag: Decorative</span> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='product-tabs'>
                  <div className='product-tabs__top'>
                    <a
                      className='product-tabs__top-item product-tabs__top-item--active'
                      href='#tab-1'>
                      Description
                    </a>
                    <a className='product-tabs__top-item' href='#tab-2'>
                      Additional information
                    </a>
                    <a className='product-tabs__top-item' href='#tab-3'>
                      Reviews (2)
                    </a>
                  </div>
                  <div className='product-tabs__content'>
                    <div
                      className='product-tabs__content-item product-tabs__content-item--active'
                      id='tab-1'>
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className='product-tabs__content-item' id='tab-2'>
                      content 2
                    </div>
                    <div className='product-tabs__content-item' id='tab-3'>
                      content 3
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='related'>
              <div className='container'>
                <div className='related__top'>
                  <h3 className='related__title'>Related products</h3>
                  <div className='related__box-buttons'>
                    <button
                      className='related__buttons related__buttons--active'
                      onClick={() => navigate('#tabs-1')}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='22'
                        height='9'
                        viewBox='0 0 22 9'>
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
                          d='M1460.7,1330.53h-16.94l0.1-2.86a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-0.18-.17a0.267,0.267,0,0,0-.4,0l-4.2,4.21a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l4.2,4.21a0.29,0.29,0,0,0,.4,0l0.18-.17a0.323,0.323,0,0,0,.08-0.21,0.3,0.3,0,0,0-.08-0.2l-0.12-2.86h16.97a0.3,0.3,0,0,0,.29-0.3v-1.37A0.291,0.291,0,0,0,1460.7,1330.53Z'
                          transform='translate(-1439 -1327)'
                        />
                      </svg>
                    </button>
                    <button className='related__buttons' onClick={() => navigate('#tabs-2')}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='22'
                        height='9'
                        viewBox='0 0 22 9'>
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
                          d='M1509.3,1332.47h16.94l-0.1,2.86a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l0.18,0.17a0.267,0.267,0,0,0,.4,0l4.2-4.21a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-4.2-4.21a0.29,0.29,0,0,0-.4,0l-0.18.17a0.323,0.323,0,0,0-.08.21,0.318,0.318,0,0,0,.08.2l0.12,2.86h-16.97a0.3,0.3,0,0,0-.29.3v1.37A0.291,0.291,0,0,0,1509.3,1332.47Z'
                          transform='translate(-1509 -1327)'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='related__items related__items--active' id='tabs-1'>
                  <div className='products-item'>
                    <div className='products-item__img-box'>
                      <span className='products-item__centr'>
                        <img
                          className='products-item__images'
                          src='/images/products/1.png'
                          alt='products img'
                        />
                      </span>
                      <div className='products-item__link-box'>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{
                                  stroke: 'none',
                                  fillRule: 'evenodd',
                                  fill: '$accent',
                                  fillOpacity: '1',
                                }}
                                d='M 19.449219 15.121094 L 14.863281 10.988281 C 14.179688 11.945312 13.273438 12.757812 12.210938 13.375 L 16.800781 17.503906 C 17.53125 18.164062 18.71875 18.164062 19.449219 17.503906 C 20.179688 16.847656 20.183594 15.777344 19.449219 15.121094 Z M 15 6.75 C 15 3.023438 11.640625 0 7.5 0 C 3.359375 0 0 3.023438 0 6.75 C 0 10.476562 3.359375 13.5 7.5 13.5 C 11.640625 13.5 15 10.476562 15 6.75 Z M 7.5 11.808594 C 4.394531 11.808594 1.875 9.539062 1.875 6.742188 C 1.875 3.949219 4.394531 1.679688 7.503906 1.683594 C 10.609375 1.683594 13.128906 3.953125 13.125 6.75 C 13.121094 9.542969 10.605469 11.804688 7.5 11.808594 Z M 3.125 6.75 L 4.375 6.75 C 4.378906 5.195312 5.773438 3.9375 7.5 3.933594 L 7.5 2.808594 C 5.085938 2.8125 3.128906 4.574219 3.125 6.75 Z M 3.125 6.75 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 19 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 0.703125 1.46875 L 2.71875 1.46875 L 5.585938 12.304688 C 5.675781 12.617188 5.953125 12.835938 6.265625 12.835938 L 15.089844 12.835938 C 15.367188 12.832031 15.617188 12.664062 15.734375 12.402344 L 18.941406 4.699219 C 19.035156 4.46875 19.015625 4.207031 18.882812 3.996094 C 18.753906 3.789062 18.535156 3.664062 18.296875 3.664062 L 8.550781 3.664062 C 8.160156 3.664062 7.84375 3.992188 7.84375 4.402344 C 7.84375 4.808594 8.160156 5.140625 8.550781 5.140625 L 17.222656 5.140625 L 14.621094 11.367188 L 6.792969 11.367188 L 3.925781 0.539062 C 3.84375 0.21875 3.5625 -0.00390625 3.246094 0 L 0.703125 0 C 0.3125 0 0 0.328125 0 0.734375 C 0 1.136719 0.3125 1.46875 0.703125 1.46875 Z M 5.601562 18 C 6.484375 18.003906 7.199219 17.257812 7.203125 16.339844 C 7.203125 15.417969 6.488281 14.671875 5.605469 14.671875 C 4.722656 14.667969 4.007812 15.414062 4.007812 16.335938 C 4.007812 17.253906 4.71875 17.996094 5.601562 18 Z M 15.558594 18 L 15.675781 18 C 16.570312 17.96875 17.277344 17.191406 17.261719 16.253906 C 17.246094 15.320312 16.515625 14.570312 15.617188 14.570312 C 14.71875 14.570312 13.984375 15.320312 13.96875 16.253906 C 13.953125 17.191406 14.660156 17.96875 15.558594 18 Z M 15.558594 18 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 19.992188 5.820312 C 19.917969 4.269531 19.316406 2.808594 18.308594 1.71875 C 17.3125 0.621094 15.957031 0.00390625 14.546875 0 C 12.445312 0 10.957031 1.78125 10.15625 2.738281 C 10.113281 2.800781 10.066406 2.855469 10.015625 2.910156 L 9.941406 2.820312 C 9.210938 1.898438 7.6875 0 5.449219 0 C 4.039062 0.00390625 2.6875 0.621094 1.6875 1.71875 C 0.683594 2.808594 0.0820312 4.269531 0.0078125 5.820312 C -0.0664062 7.367188 0.339844 8.898438 1.164062 10.160156 C 2.433594 11.921875 3.886719 13.515625 5.492188 14.910156 C 7.042969 16.320312 9.082031 18 10.007812 18 C 10.945312 18 12.976562 16.320312 14.519531 14.910156 C 16.121094 13.515625 17.566406 11.921875 18.835938 10.160156 C 19.648438 8.894531 20.058594 7.367188 19.992188 5.820312 Z M 17.832031 9.429688 C 16.648438 11.070312 15.296875 12.554688 13.800781 13.851562 C 11.617188 15.851562 10.320312 16.640625 10.011719 16.671875 C 9.699219 16.640625 8.402344 15.839844 6.203125 13.828125 C 4.707031 12.542969 3.351562 11.066406 2.167969 9.429688 C 1.496094 8.402344 1.15625 7.15625 1.210938 5.890625 C 1.324219 3.382812 3.171875 1.390625 5.453125 1.320312 C 7.144531 1.320312 8.375 2.859375 9.039062 3.691406 C 9.238281 4.089844 9.589844 4.367188 10 4.449219 C 10.4375 4.355469 10.816406 4.0625 11.046875 3.640625 C 11.769531 2.769531 12.976562 1.320312 14.546875 1.320312 C 16.828125 1.390625 18.675781 3.382812 18.789062 5.890625 C 18.847656 7.15625 18.511719 8.40625 17.832031 9.429688 Z M 17.832031 9.429688 '
                              />
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className='products-item__wrapper-box'>
                      <h4 className='products-item__title'>Wooden radio</h4>
                      <span className='products-item__price'>$29.00</span>
                    </div>
                  </div>
                  <div className='products-item'>
                    <div className='products-item__img-box'>
                      <span className='products-item__centr'>
                        <img
                          className='products-item__images'
                          src='/images/products/2.png'
                          alt='products img'
                        />
                      </span>
                      <div className='products-item__link-box'>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{
                                  stroke: 'none',
                                  fillRule: 'evenodd',
                                  fill: '$accent',
                                  fillOpacity: '1',
                                }}
                                d='M 19.449219 15.121094 L 14.863281 10.988281 C 14.179688 11.945312 13.273438 12.757812 12.210938 13.375 L 16.800781 17.503906 C 17.53125 18.164062 18.71875 18.164062 19.449219 17.503906 C 20.179688 16.847656 20.183594 15.777344 19.449219 15.121094 Z M 15 6.75 C 15 3.023438 11.640625 0 7.5 0 C 3.359375 0 0 3.023438 0 6.75 C 0 10.476562 3.359375 13.5 7.5 13.5 C 11.640625 13.5 15 10.476562 15 6.75 Z M 7.5 11.808594 C 4.394531 11.808594 1.875 9.539062 1.875 6.742188 C 1.875 3.949219 4.394531 1.679688 7.503906 1.683594 C 10.609375 1.683594 13.128906 3.953125 13.125 6.75 C 13.121094 9.542969 10.605469 11.804688 7.5 11.808594 Z M 3.125 6.75 L 4.375 6.75 C 4.378906 5.195312 5.773438 3.9375 7.5 3.933594 L 7.5 2.808594 C 5.085938 2.8125 3.128906 4.574219 3.125 6.75 Z M 3.125 6.75 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 19 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 0.703125 1.46875 L 2.71875 1.46875 L 5.585938 12.304688 C 5.675781 12.617188 5.953125 12.835938 6.265625 12.835938 L 15.089844 12.835938 C 15.367188 12.832031 15.617188 12.664062 15.734375 12.402344 L 18.941406 4.699219 C 19.035156 4.46875 19.015625 4.207031 18.882812 3.996094 C 18.753906 3.789062 18.535156 3.664062 18.296875 3.664062 L 8.550781 3.664062 C 8.160156 3.664062 7.84375 3.992188 7.84375 4.402344 C 7.84375 4.808594 8.160156 5.140625 8.550781 5.140625 L 17.222656 5.140625 L 14.621094 11.367188 L 6.792969 11.367188 L 3.925781 0.539062 C 3.84375 0.21875 3.5625 -0.00390625 3.246094 0 L 0.703125 0 C 0.3125 0 0 0.328125 0 0.734375 C 0 1.136719 0.3125 1.46875 0.703125 1.46875 Z M 5.601562 18 C 6.484375 18.003906 7.199219 17.257812 7.203125 16.339844 C 7.203125 15.417969 6.488281 14.671875 5.605469 14.671875 C 4.722656 14.667969 4.007812 15.414062 4.007812 16.335938 C 4.007812 17.253906 4.71875 17.996094 5.601562 18 Z M 15.558594 18 L 15.675781 18 C 16.570312 17.96875 17.277344 17.191406 17.261719 16.253906 C 17.246094 15.320312 16.515625 14.570312 15.617188 14.570312 C 14.71875 14.570312 13.984375 15.320312 13.96875 16.253906 C 13.953125 17.191406 14.660156 17.96875 15.558594 18 Z M 15.558594 18 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 19.992188 5.820312 C 19.917969 4.269531 19.316406 2.808594 18.308594 1.71875 C 17.3125 0.621094 15.957031 0.00390625 14.546875 0 C 12.445312 0 10.957031 1.78125 10.15625 2.738281 C 10.113281 2.800781 10.066406 2.855469 10.015625 2.910156 L 9.941406 2.820312 C 9.210938 1.898438 7.6875 0 5.449219 0 C 4.039062 0.00390625 2.6875 0.621094 1.6875 1.71875 C 0.683594 2.808594 0.0820312 4.269531 0.0078125 5.820312 C -0.0664062 7.367188 0.339844 8.898438 1.164062 10.160156 C 2.433594 11.921875 3.886719 13.515625 5.492188 14.910156 C 7.042969 16.320312 9.082031 18 10.007812 18 C 10.945312 18 12.976562 16.320312 14.519531 14.910156 C 16.121094 13.515625 17.566406 11.921875 18.835938 10.160156 C 19.648438 8.894531 20.058594 7.367188 19.992188 5.820312 Z M 17.832031 9.429688 C 16.648438 11.070312 15.296875 12.554688 13.800781 13.851562 C 11.617188 15.851562 10.320312 16.640625 10.011719 16.671875 C 9.699219 16.640625 8.402344 15.839844 6.203125 13.828125 C 4.707031 12.542969 3.351562 11.066406 2.167969 9.429688 C 1.496094 8.402344 1.15625 7.15625 1.210938 5.890625 C 1.324219 3.382812 3.171875 1.390625 5.453125 1.320312 C 7.144531 1.320312 8.375 2.859375 9.039062 3.691406 C 9.238281 4.089844 9.589844 4.367188 10 4.449219 C 10.4375 4.355469 10.816406 4.0625 11.046875 3.640625 C 11.769531 2.769531 12.976562 1.320312 14.546875 1.320312 C 16.828125 1.390625 18.675781 3.382812 18.789062 5.890625 C 18.847656 7.15625 18.511719 8.40625 17.832031 9.429688 Z M 17.832031 9.429688 '
                              />
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className='products-item__wrapper-box'>
                      <h4 className='products-item__title'>Wooden radio</h4>
                      <span className='products-item__price'>$29.00</span>
                    </div>
                  </div>
                  <div className='products-item'>
                    <div className='products-item__img-box'>
                      <span className='products-item__centr'>
                        <img
                          className='products-item__images'
                          src='/images/products/3.png'
                          alt='products img'
                        />
                      </span>
                      <div className='products-item__link-box'>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{
                                  stroke: 'none',
                                  fillRule: 'evenodd',
                                  fill: '$accent',
                                  fillOpacity: '1',
                                }}
                                d='M 19.449219 15.121094 L 14.863281 10.988281 C 14.179688 11.945312 13.273438 12.757812 12.210938 13.375 L 16.800781 17.503906 C 17.53125 18.164062 18.71875 18.164062 19.449219 17.503906 C 20.179688 16.847656 20.183594 15.777344 19.449219 15.121094 Z M 15 6.75 C 15 3.023438 11.640625 0 7.5 0 C 3.359375 0 0 3.023438 0 6.75 C 0 10.476562 3.359375 13.5 7.5 13.5 C 11.640625 13.5 15 10.476562 15 6.75 Z M 7.5 11.808594 C 4.394531 11.808594 1.875 9.539062 1.875 6.742188 C 1.875 3.949219 4.394531 1.679688 7.503906 1.683594 C 10.609375 1.683594 13.128906 3.953125 13.125 6.75 C 13.121094 9.542969 10.605469 11.804688 7.5 11.808594 Z M 3.125 6.75 L 4.375 6.75 C 4.378906 5.195312 5.773438 3.9375 7.5 3.933594 L 7.5 2.808594 C 5.085938 2.8125 3.128906 4.574219 3.125 6.75 Z M 3.125 6.75 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 19 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 0.703125 1.46875 L 2.71875 1.46875 L 5.585938 12.304688 C 5.675781 12.617188 5.953125 12.835938 6.265625 12.835938 L 15.089844 12.835938 C 15.367188 12.832031 15.617188 12.664062 15.734375 12.402344 L 18.941406 4.699219 C 19.035156 4.46875 19.015625 4.207031 18.882812 3.996094 C 18.753906 3.789062 18.535156 3.664062 18.296875 3.664062 L 8.550781 3.664062 C 8.160156 3.664062 7.84375 3.992188 7.84375 4.402344 C 7.84375 4.808594 8.160156 5.140625 8.550781 5.140625 L 17.222656 5.140625 L 14.621094 11.367188 L 6.792969 11.367188 L 3.925781 0.539062 C 3.84375 0.21875 3.5625 -0.00390625 3.246094 0 L 0.703125 0 C 0.3125 0 0 0.328125 0 0.734375 C 0 1.136719 0.3125 1.46875 0.703125 1.46875 Z M 5.601562 18 C 6.484375 18.003906 7.199219 17.257812 7.203125 16.339844 C 7.203125 15.417969 6.488281 14.671875 5.605469 14.671875 C 4.722656 14.667969 4.007812 15.414062 4.007812 16.335938 C 4.007812 17.253906 4.71875 17.996094 5.601562 18 Z M 15.558594 18 L 15.675781 18 C 16.570312 17.96875 17.277344 17.191406 17.261719 16.253906 C 17.246094 15.320312 16.515625 14.570312 15.617188 14.570312 C 14.71875 14.570312 13.984375 15.320312 13.96875 16.253906 C 13.953125 17.191406 14.660156 17.96875 15.558594 18 Z M 15.558594 18 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 19.992188 5.820312 C 19.917969 4.269531 19.316406 2.808594 18.308594 1.71875 C 17.3125 0.621094 15.957031 0.00390625 14.546875 0 C 12.445312 0 10.957031 1.78125 10.15625 2.738281 C 10.113281 2.800781 10.066406 2.855469 10.015625 2.910156 L 9.941406 2.820312 C 9.210938 1.898438 7.6875 0 5.449219 0 C 4.039062 0.00390625 2.6875 0.621094 1.6875 1.71875 C 0.683594 2.808594 0.0820312 4.269531 0.0078125 5.820312 C -0.0664062 7.367188 0.339844 8.898438 1.164062 10.160156 C 2.433594 11.921875 3.886719 13.515625 5.492188 14.910156 C 7.042969 16.320312 9.082031 18 10.007812 18 C 10.945312 18 12.976562 16.320312 14.519531 14.910156 C 16.121094 13.515625 17.566406 11.921875 18.835938 10.160156 C 19.648438 8.894531 20.058594 7.367188 19.992188 5.820312 Z M 17.832031 9.429688 C 16.648438 11.070312 15.296875 12.554688 13.800781 13.851562 C 11.617188 15.851562 10.320312 16.640625 10.011719 16.671875 C 9.699219 16.640625 8.402344 15.839844 6.203125 13.828125 C 4.707031 12.542969 3.351562 11.066406 2.167969 9.429688 C 1.496094 8.402344 1.15625 7.15625 1.210938 5.890625 C 1.324219 3.382812 3.171875 1.390625 5.453125 1.320312 C 7.144531 1.320312 8.375 2.859375 9.039062 3.691406 C 9.238281 4.089844 9.589844 4.367188 10 4.449219 C 10.4375 4.355469 10.816406 4.0625 11.046875 3.640625 C 11.769531 2.769531 12.976562 1.320312 14.546875 1.320312 C 16.828125 1.390625 18.675781 3.382812 18.789062 5.890625 C 18.847656 7.15625 18.511719 8.40625 17.832031 9.429688 Z M 17.832031 9.429688 '
                              />
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className='products-item__wrapper-box'>
                      <h4 className='products-item__title'>Wooden radio</h4>
                      <span className='products-item__price'>$29.00</span>
                    </div>
                  </div>
                  <div className='products-item'>
                    <div className='products-item__img-box'>
                      <span className='products-item__centr'>
                        <img
                          className='products-item__images'
                          src='/images/products/4.png'
                          alt='products img'
                        />
                      </span>
                      <div className='products-item__link-box'>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{
                                  stroke: 'none',
                                  fillRule: 'evenodd',
                                  fill: '$accent',
                                  fillOpacity: '1',
                                }}
                                d='M 19.449219 15.121094 L 14.863281 10.988281 C 14.179688 11.945312 13.273438 12.757812 12.210938 13.375 L 16.800781 17.503906 C 17.53125 18.164062 18.71875 18.164062 19.449219 17.503906 C 20.179688 16.847656 20.183594 15.777344 19.449219 15.121094 Z M 15 6.75 C 15 3.023438 11.640625 0 7.5 0 C 3.359375 0 0 3.023438 0 6.75 C 0 10.476562 3.359375 13.5 7.5 13.5 C 11.640625 13.5 15 10.476562 15 6.75 Z M 7.5 11.808594 C 4.394531 11.808594 1.875 9.539062 1.875 6.742188 C 1.875 3.949219 4.394531 1.679688 7.503906 1.683594 C 10.609375 1.683594 13.128906 3.953125 13.125 6.75 C 13.121094 9.542969 10.605469 11.804688 7.5 11.808594 Z M 3.125 6.75 L 4.375 6.75 C 4.378906 5.195312 5.773438 3.9375 7.5 3.933594 L 7.5 2.808594 C 5.085938 2.8125 3.128906 4.574219 3.125 6.75 Z M 3.125 6.75 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 19 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 0.703125 1.46875 L 2.71875 1.46875 L 5.585938 12.304688 C 5.675781 12.617188 5.953125 12.835938 6.265625 12.835938 L 15.089844 12.835938 C 15.367188 12.832031 15.617188 12.664062 15.734375 12.402344 L 18.941406 4.699219 C 19.035156 4.46875 19.015625 4.207031 18.882812 3.996094 C 18.753906 3.789062 18.535156 3.664062 18.296875 3.664062 L 8.550781 3.664062 C 8.160156 3.664062 7.84375 3.992188 7.84375 4.402344 C 7.84375 4.808594 8.160156 5.140625 8.550781 5.140625 L 17.222656 5.140625 L 14.621094 11.367188 L 6.792969 11.367188 L 3.925781 0.539062 C 3.84375 0.21875 3.5625 -0.00390625 3.246094 0 L 0.703125 0 C 0.3125 0 0 0.328125 0 0.734375 C 0 1.136719 0.3125 1.46875 0.703125 1.46875 Z M 5.601562 18 C 6.484375 18.003906 7.199219 17.257812 7.203125 16.339844 C 7.203125 15.417969 6.488281 14.671875 5.605469 14.671875 C 4.722656 14.667969 4.007812 15.414062 4.007812 16.335938 C 4.007812 17.253906 4.71875 17.996094 5.601562 18 Z M 15.558594 18 L 15.675781 18 C 16.570312 17.96875 17.277344 17.191406 17.261719 16.253906 C 17.246094 15.320312 16.515625 14.570312 15.617188 14.570312 C 14.71875 14.570312 13.984375 15.320312 13.96875 16.253906 C 13.953125 17.191406 14.660156 17.96875 15.558594 18 Z M 15.558594 18 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 19.992188 5.820312 C 19.917969 4.269531 19.316406 2.808594 18.308594 1.71875 C 17.3125 0.621094 15.957031 0.00390625 14.546875 0 C 12.445312 0 10.957031 1.78125 10.15625 2.738281 C 10.113281 2.800781 10.066406 2.855469 10.015625 2.910156 L 9.941406 2.820312 C 9.210938 1.898438 7.6875 0 5.449219 0 C 4.039062 0.00390625 2.6875 0.621094 1.6875 1.71875 C 0.683594 2.808594 0.0820312 4.269531 0.0078125 5.820312 C -0.0664062 7.367188 0.339844 8.898438 1.164062 10.160156 C 2.433594 11.921875 3.886719 13.515625 5.492188 14.910156 C 7.042969 16.320312 9.082031 18 10.007812 18 C 10.945312 18 12.976562 16.320312 14.519531 14.910156 C 16.121094 13.515625 17.566406 11.921875 18.835938 10.160156 C 19.648438 8.894531 20.058594 7.367188 19.992188 5.820312 Z M 17.832031 9.429688 C 16.648438 11.070312 15.296875 12.554688 13.800781 13.851562 C 11.617188 15.851562 10.320312 16.640625 10.011719 16.671875 C 9.699219 16.640625 8.402344 15.839844 6.203125 13.828125 C 4.707031 12.542969 3.351562 11.066406 2.167969 9.429688 C 1.496094 8.402344 1.15625 7.15625 1.210938 5.890625 C 1.324219 3.382812 3.171875 1.390625 5.453125 1.320312 C 7.144531 1.320312 8.375 2.859375 9.039062 3.691406 C 9.238281 4.089844 9.589844 4.367188 10 4.449219 C 10.4375 4.355469 10.816406 4.0625 11.046875 3.640625 C 11.769531 2.769531 12.976562 1.320312 14.546875 1.320312 C 16.828125 1.390625 18.675781 3.382812 18.789062 5.890625 C 18.847656 7.15625 18.511719 8.40625 17.832031 9.429688 Z M 17.832031 9.429688 '
                              />
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className='products-item__wrapper-box'>
                      <h4 className='products-item__title'>Wooden radio</h4>
                      <span className='products-item__price'>$29.00</span>
                    </div>
                  </div>
                </div>
                <div className='related__items' id='tabs-2'>
                  <div className='products-item'>
                    <div className='products-item__img-box'>
                      <span className='products-item__centr'>
                        <img
                          className='products-item__images'
                          src='/images/products/2.png'
                          alt='products img'
                        />
                      </span>
                      <div className='products-item__link-box'>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{
                                  stroke: 'none',
                                  fillRule: 'evenodd',
                                  fill: '$accent',
                                  fillOpacity: '1',
                                }}
                                d='M 19.449219 15.121094 L 14.863281 10.988281 C 14.179688 11.945312 13.273438 12.757812 12.210938 13.375 L 16.800781 17.503906 C 17.53125 18.164062 18.71875 18.164062 19.449219 17.503906 C 20.179688 16.847656 20.183594 15.777344 19.449219 15.121094 Z M 15 6.75 C 15 3.023438 11.640625 0 7.5 0 C 3.359375 0 0 3.023438 0 6.75 C 0 10.476562 3.359375 13.5 7.5 13.5 C 11.640625 13.5 15 10.476562 15 6.75 Z M 7.5 11.808594 C 4.394531 11.808594 1.875 9.539062 1.875 6.742188 C 1.875 3.949219 4.394531 1.679688 7.503906 1.683594 C 10.609375 1.683594 13.128906 3.953125 13.125 6.75 C 13.121094 9.542969 10.605469 11.804688 7.5 11.808594 Z M 3.125 6.75 L 4.375 6.75 C 4.378906 5.195312 5.773438 3.9375 7.5 3.933594 L 7.5 2.808594 C 5.085938 2.8125 3.128906 4.574219 3.125 6.75 Z M 3.125 6.75 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 19 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 0.703125 1.46875 L 2.71875 1.46875 L 5.585938 12.304688 C 5.675781 12.617188 5.953125 12.835938 6.265625 12.835938 L 15.089844 12.835938 C 15.367188 12.832031 15.617188 12.664062 15.734375 12.402344 L 18.941406 4.699219 C 19.035156 4.46875 19.015625 4.207031 18.882812 3.996094 C 18.753906 3.789062 18.535156 3.664062 18.296875 3.664062 L 8.550781 3.664062 C 8.160156 3.664062 7.84375 3.992188 7.84375 4.402344 C 7.84375 4.808594 8.160156 5.140625 8.550781 5.140625 L 17.222656 5.140625 L 14.621094 11.367188 L 6.792969 11.367188 L 3.925781 0.539062 C 3.84375 0.21875 3.5625 -0.00390625 3.246094 0 L 0.703125 0 C 0.3125 0 0 0.328125 0 0.734375 C 0 1.136719 0.3125 1.46875 0.703125 1.46875 Z M 5.601562 18 C 6.484375 18.003906 7.199219 17.257812 7.203125 16.339844 C 7.203125 15.417969 6.488281 14.671875 5.605469 14.671875 C 4.722656 14.667969 4.007812 15.414062 4.007812 16.335938 C 4.007812 17.253906 4.71875 17.996094 5.601562 18 Z M 15.558594 18 L 15.675781 18 C 16.570312 17.96875 17.277344 17.191406 17.261719 16.253906 C 17.246094 15.320312 16.515625 14.570312 15.617188 14.570312 C 14.71875 14.570312 13.984375 15.320312 13.96875 16.253906 C 13.953125 17.191406 14.660156 17.96875 15.558594 18 Z M 15.558594 18 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 19.992188 5.820312 C 19.917969 4.269531 19.316406 2.808594 18.308594 1.71875 C 17.3125 0.621094 15.957031 0.00390625 14.546875 0 C 12.445312 0 10.957031 1.78125 10.15625 2.738281 C 10.113281 2.800781 10.066406 2.855469 10.015625 2.910156 L 9.941406 2.820312 C 9.210938 1.898438 7.6875 0 5.449219 0 C 4.039062 0.00390625 2.6875 0.621094 1.6875 1.71875 C 0.683594 2.808594 0.0820312 4.269531 0.0078125 5.820312 C -0.0664062 7.367188 0.339844 8.898438 1.164062 10.160156 C 2.433594 11.921875 3.886719 13.515625 5.492188 14.910156 C 7.042969 16.320312 9.082031 18 10.007812 18 C 10.945312 18 12.976562 16.320312 14.519531 14.910156 C 16.121094 13.515625 17.566406 11.921875 18.835938 10.160156 C 19.648438 8.894531 20.058594 7.367188 19.992188 5.820312 Z M 17.832031 9.429688 C 16.648438 11.070312 15.296875 12.554688 13.800781 13.851562 C 11.617188 15.851562 10.320312 16.640625 10.011719 16.671875 C 9.699219 16.640625 8.402344 15.839844 6.203125 13.828125 C 4.707031 12.542969 3.351562 11.066406 2.167969 9.429688 C 1.496094 8.402344 1.15625 7.15625 1.210938 5.890625 C 1.324219 3.382812 3.171875 1.390625 5.453125 1.320312 C 7.144531 1.320312 8.375 2.859375 9.039062 3.691406 C 9.238281 4.089844 9.589844 4.367188 10 4.449219 C 10.4375 4.355469 10.816406 4.0625 11.046875 3.640625 C 11.769531 2.769531 12.976562 1.320312 14.546875 1.320312 C 16.828125 1.390625 18.675781 3.382812 18.789062 5.890625 C 18.847656 7.15625 18.511719 8.40625 17.832031 9.429688 Z M 17.832031 9.429688 '
                              />
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className='products-item__wrapper-box'>
                      <h4 className='products-item__title'>Wooden radio</h4>
                      <span className='products-item__price'>$29.00</span>
                    </div>
                  </div>
                  <div className='products-item'>
                    <div className='products-item__img-box'>
                      <span className='products-item__centr'>
                        <img
                          className='products-item__images'
                          src='/images/products/1.png'
                          alt='products img'
                        />
                      </span>
                      <div className='products-item__link-box'>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{
                                  stroke: 'none',
                                  fillRule: 'evenodd',
                                  fill: '$accent',
                                  fillOpacity: '1',
                                }}
                                d='M 19.449219 15.121094 L 14.863281 10.988281 C 14.179688 11.945312 13.273438 12.757812 12.210938 13.375 L 16.800781 17.503906 C 17.53125 18.164062 18.71875 18.164062 19.449219 17.503906 C 20.179688 16.847656 20.183594 15.777344 19.449219 15.121094 Z M 15 6.75 C 15 3.023438 11.640625 0 7.5 0 C 3.359375 0 0 3.023438 0 6.75 C 0 10.476562 3.359375 13.5 7.5 13.5 C 11.640625 13.5 15 10.476562 15 6.75 Z M 7.5 11.808594 C 4.394531 11.808594 1.875 9.539062 1.875 6.742188 C 1.875 3.949219 4.394531 1.679688 7.503906 1.683594 C 10.609375 1.683594 13.128906 3.953125 13.125 6.75 C 13.121094 9.542969 10.605469 11.804688 7.5 11.808594 Z M 3.125 6.75 L 4.375 6.75 C 4.378906 5.195312 5.773438 3.9375 7.5 3.933594 L 7.5 2.808594 C 5.085938 2.8125 3.128906 4.574219 3.125 6.75 Z M 3.125 6.75 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 19 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 0.703125 1.46875 L 2.71875 1.46875 L 5.585938 12.304688 C 5.675781 12.617188 5.953125 12.835938 6.265625 12.835938 L 15.089844 12.835938 C 15.367188 12.832031 15.617188 12.664062 15.734375 12.402344 L 18.941406 4.699219 C 19.035156 4.46875 19.015625 4.207031 18.882812 3.996094 C 18.753906 3.789062 18.535156 3.664062 18.296875 3.664062 L 8.550781 3.664062 C 8.160156 3.664062 7.84375 3.992188 7.84375 4.402344 C 7.84375 4.808594 8.160156 5.140625 8.550781 5.140625 L 17.222656 5.140625 L 14.621094 11.367188 L 6.792969 11.367188 L 3.925781 0.539062 C 3.84375 0.21875 3.5625 -0.00390625 3.246094 0 L 0.703125 0 C 0.3125 0 0 0.328125 0 0.734375 C 0 1.136719 0.3125 1.46875 0.703125 1.46875 Z M 5.601562 18 C 6.484375 18.003906 7.199219 17.257812 7.203125 16.339844 C 7.203125 15.417969 6.488281 14.671875 5.605469 14.671875 C 4.722656 14.667969 4.007812 15.414062 4.007812 16.335938 C 4.007812 17.253906 4.71875 17.996094 5.601562 18 Z M 15.558594 18 L 15.675781 18 C 16.570312 17.96875 17.277344 17.191406 17.261719 16.253906 C 17.246094 15.320312 16.515625 14.570312 15.617188 14.570312 C 14.71875 14.570312 13.984375 15.320312 13.96875 16.253906 C 13.953125 17.191406 14.660156 17.96875 15.558594 18 Z M 15.558594 18 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 19.992188 5.820312 C 19.917969 4.269531 19.316406 2.808594 18.308594 1.71875 C 17.3125 0.621094 15.957031 0.00390625 14.546875 0 C 12.445312 0 10.957031 1.78125 10.15625 2.738281 C 10.113281 2.800781 10.066406 2.855469 10.015625 2.910156 L 9.941406 2.820312 C 9.210938 1.898438 7.6875 0 5.449219 0 C 4.039062 0.00390625 2.6875 0.621094 1.6875 1.71875 C 0.683594 2.808594 0.0820312 4.269531 0.0078125 5.820312 C -0.0664062 7.367188 0.339844 8.898438 1.164062 10.160156 C 2.433594 11.921875 3.886719 13.515625 5.492188 14.910156 C 7.042969 16.320312 9.082031 18 10.007812 18 C 10.945312 18 12.976562 16.320312 14.519531 14.910156 C 16.121094 13.515625 17.566406 11.921875 18.835938 10.160156 C 19.648438 8.894531 20.058594 7.367188 19.992188 5.820312 Z M 17.832031 9.429688 C 16.648438 11.070312 15.296875 12.554688 13.800781 13.851562 C 11.617188 15.851562 10.320312 16.640625 10.011719 16.671875 C 9.699219 16.640625 8.402344 15.839844 6.203125 13.828125 C 4.707031 12.542969 3.351562 11.066406 2.167969 9.429688 C 1.496094 8.402344 1.15625 7.15625 1.210938 5.890625 C 1.324219 3.382812 3.171875 1.390625 5.453125 1.320312 C 7.144531 1.320312 8.375 2.859375 9.039062 3.691406 C 9.238281 4.089844 9.589844 4.367188 10 4.449219 C 10.4375 4.355469 10.816406 4.0625 11.046875 3.640625 C 11.769531 2.769531 12.976562 1.320312 14.546875 1.320312 C 16.828125 1.390625 18.675781 3.382812 18.789062 5.890625 C 18.847656 7.15625 18.511719 8.40625 17.832031 9.429688 Z M 17.832031 9.429688 '
                              />
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className='products-item__wrapper-box'>
                      <h4 className='products-item__title'>Wooden radio</h4>
                      <span className='products-item__price'>$29.00</span>
                    </div>
                  </div>
                  <div className='products-item'>
                    <div className='products-item__img-box'>
                      <span className='products-item__centr'>
                        <img
                          className='products-item__images'
                          src='/images/products/4.png'
                          alt='products img'
                        />
                      </span>
                      <div className='products-item__link-box'>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{
                                  stroke: 'none',
                                  fillRule: 'evenodd',
                                  fill: '$accent',
                                  fillOpacity: '1',
                                }}
                                d='M 19.449219 15.121094 L 14.863281 10.988281 C 14.179688 11.945312 13.273438 12.757812 12.210938 13.375 L 16.800781 17.503906 C 17.53125 18.164062 18.71875 18.164062 19.449219 17.503906 C 20.179688 16.847656 20.183594 15.777344 19.449219 15.121094 Z M 15 6.75 C 15 3.023438 11.640625 0 7.5 0 C 3.359375 0 0 3.023438 0 6.75 C 0 10.476562 3.359375 13.5 7.5 13.5 C 11.640625 13.5 15 10.476562 15 6.75 Z M 7.5 11.808594 C 4.394531 11.808594 1.875 9.539062 1.875 6.742188 C 1.875 3.949219 4.394531 1.679688 7.503906 1.683594 C 10.609375 1.683594 13.128906 3.953125 13.125 6.75 C 13.121094 9.542969 10.605469 11.804688 7.5 11.808594 Z M 3.125 6.75 L 4.375 6.75 C 4.378906 5.195312 5.773438 3.9375 7.5 3.933594 L 7.5 2.808594 C 5.085938 2.8125 3.128906 4.574219 3.125 6.75 Z M 3.125 6.75 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 19 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 0.703125 1.46875 L 2.71875 1.46875 L 5.585938 12.304688 C 5.675781 12.617188 5.953125 12.835938 6.265625 12.835938 L 15.089844 12.835938 C 15.367188 12.832031 15.617188 12.664062 15.734375 12.402344 L 18.941406 4.699219 C 19.035156 4.46875 19.015625 4.207031 18.882812 3.996094 C 18.753906 3.789062 18.535156 3.664062 18.296875 3.664062 L 8.550781 3.664062 C 8.160156 3.664062 7.84375 3.992188 7.84375 4.402344 C 7.84375 4.808594 8.160156 5.140625 8.550781 5.140625 L 17.222656 5.140625 L 14.621094 11.367188 L 6.792969 11.367188 L 3.925781 0.539062 C 3.84375 0.21875 3.5625 -0.00390625 3.246094 0 L 0.703125 0 C 0.3125 0 0 0.328125 0 0.734375 C 0 1.136719 0.3125 1.46875 0.703125 1.46875 Z M 5.601562 18 C 6.484375 18.003906 7.199219 17.257812 7.203125 16.339844 C 7.203125 15.417969 6.488281 14.671875 5.605469 14.671875 C 4.722656 14.667969 4.007812 15.414062 4.007812 16.335938 C 4.007812 17.253906 4.71875 17.996094 5.601562 18 Z M 15.558594 18 L 15.675781 18 C 16.570312 17.96875 17.277344 17.191406 17.261719 16.253906 C 17.246094 15.320312 16.515625 14.570312 15.617188 14.570312 C 14.71875 14.570312 13.984375 15.320312 13.96875 16.253906 C 13.953125 17.191406 14.660156 17.96875 15.558594 18 Z M 15.558594 18 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 19.992188 5.820312 C 19.917969 4.269531 19.316406 2.808594 18.308594 1.71875 C 17.3125 0.621094 15.957031 0.00390625 14.546875 0 C 12.445312 0 10.957031 1.78125 10.15625 2.738281 C 10.113281 2.800781 10.066406 2.855469 10.015625 2.910156 L 9.941406 2.820312 C 9.210938 1.898438 7.6875 0 5.449219 0 C 4.039062 0.00390625 2.6875 0.621094 1.6875 1.71875 C 0.683594 2.808594 0.0820312 4.269531 0.0078125 5.820312 C -0.0664062 7.367188 0.339844 8.898438 1.164062 10.160156 C 2.433594 11.921875 3.886719 13.515625 5.492188 14.910156 C 7.042969 16.320312 9.082031 18 10.007812 18 C 10.945312 18 12.976562 16.320312 14.519531 14.910156 C 16.121094 13.515625 17.566406 11.921875 18.835938 10.160156 C 19.648438 8.894531 20.058594 7.367188 19.992188 5.820312 Z M 17.832031 9.429688 C 16.648438 11.070312 15.296875 12.554688 13.800781 13.851562 C 11.617188 15.851562 10.320312 16.640625 10.011719 16.671875 C 9.699219 16.640625 8.402344 15.839844 6.203125 13.828125 C 4.707031 12.542969 3.351562 11.066406 2.167969 9.429688 C 1.496094 8.402344 1.15625 7.15625 1.210938 5.890625 C 1.324219 3.382812 3.171875 1.390625 5.453125 1.320312 C 7.144531 1.320312 8.375 2.859375 9.039062 3.691406 C 9.238281 4.089844 9.589844 4.367188 10 4.449219 C 10.4375 4.355469 10.816406 4.0625 11.046875 3.640625 C 11.769531 2.769531 12.976562 1.320312 14.546875 1.320312 C 16.828125 1.390625 18.675781 3.382812 18.789062 5.890625 C 18.847656 7.15625 18.511719 8.40625 17.832031 9.429688 Z M 17.832031 9.429688 '
                              />
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className='products-item__wrapper-box'>
                      <h4 className='products-item__title'>Wooden radio</h4>
                      <span className='products-item__price'>$29.00</span>
                    </div>
                  </div>
                  <div className='products-item'>
                    <div className='products-item__img-box'>
                      <span className='products-item__centr'>
                        <img
                          className='products-item__images'
                          src='/images/products/3.png'
                          alt='products img'
                        />
                      </span>
                      <div className='products-item__link-box'>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{
                                  stroke: 'none',
                                  fillRule: 'evenodd',
                                  fill: '$accent',
                                  fillOpacity: '1',
                                }}
                                d='M 19.449219 15.121094 L 14.863281 10.988281 C 14.179688 11.945312 13.273438 12.757812 12.210938 13.375 L 16.800781 17.503906 C 17.53125 18.164062 18.71875 18.164062 19.449219 17.503906 C 20.179688 16.847656 20.183594 15.777344 19.449219 15.121094 Z M 15 6.75 C 15 3.023438 11.640625 0 7.5 0 C 3.359375 0 0 3.023438 0 6.75 C 0 10.476562 3.359375 13.5 7.5 13.5 C 11.640625 13.5 15 10.476562 15 6.75 Z M 7.5 11.808594 C 4.394531 11.808594 1.875 9.539062 1.875 6.742188 C 1.875 3.949219 4.394531 1.679688 7.503906 1.683594 C 10.609375 1.683594 13.128906 3.953125 13.125 6.75 C 13.121094 9.542969 10.605469 11.804688 7.5 11.808594 Z M 3.125 6.75 L 4.375 6.75 C 4.378906 5.195312 5.773438 3.9375 7.5 3.933594 L 7.5 2.808594 C 5.085938 2.8125 3.128906 4.574219 3.125 6.75 Z M 3.125 6.75 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 19 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 0.703125 1.46875 L 2.71875 1.46875 L 5.585938 12.304688 C 5.675781 12.617188 5.953125 12.835938 6.265625 12.835938 L 15.089844 12.835938 C 15.367188 12.832031 15.617188 12.664062 15.734375 12.402344 L 18.941406 4.699219 C 19.035156 4.46875 19.015625 4.207031 18.882812 3.996094 C 18.753906 3.789062 18.535156 3.664062 18.296875 3.664062 L 8.550781 3.664062 C 8.160156 3.664062 7.84375 3.992188 7.84375 4.402344 C 7.84375 4.808594 8.160156 5.140625 8.550781 5.140625 L 17.222656 5.140625 L 14.621094 11.367188 L 6.792969 11.367188 L 3.925781 0.539062 C 3.84375 0.21875 3.5625 -0.00390625 3.246094 0 L 0.703125 0 C 0.3125 0 0 0.328125 0 0.734375 C 0 1.136719 0.3125 1.46875 0.703125 1.46875 Z M 5.601562 18 C 6.484375 18.003906 7.199219 17.257812 7.203125 16.339844 C 7.203125 15.417969 6.488281 14.671875 5.605469 14.671875 C 4.722656 14.667969 4.007812 15.414062 4.007812 16.335938 C 4.007812 17.253906 4.71875 17.996094 5.601562 18 Z M 15.558594 18 L 15.675781 18 C 16.570312 17.96875 17.277344 17.191406 17.261719 16.253906 C 17.246094 15.320312 16.515625 14.570312 15.617188 14.570312 C 14.71875 14.570312 13.984375 15.320312 13.96875 16.253906 C 13.953125 17.191406 14.660156 17.96875 15.558594 18 Z M 15.558594 18 '
                              />
                            </g>
                          </svg>
                        </a>
                        <a className='products-item__link' href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20px'
                            height='18px'
                            viewBox='0 0 20 18'
                            version='1.1'>
                            <g id='surface1'>
                              <path
                                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                                d='M 19.992188 5.820312 C 19.917969 4.269531 19.316406 2.808594 18.308594 1.71875 C 17.3125 0.621094 15.957031 0.00390625 14.546875 0 C 12.445312 0 10.957031 1.78125 10.15625 2.738281 C 10.113281 2.800781 10.066406 2.855469 10.015625 2.910156 L 9.941406 2.820312 C 9.210938 1.898438 7.6875 0 5.449219 0 C 4.039062 0.00390625 2.6875 0.621094 1.6875 1.71875 C 0.683594 2.808594 0.0820312 4.269531 0.0078125 5.820312 C -0.0664062 7.367188 0.339844 8.898438 1.164062 10.160156 C 2.433594 11.921875 3.886719 13.515625 5.492188 14.910156 C 7.042969 16.320312 9.082031 18 10.007812 18 C 10.945312 18 12.976562 16.320312 14.519531 14.910156 C 16.121094 13.515625 17.566406 11.921875 18.835938 10.160156 C 19.648438 8.894531 20.058594 7.367188 19.992188 5.820312 Z M 17.832031 9.429688 C 16.648438 11.070312 15.296875 12.554688 13.800781 13.851562 C 11.617188 15.851562 10.320312 16.640625 10.011719 16.671875 C 9.699219 16.640625 8.402344 15.839844 6.203125 13.828125 C 4.707031 12.542969 3.351562 11.066406 2.167969 9.429688 C 1.496094 8.402344 1.15625 7.15625 1.210938 5.890625 C 1.324219 3.382812 3.171875 1.390625 5.453125 1.320312 C 7.144531 1.320312 8.375 2.859375 9.039062 3.691406 C 9.238281 4.089844 9.589844 4.367188 10 4.449219 C 10.4375 4.355469 10.816406 4.0625 11.046875 3.640625 C 11.769531 2.769531 12.976562 1.320312 14.546875 1.320312 C 16.828125 1.390625 18.675781 3.382812 18.789062 5.890625 C 18.847656 7.15625 18.511719 8.40625 17.832031 9.429688 Z M 17.832031 9.429688 '
                              />
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className='products-item__wrapper-box'>
                      <h4 className='products-item__title'>Wooden radio</h4>
                      <span className='products-item__price'>$29.00</span>
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
      ) : (
        ''
      )}
    </>
  );
};

export default ProductDetailsBlock;
