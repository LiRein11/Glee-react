import React, { useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { NavLink } from 'react-router-dom';

import { fetchDevices, fetchDevicesAll, getBrands, getTypes } from '../../http/deviceAPI';
import { useQuery } from 'react-query';
import ProductItem from '../ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneBasket } from '../../store/slices/cartSlice';
import { AppDispatch, RootState } from '../../store';
import {
  fetchBrandsThunk,
  fetchTypesThunk,
  toggleActiveIndexArrBrands,
  toggleActiveIndexArrTypes,
} from '../../store/slices/filterSlice';

const CatalogBlockOne = () => {
  const { filter } = useSelector((state: RootState) => state);
  const { data: types, isLoading: loadingTypes } = useQuery('fetchTypes', getTypes);
  const { data: brands, isLoading: loadingBrands } = useQuery('fetchBrands', getBrands);
  const { data: allDevices } = useQuery('fetchAllDevices', fetchDevicesAll);
  const [brandId, setBrandId] = React.useState(filter.activeIndexBrands);
  const [typeId, setTypeId] = React.useState(filter.activeIndexTypes);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(9);
  const pageNumbers: any = [];
  const dispatch = useDispatch<AppDispatch>();
  const { data: devices, refetch } = useQuery(['devices', brandId, typeId, page, limit], () =>
    fetchDevices(brandId, typeId, page, limit),
  );

  useEffect(() => {
    dispatch(fetchOneBasket());
    dispatch(fetchTypesThunk());
    dispatch(fetchBrandsThunk());
  }, []);

  useEffect(() => {
    refetch();
  }, [typeId, brandId]);

  const toggleTypes = async (index: number | null) => {
    dispatch(toggleActiveIndexArrTypes(index));
    setTypeId(index);
  };

  const toggleBrands = (index: number | null) => {
    dispatch(toggleActiveIndexArrBrands(index));
    setBrandId(index);
  };

  for (
    let i: number = 1;
    i <= Math.ceil(allDevices !== undefined ? allDevices.length / limit : 0);
    i++
  ) {
    pageNumbers.push(i);
  }

  const onClickPagination = (index) => {
    setPage(index + 1);
  };

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
              <button className='catalog__filter-btn'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20px'
                  height='20px'
                  viewBox='0 0 20 20'
                  version='1.1'>
                  <g id='surface1'>
                    <path
                      style={{
                        stroke: 'none',
                        fillRule: 'nonzero',
                        fill: 'rgb(100%,100%,100%)',
                        fillOpacity: '1',
                      }}
                      d='M 0.152344 2.144531 C 0.410156 1.597656 0.957031 1.25 1.5625 1.25 L 18.4375 1.25 C 19.042969 1.25 19.589844 1.597656 19.847656 2.144531 C 20.109375 2.6875 20.027344 3.335938 19.613281 3.800781 L 12.5 12.535156 L 12.5 17.5 C 12.5 17.972656 12.234375 18.40625 11.808594 18.617188 C 11.386719 18.828125 10.878906 18.785156 10.5 18.5 L 8 16.625 C 7.683594 16.390625 7.5 16.019531 7.5 15.625 L 7.5 12.535156 L 0.351562 3.800781 C -0.0273438 3.335938 -0.109375 2.6875 0.152344 2.144531 Z M 0.152344 2.144531 '
                    />
                  </g>
                </svg>
              </button>
              <div className='catalog__filters filter'>
                <div className='filter__item filter-category'>
                  <h4 className='filter__title'>
                    <span>CATEGORY</span>
                  </h4>
                  <form className='filter-category__form' action='#'>
                    <div className='filter-category__label'>
                      <div
                        onClick={() => toggleTypes(null)}
                        className={
                          filter.activeIndexTypes === null
                            ? 'filter-category__checkbox--active'
                            : 'filter-category__checkbox'
                        }>
                        <span>All</span>
                        <span>{'>'}</span>
                      </div>
                    </div>
                    {loadingTypes
                      ? ''
                      : types?.map((el: any, index: number) => (
                          <div className='filter-category__label' key={el.id}>
                            <div
                              onClick={() => toggleTypes(index + 1)}
                              className={
                                index + 1 === filter.activeIndexTypes
                                  ? 'filter-category__checkbox--active'
                                  : 'filter-category__checkbox'
                              }>
                              <span>{el.name}</span>
                              <span>{'>'}</span>
                            </div>
                          </div>
                        ))}
                  </form>
                </div>
                <div className='filter__item filter-price'>
                  <h4 className='filter__title'>
                    <span>PRICE</span>
                  </h4>
                  <form className='filter-price__form' action='#'>
                    <input
                      className='filter-price__input'
                      type='range'
                      data-min='0'
                      data-max='800'
                      data-from='100'
                      data-to='500'
                    />
                  </form>
                  <div className='filter-price__box'>
                    <span>
                      $<span className='filter-price-from'></span>
                    </span>
                    <span>
                      $<span className='filter-price-to'></span>
                    </span>
                  </div>
                </div>
                <div className='filter__item filter-brand'>
                  <h4 className='filter__title'>
                    <span>BRAND</span>
                  </h4>
                  <form className='filter-brand__form' action='#'>
                    <div className='filter-category__label'>
                      <div
                        onClick={() => toggleBrands(null)}
                        className={
                          filter.activeIndexBrands === null
                            ? 'filter-category__checkbox--active'
                            : 'filter-category__checkbox'
                        }>
                        <span>All</span>
                        <span className='filter-brand__num'>({allDevices?.length})</span>
                      </div>
                    </div>
                    {loadingBrands
                      ? ''
                      : brands?.map((el: any, index: number) => (
                          <div className='filter-category__label' key={el.id}>
                            <div
                              onClick={() => toggleBrands(index + 1)}
                              className={
                                index + 1 === filter.activeIndexBrands
                                  ? 'filter-category__checkbox--active'
                                  : 'filter-category__checkbox'
                              }>
                              <span>{el.name}</span>
                              <span className='filter-brand__num'>({el.devicesCount})</span>
                            </div>
                          </div>
                        ))}
                  </form>
                </div>
                <div className='filter__item filter-products'>
                  <h4 className='filter__title'>
                    <span>RECENT PRODUCTS</span>
                  </h4>
                  <div className='filter-products__content'>
                    <div className='filter-products__item'>
                      <a className='filter-products__img' href='#'>
                        <img src='images/catalog/products/1.jpg' alt='products img' />
                      </a>
                      <div className='filter-products__box'>
                        <a className='filter-products__title' href='#'>
                          Pendant lamp
                        </a>
                        <div className='star' data-rateyo-rating='4'></div>
                        <span className='filter-products__price'>$23</span>
                      </div>
                    </div>
                    <div className='filter-products__item'>
                      <a className='filter-products__img' href='#'>
                        <img src='images/catalog/products/2.jpg' alt='products img' />
                      </a>
                      <div className='filter-products__box'>
                        <a className='filter-products__title' href='#'>
                          Pendant lamp
                        </a>
                        <div className='star' data-rateyo-rating='4'></div>
                        <span className='filter-products__price'>$23</span>
                      </div>
                    </div>
                    <div className='filter-products__item'>
                      <a className='filter-products__img' href='#'>
                        <img src='images/catalog/products/3.jpg' alt='products img' />
                      </a>
                      <div className='filter-products__box'>
                        <a className='filter-products__title' href='#'>
                          Pendant lamp
                        </a>
                        <div className='star' data-rateyo-rating='4'></div>
                        <span className='filter-products__price'>$23</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='catalog-content'>
                <div className='catalog-content__items'>
                  {devices?.map((el) => (
                    <ProductItem device={el} key={el.id} />
                  ))}
                </div>

                <div className='pagination'>
                  <button
                    className='pagination__prev pagination__arrow'
                    onClick={page === 1 ? () => setPage(page) : () => setPage(page - 1)}
                    disabled={page === 1 ? true : false}>
                    Previous
                  </button>
                  <ul className='pagination__list'>
                    {pageNumbers.map((el, i) => (
                      <li className='pagination__item'>
                        <div
                          className={
                            i === page - 1
                              ? 'pagination__link pagination__link--active'
                              : 'pagination__link'
                          }
                          onClick={() => onClickPagination(i)}>
                          {el}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button
                    className='pagination__next pagination__arrow'
                    onClick={
                      page === pageNumbers.length ? () => setPage(page) : () => setPage(page + 1)
                    }
                    disabled={page === pageNumbers.length ? true : false}>
                    Next
                  </button>
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
                  src='images/partners/1.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='images/partners/2.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='images/partners/3.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='images/partners/4.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='images/partners/5.png'
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
