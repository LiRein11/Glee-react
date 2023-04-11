import React, { useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { fetchProducts, getTypes } from '../../http/deviceAPI';
import { useQuery } from 'react-query';
import ProductItem from '../ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneBasket } from '../../store/slices/cartSlice';
import { AppDispatch, RootState } from '../../store';
import { fetchTypesThunk, toggleActiveIndexArr } from '../../store/slices/filterSlice';

const CatalogBlockOne = () => {
  const { filter } = useSelector((state: RootState) => state);
  const { data, isLoading } = useQuery('fetchTypes', getTypes);
  const { data: devices } = useQuery('products', fetchProducts);
  const dispatch = useDispatch<AppDispatch>();
  console.log(filter.activeIndexArr);
  const [checkedArr, setCheckedArr] = React.useState<boolean[]>([]);

  useEffect(() => {
    dispatch(fetchOneBasket());
    dispatch(fetchTypesThunk());
    setCheckedArr(new Array(data?.length).fill(false));
  }, [dispatch, data]);
  console.log(checkedArr);
  const handleCheck = (index) => {
    const newCheckedArr = [...checkedArr];
    newCheckedArr[index] = !newCheckedArr[index];
    setCheckedArr(newCheckedArr);
  };

  const toggleTypes = (index: number) => {
    dispatch(toggleActiveIndexArr(index));
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
                    {isLoading
                      ? ''
                      : checkedArr
                      ? data.map((el: any, index: number) => (
                          <label className='filter-category__label' key={el.id}>
                            <input
                              className='filter-category__input'
                              type='checkbox'
                              value={el.name || ''}
                              name={el.name}
                              defaultChecked={checkedArr[index]}
                              onChange={() => handleCheck(index)}
                              onClick={() => toggleTypes(index + 1)}
                            />
                            <div className='filter-category__checkbox'>
                              <span>{el.name}</span>
                              <span>{'>'}</span>
                            </div>
                          </label>
                        ))
                      : ''}
                  </form>
                </div>
                <div className='filter__item filter-price'>
                  <h4 className='filter__title'>
                    <span>PRICE</span>
                  </h4>
                  <form className='filter-price__form' action='#'>
                    <input
                      className='filter-price__input'
                      type='text'
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
                    <label className='filter-brand__label'>
                      <input className='filter-brand__input' type='checkbox' defaultChecked />
                      <div className='filter-brand__checkbox'>
                        <span>RFL</span>
                        <span className='filter-brand__num'>(10)</span>
                      </div>
                    </label>
                    <label className='filter-brand__label'>
                      <input className='filter-brand__input' type='checkbox' />
                      <div className='filter-brand__checkbox'>
                        <span>Brother</span>
                        <span className='filter-brand__num'>(21)</span>
                      </div>
                    </label>
                    <label className='filter-brand__label'>
                      <input className='filter-brand__input' type='checkbox' />
                      <div className='filter-brand__checkbox'>
                        <span>Regal</span>
                        <span className='filter-brand__num'>(3)</span>
                      </div>
                    </label>
                    <label className='filter-brand__label'>
                      <input className='filter-brand__input' type='checkbox' />
                      <div className='filter-brand__checkbox'>
                        <span>Nadia</span>
                        <span className='filter-brand__num'>(14)</span>
                      </div>
                    </label>
                    <label className='filter-brand__label'>
                      <input className='filter-brand__input' type='checkbox' />
                      <div className='filter-brand__checkbox'>
                        <span>Otobi</span>
                        <span className='filter-brand__num'>(6)</span>
                      </div>
                    </label>
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
                  {filter.activeIndexArr.length === 0
                    ? devices?.map((el) => <ProductItem device={el} key={el.id} />)
                    : devices?.map((el) =>
                        filter.activeIndexArr.includes(el.typeId) ? (
                          <ProductItem device={el} key={el.id} />
                        ) : (
                          ''
                        ),
                      )}
                </div>
                <div className='pagination'>
                  <a className='pagination__prev pagination__arrow' href='#'>
                    Previous
                  </a>
                  <ul className='pagination__list'>
                    <li className='pagination__item'>
                      <a className='pagination__link pagination__link--active' href='#'>
                        1
                      </a>
                    </li>
                    <li className='pagination__item'>
                      <a className='pagination__link' href='#'>
                        2
                      </a>
                    </li>
                    <li className='pagination__item'>
                      <a className='pagination__link' href='#'>
                        3
                      </a>
                    </li>
                  </ul>
                  <a className='pagination__next pagination__arrow' href='#'>
                    Next
                  </a>
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
