import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../Footer';
import Header from '../../Header';

import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices } from '../../../http/deviceAPI';
import { AppDispatch, RootState } from '../../../store';
import { fetchOneBasket } from '../../../store/slices/cartSlice';
import { fetchBrandsThunk, fetchTypesThunk } from '../../../store/slices/filterSlice';

import CatalogContent from '../CatalogContent';
import CatalogLeftBar from '../CatalogLeftBar';

const CatalogBlockOne = () => {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<AppDispatch>();

  const [limit, setLimit] = React.useState(9);
  const [pageNumbers, setPageNumbers] = React.useState<number[]>([]);

  const { data: devices, refetch } = useQuery(
    [
      'devices',
      filter.activeIndexBrands,
      filter.activeIndexTypes,
      filter.page,
      limit,
      filter.currentPriceMin,
      filter.currentPriceMax,
    ],
    () =>
      fetchDevices(
        filter.activeIndexBrands,
        filter.activeIndexTypes,
        filter.page,
        limit,
        filter.currentPriceMin,
        filter.currentPriceMax,
      ),
  );

  useEffect(() => {
    dispatch(fetchOneBasket());
    dispatch(fetchTypesThunk());
    dispatch(fetchBrandsThunk());
  }, []);

  return (
    <>
      <Header />
      <main className='main'>
        <section className='top'>
          <div className='top-container'>
            <h2 className='top__title title'>CatalogOne</h2>
            <div className='breadcrumbs'>
              <ul className='breadcrumbs__list'>
                <li className='breadcrumbs__item'>
                  <NavLink className='breadcrumbs__link' to='/'>
                    Home
                  </NavLink>
                </li>
                <li className='breadcrumbs__item'>
                  <a className='breadcrumbs__link' href='#'>
                    CatalogOne
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='catalog'>
          <div className='container'>
            <div className='catalog__inner'>
              <CatalogLeftBar />
              <CatalogContent devices={devices} limit={9} />
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

export default CatalogBlockOne;
