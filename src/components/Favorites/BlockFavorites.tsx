import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useFavorites } from '../../hooks/useFavorites';
import { getFavorites } from '../../http/deviceAPI';
import ProductItem from '../ProductItem';
import { IProductItem, IProducts } from '../products.interface';

const BlockFavorites = () => {
  const { favoritesDevices, isLoading } = useFavorites();

  return (
    <>
      <Header />
      <div className='container'>
        <div className='products__items'>
          {isLoading
            ? ''
            : favoritesDevices?.map((obj: IProductItem) => (
                <ProductItem device={obj} key={obj.id} id={obj.id} />
              ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlockFavorites;
