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
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';

const App: FC = () => {

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/productDetails/:id' element={<ProductDetails />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogDetails/:id' element={<BlogDetails />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/catalogOne' element={<CatalogOne />} />
          <Route path='/catalogTwo' element={<CatalogTwo />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Login />} />
          <Route path='/account' element={<Login />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
