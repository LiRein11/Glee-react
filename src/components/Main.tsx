import React, { useState } from 'react';
import ProductItem from './ProductItem';
import Slider from './Slider';

import axios from 'axios';
import { useQuery } from 'react-query';
import DesignItem from './DesignItem';
import { IDataToken } from './products.interface';
// import { addProduct } from '../store/slices/cartSlice';
import { AppDispatch, RootState } from '../store';

import { useSelector, useDispatch } from 'react-redux';
import {
  setActiveIndex,
  setFilterCategory,
  setActiveDesignIndex,
  setFilterDesignCategory,
  fetchTypesThunk,
} from '../store/slices/filterSlice';
import { fetchOneBasket } from '../store/slices/cartSlice';
import { useFavorites } from '../hooks/useFavorites';
import { fetchDevices, fetchDevicesAll } from '../http/deviceAPI';
import jwt_decode from 'jwt-decode';
import { NavLink, useNavigate } from 'react-router-dom';
import Posts from './Posts';

const Main = () => {
  const { filter, cart } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const token: string | null = localStorage.getItem('token');
  const limit: number = 14;
  const navigate = useNavigate();

  const { data, isError } = useQuery(['devices', null, null, 1, limit], () =>
    fetchDevices(null, null, 1, limit),
  );
  const { data: allDevices } = useQuery('fetchAllDevices', fetchDevicesAll);

  const { favoritesDevices, isLoading, refetch } = useFavorites();
  console.log(data);
  React.useEffect(() => {
    dispatch(fetchOneBasket());
  }, [favoritesDevices]);

  React.useEffect(() => {
    dispatch(fetchTypesThunk());

    if (token) {
      const data: IDataToken = jwt_decode(token);
      const dateNow = new Date();
      if (dateNow.getTime() > data.exp * 1000) {
        localStorage.removeItem('token');
      }
      console.log(data, dateNow.getTime());
      return;
    }
  }, []);

  const onClickFilter = (index: number) => {
    dispatch(setActiveIndex(index));
    dispatch(setFilterCategory(index));
  };

  const onClickDesignFilter = (index: number) => {
    dispatch(setActiveDesignIndex(index));
    dispatch(setFilterDesignCategory(index));
  };

  return (
    <main className='main'>
      <section className='top-slider'>
        <Slider />
        <div className='guarantees'>
          <div className='guarantees__items'>
            <div className='guarantees__item'>
              <img
                className='guarantees__item-img'
                src='/images/slider/guarantee-1.png'
                alt='guarantee img'
              />
              <div className='guarantees__item-box'>
                <h6 className='guarantees__item-title'>Support 24/7.</h6>
                <p className='guarantees__item-text'>
                  Contact us 24 hours a day,
                  <br />7 days a week.
                </p>
              </div>
            </div>
            <div className='guarantees__item'>
              <img
                className='guarantees__item-img'
                src='/images/slider/guarantee-2.png'
                alt='guarantee img'
              />
              <div className='guarantees__item-box'>
                <h6 className='guarantees__item-title'>Delivery.</h6>
                <p className='guarantees__item-text'>Free shipping on all US order.</p>
              </div>
            </div>
            <div className='guarantees__item guarantees__item-none'>
              <img
                className='guarantees__item-img'
                src='/images/slider/guarantee-3.png'
                alt='guarantee img'
              />
              <div className='guarantees__item-box'>
                <h6 className='guarantees__item-title'>100% Payment secure.</h6>
                <p className='guarantees__item-text'>
                  We ensure secure payment
                  <br />
                  with PEV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='products'>
        <div className='container' data-ref='products'>
          <h3 className='products__title'>Products of the week</h3>
          <ul className='products__filter-li'>
            <li
              onClick={() => onClickFilter(0)}
              className={filter.activeIndex === 0 ? 'products__li--active' : 'products__li'}>
              All
            </li>
            {filter.filterCategories.map((value: any, i: number) => (
              <li
                onClick={() => onClickFilter(i + 1)}
                className={filter.activeIndex === i + 1 ? 'products__li--active' : 'products__li'}
                key={value.id}>
                {value.name}
              </li>
            ))}
          </ul>
          <div className='products__items'>
            {data
              ? filter.filterCategory === 0
                ? data.rows.map((obj) => (
                    <>{obj.text !== 'Classic' ? <ProductItem device={obj} key={obj.id} /> : ''}</>
                  ))
                : data.rows.map((obj) =>
                    obj.typeId === filter.filterCategory && obj.text !== 'Classic' ? (
                      <ProductItem device={obj} key={obj.id} />
                    ) : (
                      ''
                    ),
                  )
              : isError}
          </div>
        </div>
      </section>
      <section className='categories'>
        <div className='container-large'>
          <div className='categories-info'>
            <div className='categories-info__item categories-info__item-one'>
              <img
                className='categories-info__item-images categories-info__item-images--one'
                src='/images/lamp-one.png'
                alt='lamp'
              />
              <h4 className='categories-info__item-title'>Mirum Notare Tellus</h4>
              <p className='categories-info__item-text'>
                LEDCornBulb Lamp 5W 7W 10W 12W 15W E26 <br /> E27LEDCornLight
              </p>
              <button className='categories-info__item-btn'>View More</button>
            </div>
            <div className='categories-info__item categories-info__item-two'>
              <img
                className='categories-info__item-images categories-info__item-images--two'
                src='/images/lamp-two.png'
                alt='lamp'
              />
              <h4 className='categories-info__item-title'>
                Malesuada Tempor <br />
                Euismod
              </h4>
              <p className='categories-info__item-text'>
                50W 8000lm Compact Size for HID StreetLightReplacementLEDCornLight
              </p>
              <button className='categories-info__item-btn'>View More</button>
            </div>
          </div>
        </div>
      </section>
      <section className='design'>
        <div className='container' data-ref='design'>
          <h3 className='design__title'>New Design</h3>
          <ul className='products__filter-li'>
            <li
              onClick={() => onClickDesignFilter(0)}
              className={filter.activeDesignIndex === 0 ? 'products__li--active' : 'products__li'}>
              All
            </li>
            {filter.filterDesignCategories.map((value: any, i: number) => (
              <li
                onClick={() => onClickDesignFilter(i + 1)}
                className={
                  filter.activeDesignIndex === i + 1 ? 'products__li--active' : 'products__li'
                }
                key={value.id}>
                {value.name}
              </li>
            ))}
          </ul>
          <div className='design__items'>
            {allDevices
              ? filter.filterDesignCategory === 0
                ? allDevices?.rows.map((obj) => (
                    <>{obj.text === 'Classic' ? <DesignItem item={obj} key={obj.id} /> : ''}</>
                  ))
                : allDevices?.rows.map((obj) =>
                    obj.typeId === filter.filterDesignCategory && obj.text === 'Classic' ? (
                      <DesignItem item={obj} key={obj.id} />
                    ) : (
                      ''
                    ),
                  )
              : ''}
          </div>
        </div>
      </section>
      <section className='video'>
        <div className='video__inner' style={{ backgroundImage: "url('images/video-bg.png')" }}>
          <a
            className='video__play'
            data-fancybox
            href='https://www.youtube.com/watch?v=AeMQq7OhbO8&ab_channel=%D0%94%D0%B8%D0%B2%D0%B0%D0%BD%D1%8B%D0%B4%D0%BB%D1%8F%D0%BD%D0%B8%D1%80%D0%B2%D0%B0%D0%BD%D1%8B-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2No1'>
            <img className='video__play-btn' src='/images/icons/play.svg' alt='play btn' />
          </a>
        </div>
      </section>

      <Posts />
    </main>
  );
};

export default Main;
