import React from 'react';
import { Link } from 'react-router-dom';

const DesignItem = ({products}) => {
  return (
    <>
      <Link
        className="design__item"
        href="#"
        style={{ backgroundImage: `url(${products.imageUrl})` }}>
        <h4 className="design__item-title">{products.title}</h4>
        <span className="design__item-text">{products.text}</span>
      </Link>
    </>
  );
};

export default DesignItem;