import React, { useEffect } from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import CatalogContent from '../CatalogContent';
import CatalogLeftBar from '../CatalogLeftBar';
// import Typography from '@material-ui/Typography';

import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices, fetchDevicesAll, getBrands, getTypes } from '../../../http/deviceAPI';
import { AppDispatch, RootState } from '../../../store';
import { fetchOneBasket } from '../../../store/slices/cartSlice';
import {
  fetchBrandsThunk,
  fetchTypesThunk,
  setCurrentPrice,
  toggleActiveIndexArrBrands,
  toggleActiveIndexArrTypes,
} from '../../../store/slices/filterSlice';

import { IType } from '../../products.interface';
const CatalogBlockTwo = () => {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<AppDispatch>();

  const [brandId, setBrandId] = React.useState(filter.activeIndexBrands);
  const [typeId, setTypeId] = React.useState(filter.activeIndexTypes);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(4);
  const [pageNumbers, setPageNumbers] = React.useState<number[]>([]);

  const { data: types, isLoading: loadingTypes } = useQuery<IType[]>('fetchTypes', getTypes);
  const { data: brands, isLoading: loadingBrands } = useQuery('fetchBrands', getBrands);
  const { data: allDevices } = useQuery('fetchAllDevices', fetchDevicesAll);
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

  function handleChanges(event: Event, newValue: any) {
    dispatch(setCurrentPrice(newValue));
  }

  useEffect(() => {
    dispatch(fetchOneBasket());
    dispatch(fetchTypesThunk());
    dispatch(fetchBrandsThunk());
  }, []);

  // useEffect(() => {
  //   const lastPage = Math.ceil(devices !== undefined ? devices.count / limit : 0);
  //   const newPageNumbers: number[] = [];

  //   for (let i: number = 1; i <= lastPage; i++) {
  //     newPageNumbers.push(i);
  //   }
  //   setPageNumbers(newPageNumbers);
  // }, [devices, limit, filter]);

  const toggleTypes = async (index: number | null) => {
    dispatch(toggleActiveIndexArrTypes(index));
    setTypeId(index);
  };

  const toggleBrands = (index: number | null) => {
    dispatch(toggleActiveIndexArrBrands(index));
    setBrandId(index);
  };

  const onClickPagination = (index: number) => {
    setPage(index + 1);
  };

  return (
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

        <section className='catalog'>
          <div className='container'>
            <div className='catalog__inner'>
              <CatalogLeftBar />
              <div className='catalog__content'>
                <CatalogContent devices={devices} limit={4} />
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

export default CatalogBlockTwo;
