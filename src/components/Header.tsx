import React, { FC } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { useFavorites } from '../hooks/useFavorites';

const Header: FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const { favoritesDevices, isLoading, refetch } = useFavorites();

  // const [count, setCount] = React.useState(0);

  // const onClickCountPlus = () => {
  //   setCount(count + 1);
  // };

  React.useEffect(() => {
    refetch();
  }, []);

  const navigate = useNavigate();

  const click = () => {
    const token = localStorage.getItem('token');
    navigate(token ? '/account' : '/login');
  };

  return (
    <header className='header'>
      <div className='container-large'>
        <div className='header__inner'>
          <Link className='logo' to='/'>
            <img className='logo__img' src='images/logo.png' alt='logo' />
          </Link>
          <nav className='menu'>
            <button className='menu__btn'>
              <span></span>
            </button>
            <ul className='menu__list'>
              <li className='menu__list-item'>
                <Link className='menu__list-link' to='/'>
                  Home +
                </Link>
              </li>
              <li className='menu__list-item'>
                <Link className='menu__list-link' to='/about'>
                  About
                </Link>
              </li>
              <li className='menu__list-item'>
                <a className='menu__list-link' href='#'>
                  Services
                </a>
              </li>
              <li className='menu__list-item menu__list-item--active'>
                <a className='menu__list-link' href='#'>
                  Pages
                </a>
                <div className='abd'>
                  <div className='abdd'>
                    <NavLink className='menu__list-link' to='/catalogOne'>
                      CatalogOne
                    </NavLink>
                    <NavLink className='menu__list-link' to='/catalogTwo'>
                      CatalogTwo
                    </NavLink>
                    <NavLink className='menu__list-link' to='/productDetails'>
                      ProductDetails
                    </NavLink>
                    <NavLink className='menu__list-link' to='/terms'>
                      Terms
                    </NavLink>
                    <NavLink className='menu__list-link' to='/blogDetails'>
                      BlogDetails
                    </NavLink>
                    <NavLink className='menu__list-link' to='/blog'>
                      Blog
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className='menu__list-item'>
                <a className='menu__list-link' href='#'>
                  News
                </a>
              </li>
              <li className='menu__list-item'>
                <Link className='menu__list-link' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className='user-nav'>
            <a className='user-nav__search' href='#'>
              <img className='user-nav__search-img' src='images/icons/search.svg' alt='search' />
            </a>
            <div className='user-nav__box'>
              <NavLink className='user-nav__heart' to='/favorites'>
                <img className='user-nav__heart-img' src='images/icons/heart.svg' alt='heart' />
                <span className='user-nav__num'>
                  {favoritesDevices ? favoritesDevices?.length : 0}
                </span>
              </NavLink>
              <NavLink className='user-nav__cart' to='/cart'>
                <img className='user-nav__cart-img' src='images/icons/cart.svg' alt='cart' />
                <span className='user-nav__num'>{cart.count}</span>
              </NavLink>
            </div>
            <button className='user-nav__btn' onClick={click}>
              <img className='user-nav__btn-img' src='images/navuser-btn.png' alt='btn' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
