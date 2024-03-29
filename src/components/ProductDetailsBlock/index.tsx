import React, { FC, MouseEvent } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { useParams } from 'react-router-dom';
import {
  addDeviceToBasket,
  addRating,
  checkRating,
  fetchDevices,
  fetchOneDevice,
} from '../../http/deviceAPI';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { fetchOneBasket } from '../../store/slices/cartSlice';
import { useQuery } from 'react-query';
import RatingStars from '../Ratings';
import RelatedProducts from './RelatedProducts';
import Posts from '../Posts';

const ProductDetailsBlock: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [resRate, setResRate] = React.useState(0);
  const [isAccessRating, setIsAccessRating] = React.useState(false);
  const [count, setCount] = React.useState(1);
  const { id }: any = useParams();
  const token: string | null = localStorage.getItem('token');
  const limit: number = 4;
  // const { data: allDevices } = useQuery('fetchAllDevices', fetchDevicesAll);
  const { data: devices } = useQuery(['devices', null, null, 1, limit], () =>
    fetchDevices(null, null, 1, limit),
  );

  const { data: device } = useQuery(['fetchDevice', id], () => fetchOneDevice(id));

  console.log(device);

  const addToCart = async (e, id: number) => {
    e.preventDefault();
    if (count > 1) {
      for (let i = 0; i < count; i++) {
        await addDeviceToBasket(id);
      }
      dispatch(fetchOneBasket());
      alert('Товары добавлены в корзину!');
    } else {
      await addDeviceToBasket(id);
      dispatch(fetchOneBasket());
      alert('Товар добавлен в корзину!');
    }
  };

  React.useEffect(() => {
    dispatch(fetchOneBasket());
    if (token) {
      checkRating({ deviceId: id }).then((res) => setIsAccessRating(res.allow));
    }
  }, []);

  const handleClick = async (nextValue: number) => {
    try {
      await addRating({ rate: nextValue, deviceId: id });

      setResRate(nextValue);
      // Здесь выполняется проверка рейтинга после обновления
      checkRating({ deviceId: id }).then((res) => setIsAccessRating(res.allow));
      alert('Спасибо за оценку');
    } catch (error) {
      console.error(error);
    }
  };

  const onClickLeftBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (count !== 1) setCount((prev) => prev - 1);
  };

  const onClickRightBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
  };

  // const totalCount = React.useMemo(() => count, [count]);

  return (
    <>
      {device ? (
        <>
          <Header />

          <main className='main'>
            <section className='top'>
              <div className='top-container'>
                <h2 className='top__title title'>Product Details</h2>
                <div className='breadcrumbs'>
                  <ul className='breadcrumbs__list'>
                    <li className='breadcrumbs__item'>
                      <a className='breadcrumbs__link' href='#'>
                        Home
                      </a>
                    </li>
                    <li className='breadcrumbs__item'>
                      <a className='breadcrumbs__link' href='#'>
                        Product Details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className='product'>
              <div className='container'>
                <div className='product-item'>
                  <div className='product-item__inner'>
                    <div className='product-item__slide product-slide'>
                      <div className='product-slide__thumb'>
                        <div className='product-slide__thumb-item'>
                          <img src={process.env.REACT_APP_API_URL + device.img} alt='product img' />
                        </div>
                        <div className='product-slide__thumb-item'>
                          <img src={process.env.REACT_APP_API_URL + device.img} alt='product img' />
                        </div>
                        <div className='product-slide__thumb-item'>
                          <img src={process.env.REACT_APP_API_URL + device.img} alt='product img' />
                        </div>
                      </div>
                      <div className='product-slide__big'>
                        <div className='product-slide__big-item'>
                          <img src={process.env.REACT_APP_API_URL + device.img} alt='product img' />
                        </div>
                        {/* <div className='product-slide__big-item'>
                      <img src='/images/product/1.jpg' alt='product img' />
                    </div>
                    <div className='product-slide__big-item'>
                      <img src='/images/product/1.jpg' alt='product img' />
                    </div> */}
                      </div>
                    </div>
                    <div className='product-item__content'>
                      <div className='product-item__box'>
                        <h3 className='product-item__title'>{device.name}</h3>
                        <RatingStars
                          clickRating={handleClick}
                          ratingVal={device.rating}
                          isAuth={token ? true : false}
                          isAccessRating={isAccessRating}
                        />
                        <span className='product-item__price'>{device.price}$</span>
                        <p className='product-item__text'>{device.description}</p>
                        <form className='product-item__form' action=''>
                          <button
                            className='product-item__btn-left'
                            onClick={(e) => onClickLeftBtn(e)}>
                            -
                          </button>
                          <div className='product-item__num'>{count}</div>
                          <button
                            className='product-item__btn-right'
                            onClick={(e) => onClickRightBtn(e)}>
                            +
                          </button>
                          <button
                            className='product-item__btn'
                            onClick={(e) => addToCart(e, device.id)}>
                            ADD TO CART
                          </button>
                        </form>
                        {/* <span className='product-item__info'>SKU: 014</span>
                    <span className='product-item__info'>Category: Lights</span>
                    <span className='product-item__info'>Tag: Decorative</span> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='product-tabs'>
                  <div className='product-tabs__top'>
                    <a
                      className='product-tabs__top-item product-tabs__top-item--active'
                      href='#tab-1'>
                      Description
                    </a>
                    <a className='product-tabs__top-item' href='#tab-2'>
                      Additional information
                    </a>
                    <a className='product-tabs__top-item' href='#tab-3'>
                      Reviews (2)
                    </a>
                  </div>
                  <div className='product-tabs__content'>
                    <div
                      className='product-tabs__content-item product-tabs__content-item--active'
                      id='tab-1'>
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className='product-tabs__content-item' id='tab-2'>
                      content 2
                    </div>
                    <div className='product-tabs__content-item' id='tab-3'>
                      content 3
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <RelatedProducts />

            <Posts />
          </main>

          <Footer />
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default ProductDetailsBlock;
