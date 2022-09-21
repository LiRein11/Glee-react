import React from 'react';
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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/catalogOne" element={<CatalogOne />} />
        <Route path="/catalogTwo" element={<CatalogTwo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  );
}

export default App;
