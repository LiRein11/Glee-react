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

export const CountContext = React.createContext();

function App() {
  const [countCart, setCountCart] = React.useState(0);
  const [countHeart, setCountHeart] = React.useState(0);

  const onClickCountPlusСart = () => {
    setCountCart(countCart + 1);
    alert('Товар добавлен в корзину!');
  };

  const onClickCountPlusHeart = () => {
    setCountHeart(countHeart + 1);
    alert('Товар добавлен в понравившиеся!');
  };

  return (
    <>
      <CountContext.Provider
        value={{
          countCart,
          setCountCart,
          countHeart,
          setCountHeart,
          onClickCountPlusСart,
          onClickCountPlusHeart,
        }}>
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
      </CountContext.Provider>
    </>
  );
}

export default App;
