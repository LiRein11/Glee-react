import React from 'react';
import ProductItem from './ProductItem';
import Slider from './Slider';

import axios from 'axios';
import { useQuery } from 'react-query';
import DesignItem from './DesignItem';
import { IProducts } from './products.interface';

async function fetchProducts() {
  const { data } = await axios.get<IProducts>('http://localhost:5000/api/device');

  return data.rows;
}

const Main = () => {
  const { data, isLoading, isError } = useQuery('products', fetchProducts);
  console.log(data);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeDesignIndex, setActiveDesignIndex] = React.useState(0);
  const [filterCategory, setFilterCategory] = React.useState(0);
  const [filterDesignCategory, setFilterDesignCategory] = React.useState(0);

  const filterCategories = ['All', 'Furnitures', 'Lighting', 'Chairs', 'Decor'];
  const filterDesignCategories = ['All', 'Furnitures', 'Lighting', 'Chairs', 'Decor'];

  const onClickFilter = (index: number) => {
    setActiveIndex(index);
    setFilterCategory(index);
  };

  const onClickDesignFilter = (index: number) => {
    setActiveDesignIndex(index);
    setFilterDesignCategory(index);
  };

  return (
    <main className='main'>
      <section className='top-slider'>
        {/* <div className="container-large"> */}
        <Slider />
        {/* <div className="top-slider__item">
              <div className="top-slider__content">
                <h2 className="top-slider__title">SMART AND TRENDY</h2>
                <p className="top-slider__text">
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                </p>
                <a className="top-slider__btn" href="#">
                  Shop Now
                </a>
              </div>
              <img className="top-slider__img" src="images/slider/1.png" alt="slider img" />
            </div>
            <div className="top-slider__item">
              <div className="top-slider__content">
                <h3 className="top-slider__title">SMART AND TRENDY</h3>
                <p className="top-slider__text">
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 444444444444
                </p>
                <a className="top-slider__btn" href="#">
                  Shop Now
                </a>
              </div>
              <img className="top-slider__img" src="images/slider/1.png" alt="slider img" />
            </div>
            <div className="top-slider__item">
              <div className="top-slider__content">
                <h3 className="top-slider__title">SMART AND TRENDY</h3>
                <p className="top-slider__text">
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                </p>
                <a className="top-slider__btn" href="#">
                  Shop Now
                </a>
              </div>
              <img className="top-slider__img" src="images/slider/1.png" alt="slider img" />
            </div> */}
        {/* </Slider> */}
        {/* </div> */}
        <div className='guarantees'>
          <div className='guarantees__items'>
            <div className='guarantees__item'>
              <img
                className='guarantees__item-img'
                src='images/slider/guarantee-1.png'
                alt='guarantee img'
              />
              <div className='guarantees__item-box'>
                <h6 className='guarantees__item-title'>Support 24/7.</h6>
                <p className='guarantees__item-text'>
                  Contact us 24 hours a day,
                  <br />7 days a week.
                </p>
              </div>
            </div>
            <div className='guarantees__item'>
              <img
                className='guarantees__item-img'
                src='images/slider/guarantee-2.png'
                alt='guarantee img'
              />
              <div className='guarantees__item-box'>
                <h6 className='guarantees__item-title'>Delivery.</h6>
                <p className='guarantees__item-text'>Free shipping on all US order.</p>
              </div>
            </div>
            <div className='guarantees__item guarantees__item-none'>
              <img
                className='guarantees__item-img'
                src='images/slider/guarantee-3.png'
                alt='guarantee img'
              />
              <div className='guarantees__item-box'>
                <h6 className='guarantees__item-title'>100% Payment secure.</h6>
                <p className='guarantees__item-text'>
                  We ensure secure payment
                  <br />
                  with PEV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='products'>
        <div className='container' data-ref='products'>
          <h3 className='products__title'>Products of the week</h3>
          <ul className='products__filter-li'>
            {filterCategories.map((value, i) => (
              <li
                onClick={() => onClickFilter(i)}
                className={activeIndex === i ? 'products__li--active' : 'products__li'}
                key={i}>
                {value}
              </li>
            ))}
          </ul>
          <div className='products__items'>
            {data
              ? filterCategory === 0
                ? data.map((obj) => (
                    <>{obj.text !== 'Classic' ? <ProductItem item={obj} key={obj.id} /> : ''}</>
                  ))
                : data.map((obj) =>
                    obj.typeId === filterCategory && obj.text !== 'Classic' ? (
                      <ProductItem item={obj} key={obj.id} />
                    ) : (
                      ''
                    ),
                  )
              : isError}
          </div>
        </div>
      </section>
      <section className='categories'>
        <div className='container-large'>
          <div className='categories-info'>
            <div className='categories-info__item categories-info__item-one'>
              <img
                className='categories-info__item-images categories-info__item-images--one'
                src='images/lamp-one.png'
                alt='lamp'
              />
              <h4 className='categories-info__item-title'>Mirum Notare Tellus</h4>
              <p className='categories-info__item-text'>
                LEDCornBulb Lamp 5W 7W 10W 12W 15W E26 <br /> E27LEDCornLight
              </p>
              <button className='categories-info__item-btn'>View More</button>
            </div>
            <div className='categories-info__item categories-info__item-two'>
              <img
                className='categories-info__item-images categories-info__item-images--two'
                src='images/lamp-two.png'
                alt='lamp'
              />
              <h4 className='categories-info__item-title'>
                Malesuada Tempor <br />
                Euismod
              </h4>
              <p className='categories-info__item-text'>
                50W 8000lm Compact Size for HID StreetLightReplacementLEDCornLight
              </p>
              <button className='categories-info__item-btn'>View More</button>
            </div>
          </div>
        </div>
      </section>
      <section className='design'>
        <div className='container' data-ref='design'>
          <h3 className='design__title'>New Design</h3>
          <ul className='products__filter-li'>
            {filterDesignCategories.map((value, i) => (
              <li
                onClick={() => onClickDesignFilter(i)}
                className={activeDesignIndex === i ? 'products__li--active' : 'products__li'}
                key={i}>
                {value}
              </li>
            ))}
          </ul>
          <div className='design__items'>
            {data
              ? filterDesignCategory === 0
                ? data.map((obj) => (
                    <>{obj.text === 'Classic' ? <DesignItem item={obj} key={obj.id} /> : ''}</>
                  ))
                : data.map((obj) =>
                    obj.typeId === filterDesignCategory && obj.text === 'Classic' ? (
                      <DesignItem item={obj} key={obj.id} />
                    ) : (
                      ''
                    ),
                  )
              : ''}
          </div>
        </div>
      </section>
      <section className='video'>
        <div className='video__inner' style={{ backgroundImage: "url('images/video-bg.png')" }}>
          <a
            className='video__play'
            data-fancybox
            href='https://www.youtube.com/watch?v=AeMQq7OhbO8&ab_channel=%D0%94%D0%B8%D0%B2%D0%B0%D0%BD%D1%8B%D0%B4%D0%BB%D1%8F%D0%BD%D0%B8%D1%80%D0%B2%D0%B0%D0%BD%D1%8B-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2No1'>
            <img className='video__play-btn' src='images/icons/play.svg' alt='play btn' />
          </a>
        </div>
      </section>
      <section className='blog'>
        <div className='container'>
          <div className='blog__box'>
            <h3 className='blog__box-title'>Our Insights & Articles</h3>
            <a className='blog__box-link' href='#'>
              View All
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6.1'
                height='10.97'
                viewBox='0 0 6.1 10.97'>
                <path
                  className='cls-1'
                  d='M1539.33,4295.69a0.53,0.53,0,0,1-.41-0.19,0.6,0.6,0,0,1-.15-0.4,0.631,0.631,0,0,1,.17-0.43l4.55-4.47-4.55-4.48a0.607,0.607,0,0,1-.17-0.42,0.629,0.629,0,0,1,.15-0.41,0.559,0.559,0,0,1,.8-0.02l4.98,4.9,0.01,0.01a0.657,0.657,0,0,1,.12.17h0a0.7,0.7,0,0,1,.05.25h0a0.742,0.742,0,0,1-.05.25h0a0.61,0.61,0,0,1-.12.16c0,0.01-.01.01-0.01,0.02l-4.98,4.9A0.589,0.589,0,0,1,1539.33,4295.69Z'
                  transform='translate(-1538.78 -4284.72)'
                />
              </svg>
            </a>
          </div>
          <div className='blog__items'>
            <div className='blog__item'>
              <a className='blog__item-imglink' href=''>
                <img src='images/blog/1.png' alt='img blog' />
              </a>
              <div className='blog__item-box'>
                <span className='blog__item-news'>NEWS</span>
                <a className='blog__item-title'>
                  Diusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam
                </a>
              </div>
              <div className='blog__item-info'>
                <div className='blog__item-date'>28 JANUARY, 2020</div>
                <a className='blog__item-author'>BY ADMIN</a>
              </div>
            </div>
          </div>
          <div className='blog__items'>
            <div className='blog__item'>
              <a className='blog__item-imglink' href=''>
                <img src='images/blog/2.png' alt='img blog' />
              </a>
              <div className='blog__item-box'>
                <span className='blog__item-news'>NEWS</span>
                <a className='blog__item-title'>
                  Diusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam
                </a>
              </div>
              <div className='blog__item-info'>
                <div className='blog__item-date'>28 JANUARY, 2020</div>
                <a className='blog__item-author'>BY ADMIN</a>
              </div>
            </div>
          </div>
          <div className='blog__items'>
            <div className='blog__item'>
              <a className='blog__item-imglink' href=''>
                <img src='images/blog/3.png' alt='img blog' />
              </a>
              <div className='blog__item-box'>
                <span className='blog__item-news'>NEWS</span>
                <a className='blog__item-title' href='d'>
                  Diusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam
                </a>
              </div>
              <div className='blog__item-info'>
                <div className='blog__item-date'>28 JANUARY, 2020</div>
                <a className='blog__item-author'>BY ADMIN</a>
              </div>
            </div>
          </div>
          <div className='partners'>
            <div className='partners__images'>
              <img src='images/partners/1.png' alt='partners img' />
              <img src='images/partners/2.png' alt='partners img' />
              <img src='images/partners/3.png' alt='partners img' />
              <img src='images/partners/4.png' alt='partners img' />
              <img src='images/partners/5.png' alt='partners img' />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
