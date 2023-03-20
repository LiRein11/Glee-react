import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProductItem } from './products.interface';
// import { IDesignItem } from './products.interface';

const DesignItem: FC<{ item: IProductItem }> = ({item}) => {
  return (
    <>
      <Link
        className='design__item'
        to='#'
        style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL + item.img})` }}>
        <h4 className='design__item-title'>{item.name}</h4>
        <span className='design__item-text'>{item.text}</span>
      </Link>
    </>
  );
};

export default DesignItem;
