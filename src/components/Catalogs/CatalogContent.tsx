import React, { FC } from 'react';
import { IProducts } from '../products.interface';
import ProductItem from '../ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { setPage } from '../../store/slices/filterSlice';
import ProductItemLine from '../ProductItemLine';

const CatalogContent: FC<{ devices: IProducts | undefined; limit: number }> = ({
  devices,
  limit,
}) => {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<AppDispatch>();

  const [pageNumbers, setPageNumbers] = React.useState<number[]>([]);
  console.log(limit);
  React.useEffect(() => {
    const lastPage = Math.ceil(devices !== undefined ? devices.count / limit : 0);
    const newPageNumbers: number[] = [];

    for (let i: number = 1; i <= lastPage; i++) {
      newPageNumbers.push(i);
    }
    setPageNumbers(newPageNumbers);
  }, [devices, filter]);

  const onClickPagination = (index: number) => {
    dispatch(setPage(index + 1));
  };

  return (
    <div className='catalog-content'>
      <div className={limit === 9 ? 'catalog-content__items' : 'catalog-content__items-line'}>
        {limit === 9
          ? devices?.rows.map((el) =>
              el.price > filter.currentPriceMin && el.price < filter.currentPriceMax ? (
                <ProductItem device={el} key={el.id} />
              ) : (
                ''
              ),
            )
          : devices?.rows.map((el) =>
              el.price > filter.currentPriceMin && el.price < filter.currentPriceMax ? (
                <ProductItemLine device={el} key={el.id} />
              ) : (
                ''
              ),
            )}
      </div>

      {devices?.count === 0 ? (
        <div>Нет товаров</div>
      ) : (
        <div className={limit === 9 ?'pagination' : 'pagination pagination-line'}>
          <button
            className='pagination__prev pagination__arrow'
            onClick={
              filter.page === 1
                ? () => dispatch(setPage(filter.page))
                : () => dispatch(setPage(filter.page - 1))
            }
            disabled={filter.page === 1 ? true : false}>
            Previous
          </button>
          <ul className='pagination__list'>
            {pageNumbers.map((el, i) => (
              <li className='pagination__item'>
                <div
                  className={
                    i === filter.page - 1
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
              filter.page === pageNumbers.length
                ? () => dispatch(setPage(filter.page))
                : () => dispatch(setPage(filter.page + 1))
            }
            disabled={filter.page === pageNumbers.length ? true : false}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CatalogContent;
