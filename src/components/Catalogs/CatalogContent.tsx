import React, { FC } from 'react';
import { IProducts } from '../products.interface';
import ProductItem from '../ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import ProductItemLine from '../ProductItemLine';
import Pagination from '../Pagination';

const CatalogContent: FC<{ devices: IProducts | undefined; limit: number }> = ({
  devices,
  limit,
}) => {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<AppDispatch>();

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
        <Pagination devices={devices} limit={limit} />
      )}
    </div>
  );
};

export default CatalogContent;
