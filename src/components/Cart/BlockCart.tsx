import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { useSelector, useDispatch } from 'react-redux';
import { fetchOneBasket } from '../../store/slices/cartSlice';
import { AppDispatch, RootState } from '../../store';
import ProductItem from '../ProductItem';
import { IBasketDevice, IProductItem } from '../products.interface';

const BlockCart = () => {
  const { cart, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  console.log(cart);

  React.useEffect(() => {
    dispatch(fetchOneBasket());
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <h2>${totalPrice}</h2>
        <div className='products__items'>
          {cart?.items.map((obj) => (
            <ProductItem device={obj.device} key={obj.id} id={obj.id}/>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlockCart;
