import React, { FC } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { IBasketDevice } from './products.interface';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

import { fetchOneBasket, setDeleteDevice } from '../store/slices/cartSlice';
import { addDeviceToBasket, getBrands } from '../http/deviceAPI';
import ButtonFavorites from './Favorites/ButtonFavorites';
import { useQuery } from 'react-query';

const ProductItem: FC<IBasketDevice> = (device) => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const { data: brands, isLoading: loadingBrands } = useQuery('fetchBrands', getBrands);

  const pathCart = location.pathname === '/cart';

  const addToCart = async (id: number) => {
    await addDeviceToBasket(id);
    dispatch(fetchOneBasket());
  };

  const clickDeleteDeviceFromBasket = async (device: IBasketDevice) => {
    await dispatch(setDeleteDevice(device));
  };

  const navigate = useNavigate();

  return (
    <div className='products-item'>
      <div className='products-item__img-box'>
        <div className='products-item__brand'>
          <p>
            {loadingBrands || !brands
              ? ''
              : brands[device.device.brandId - 1].name}
          </p>
        </div>
        {device.device.img === 'c533adb7-596c-4fb9-9ba1-ad2793ee757e.jpg' ? (
          <span className='products-item__centrr'>
            <img
              className='products-item__images'
              src={process.env.REACT_APP_API_URL + device.device.img}
              alt='products img'
            />
          </span>
        ) : (
          <span className='products-item__centr'>
            <img
              className='products-item__images'
              src={process.env.REACT_APP_API_URL + device.device.img}
              alt='products img'
            />
          </span>
        )}

        {!pathCart ? (
          <div className='products-item__link-box'>
            <button className='products-item__link' onClick={() => navigate('#')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='18px'
                viewBox='0 0 20 18'
                version='1.1'>
                <g id='surface1'>
                  <path d='M 19.449219 15.121094 L 14.863281 10.988281 C 14.179688 11.945312 13.273438 12.757812 12.210938 13.375 L 16.800781 17.503906 C 17.53125 18.164062 18.71875 18.164062 19.449219 17.503906 C 20.179688 16.847656 20.183594 15.777344 19.449219 15.121094 Z M 15 6.75 C 15 3.023438 11.640625 0 7.5 0 C 3.359375 0 0 3.023438 0 6.75 C 0 10.476562 3.359375 13.5 7.5 13.5 C 11.640625 13.5 15 10.476562 15 6.75 Z M 7.5 11.808594 C 4.394531 11.808594 1.875 9.539062 1.875 6.742188 C 1.875 3.949219 4.394531 1.679688 7.503906 1.683594 C 10.609375 1.683594 13.128906 3.953125 13.125 6.75 C 13.121094 9.542969 10.605469 11.804688 7.5 11.808594 Z M 3.125 6.75 L 4.375 6.75 C 4.378906 5.195312 5.773438 3.9375 7.5 3.933594 L 7.5 2.808594 C 5.085938 2.8125 3.128906 4.574219 3.125 6.75 Z M 3.125 6.75 ' />
                </g>
              </svg>
            </button>
            <button onClick={() => addToCart(device.device.id)} className='products-item__link'>
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
            </button>
            <ButtonFavorites deviceBasket={device} />
          </div>
        ) : (
          <div className='products-item__link-box'>
            <button
              className='products-item__link'
              onClick={() => clickDeleteDeviceFromBasket(device)}>
              -
            </button>
            <button className='products-item__link' onClick={() => addToCart(device.device.id)}>
              +
            </button>
          </div>
        )}
      </div>
      <div className='products-item__wrapper-box'>
        <h4 className='products-item__title'>{device.device.name}</h4>
        <span className='products-item__price'>${device.device.price}.00</span>
      </div>
    </div>
  );
};

export default ProductItem;
