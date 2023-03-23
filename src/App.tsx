import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import CatalogOne from './pages/CatalogOne';
import CatalogTwo from './pages/CatalogTwo';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Terms from './pages/Terms';
import './scss/index.scss';
import './scss/style.scss';

import { Provider } from 'react-redux';

import { store } from './store';

export interface IS {
  countCart: number;
  countHeart: number;
  setCountCart: (countCart: number) => void;
  setCountHeart: (countHeart: number) => void;
  onClickCountPlusCart: () => void;
  onClickCountPlusHeart: () => void;
}

export const CountContext = React.createContext<Partial<IS>>({});

const App: FC = () => {
  const [countCart, setCountCart] = React.useState(0);
  const [countHeart, setCountHeart] = React.useState(0);

  const onClickCountPlusCart = () => {
    setCountCart(countCart + 1);
    alert('Товар добавлен в корзину!');
  };

  const onClickCountPlusHeart = () => {
    setCountHeart(countHeart + 1);
    alert('Товар добавлен в понравившиеся!');
  };

  return (
    <>
      <Provider store={store}>
        <CountContext.Provider
          value={{
            countCart,
            setCountCart,
            countHeart,
            setCountHeart,
            onClickCountPlusCart,
            onClickCountPlusHeart,
          }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blogDetails' element={<BlogDetails />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/catalogOne' element={<CatalogOne />} />
            <Route path='/catalogTwo' element={<CatalogTwo />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Login />} />
            <Route path='/account' element={<Login />} />
            <Route path='/productDetails' element={<ProductDetails />} />
            <Route path='/terms' element={<Terms />} />
          </Routes>
        </CountContext.Provider>
      </Provider>
    </>
  );
};

export default App;
