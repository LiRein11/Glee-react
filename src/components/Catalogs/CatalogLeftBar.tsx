import React, { FC, useEffect } from 'react';
// import Typography from '@material-ui/Typography';

import { Slider } from '@mui/material';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices, fetchDevicesAll, getBrands, getTypes } from '../../http/deviceAPI';
import { AppDispatch, RootState } from '../../store';
import { fetchOneBasket } from '../../store/slices/cartSlice';
import {
  fetchBrandsThunk,
  fetchTypesThunk,
  setCurrentPrice,
  toggleActiveIndexArrBrands,
  toggleActiveIndexArrTypes,
} from '../../store/slices/filterSlice';
import { IBrand, IType } from '../products.interface';
import CatalogContent from './CatalogContent';

const CatalogLeftBar: FC = () => {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<AppDispatch>();

  const [brandId, setBrandId] = React.useState(filter.activeIndexBrands);
  const [typeId, setTypeId] = React.useState(filter.activeIndexTypes);

  const { data: types, isLoading: loadingTypes } = useQuery('fetchTypes', getTypes);
  const { data: brands, isLoading: loadingBrands } = useQuery('fetchBrands', getBrands);
  const { data: allDevices } = useQuery('fetchAllDevices', fetchDevicesAll);

  function handleChanges(event: Event, newValue: any) {
    dispatch(setCurrentPrice(newValue));
  }

  useEffect(() => {
    dispatch(fetchOneBasket());
    dispatch(fetchTypesThunk());
    dispatch(fetchBrandsThunk());
  }, []);

  const toggleTypes = async (index: number | null) => {
    dispatch(toggleActiveIndexArrTypes(index));
    setTypeId(index);
  };

  const toggleBrands = (index: number | null) => {
    dispatch(toggleActiveIndexArrBrands(index));
    setBrandId(index);
  };

  return (
    <>
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
              : types?.map((el: IType, index: number) => (
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
          <Slider
            value={[filter.currentPriceMin, filter.currentPriceMax]}
            onChange={handleChanges}
            valueLabelDisplay='auto'
            max={500}
          />
          {/* The selected range is {range[0]} - {range[1]} */}
          <div className='filter-price__box'>
            <span>
              {filter.currentPriceMin}$<span className='filter-price-from'></span>
            </span>
            <span>
              {filter.currentPriceMax}$<span className='filter-price-to'></span>
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
                <span className='filter-brand__num'>({allDevices?.rows.length})</span>
              </div>
            </div>
            {loadingBrands
              ? ''
              : brands?.map((el: IBrand, index: number) => (
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
                <img src='/images/catalog/products/1.jpg' alt='products img' />
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
                <img src='/images/catalog/products/2.jpg' alt='products img' />
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
                <img src='/images/catalog/products/3.jpg' alt='products img' />
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
    </>
  );
};

export default CatalogLeftBar;
