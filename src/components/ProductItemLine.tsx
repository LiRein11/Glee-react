import React, { FC } from 'react';
import { IDataToken, IProductItem } from './products.interface';
import { addDeviceToBasket, addRating, checkRating, fetchOneDevice } from '../http/deviceAPI';
import { fetchOneBasket } from '../store/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import ButtonFavorites from './Favorites/ButtonFavorites';
import jwt_decode from 'jwt-decode';
import RatingStars from './Ratings';
import { useMutation, useQuery } from 'react-query';

const ProductItemLine: FC<{ device: IProductItem }> = ({ device }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [resRate, setResRate] = React.useState(device.rating);
  // console.log(device);
  const [isAccessRating, setIsAccessRating] = React.useState(false);
  const token: string | null = localStorage.getItem('token');

  React.useEffect(() => {
    if (token) {
      checkRating({ deviceId: device.id }).then((res) => setIsAccessRating(res.allow));
    }
    fetchOneDevice(device.id);
  }, [resRate]);

  const addToCart = async (id: number) => {
    await addDeviceToBasket(id);
    dispatch(fetchOneBasket());
    alert('Товар добавлен в корзину!');
  };

  const handleClick = async (nextValue: number) => {
    try {
      await addRating({ rate: nextValue, deviceId: device.id });

      setResRate(nextValue);
      // Здесь выполняется проверка рейтинга после обновления
      checkRating({ deviceId: device.id }).then((res) => setIsAccessRating(res.allow));
      alert('Спасибо за оценку');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='catalog-content__item'>
      <a className='catalog-content__item-imglink' href='#'>
        <img src={process.env.REACT_APP_API_URL + device.img} alt='' />
      </a>
      <div className='catalog-content__item-box'>
        <a className='catalog-content__item-titlelink' href='#'>
          {device.name}
        </a>

        <RatingStars
          clickRating={handleClick}
          ratingVal={device.rating}
          isAuth={token ? true : false}
          isAccessRating={isAccessRating}
        />

        <span className='catalog-content__item-price'>{device.price}$</span>
        <p className='catalog-content__item-text'>{device.description}</p>
        <button
          onClick={() => addToCart(device.id)}
          className='catalog-content__item-buttons catalog-content__item-buttons--cartone'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20px'
            height='18px'
            viewBox='0 0 19 18'
            version='1.1'>
            <g id='surface1'>
              <path
                style={{ stroke: 'none', fillRule: 'evenodd', fillOpacity: '1' }}
                d='M 0.703125 1.46875 L 2.71875 1.46875 L 5.585938 12.304688 C 5.675781 12.617188 5.953125 12.835938 6.265625 12.835938 L 15.089844 12.835938 C 15.367188 12.832031 15.617188 12.664062 15.734375 12.402344 L 18.941406 4.699219 C 19.035156 4.46875 19.015625 4.207031 18.882812 3.996094 C 18.753906 3.789062 18.535156 3.664062 18.296875 3.664062 L 8.550781 3.664062 C 8.160156 3.664062 7.84375 3.992188 7.84375 4.402344 C 7.84375 4.808594 8.160156 5.140625 8.550781 5.140625 L 17.222656 5.140625 L 14.621094 11.367188 L 6.792969 11.367188 L 3.925781 0.539062 C 3.84375 0.21875 3.5625 -0.00390625 3.246094 0 L 0.703125 0 C 0.3125 0 0 0.328125 0 0.734375 C 0 1.136719 0.3125 1.46875 0.703125 1.46875 Z M 5.601562 18 C 6.484375 18.003906 7.199219 17.257812 7.203125 16.339844 C 7.203125 15.417969 6.488281 14.671875 5.605469 14.671875 C 4.722656 14.667969 4.007812 15.414062 4.007812 16.335938 C 4.007812 17.253906 4.71875 17.996094 5.601562 18 Z M 15.558594 18 L 15.675781 18 C 16.570312 17.96875 17.277344 17.191406 17.261719 16.253906 C 17.246094 15.320312 16.515625 14.570312 15.617188 14.570312 C 14.71875 14.570312 13.984375 15.320312 13.96875 16.253906 C 13.953125 17.191406 14.660156 17.96875 15.558594 18 Z M 15.558594 18 '
              />
            </g>
          </svg>
        </button>
        <ButtonFavorites deviceBasket={{ device }} />
        {/* <button className='catalog-content__item-buttons catalog-content__item-buttons--heart'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20px'
            height='18px'
            viewBox='0 0 20 18'
            version='1.1'>
            <g id='surface1'>
              <path
                style={{ stroke: 'none', fillRule: 'evenodd', fillOpacity: '1' }}
                d='M 19.992188 5.820312 C 19.917969 4.269531 19.316406 2.808594 18.308594 1.71875 C 17.3125 0.621094 15.957031 0.00390625 14.546875 0 C 12.445312 0 10.957031 1.78125 10.15625 2.738281 C 10.113281 2.800781 10.066406 2.855469 10.015625 2.910156 L 9.941406 2.820312 C 9.210938 1.898438 7.6875 0 5.449219 0 C 4.039062 0.00390625 2.6875 0.621094 1.6875 1.71875 C 0.683594 2.808594 0.0820312 4.269531 0.0078125 5.820312 C -0.0664062 7.367188 0.339844 8.898438 1.164062 10.160156 C 2.433594 11.921875 3.886719 13.515625 5.492188 14.910156 C 7.042969 16.320312 9.082031 18 10.007812 18 C 10.945312 18 12.976562 16.320312 14.519531 14.910156 C 16.121094 13.515625 17.566406 11.921875 18.835938 10.160156 C 19.648438 8.894531 20.058594 7.367188 19.992188 5.820312 Z M 17.832031 9.429688 C 16.648438 11.070312 15.296875 12.554688 13.800781 13.851562 C 11.617188 15.851562 10.320312 16.640625 10.011719 16.671875 C 9.699219 16.640625 8.402344 15.839844 6.203125 13.828125 C 4.707031 12.542969 3.351562 11.066406 2.167969 9.429688 C 1.496094 8.402344 1.15625 7.15625 1.210938 5.890625 C 1.324219 3.382812 3.171875 1.390625 5.453125 1.320312 C 7.144531 1.320312 8.375 2.859375 9.039062 3.691406 C 9.238281 4.089844 9.589844 4.367188 10 4.449219 C 10.4375 4.355469 10.816406 4.0625 11.046875 3.640625 C 11.769531 2.769531 12.976562 1.320312 14.546875 1.320312 C 16.828125 1.390625 18.675781 3.382812 18.789062 5.890625 C 18.847656 7.15625 18.511719 8.40625 17.832031 9.429688 Z M 17.832031 9.429688 '
              />
            </g>
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default ProductItemLine;
