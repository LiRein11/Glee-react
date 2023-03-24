import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { useSelector, useDispatch } from 'react-redux';
import { fetchOneBasket } from '../../store/slices/cartSlice';
import { AppDispatch, RootState } from '../../store';
import ProductItem from '../ProductItem';

const BlockCart = () => {
  
  const {cart} = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  console.log(cart)
  
  React.useEffect(() => {
    dispatch(fetchOneBasket());
  }, []);
  return (
    <>
      <Header />
      {/* {cart.items.map((obj)=>{
        <ProductItem item={obj} key={obj.id} />
      })} */}
      <Footer />
    </>
  );
};

export default BlockCart;
