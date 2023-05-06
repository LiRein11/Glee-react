import jwt_decode from 'jwt-decode';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { check, getOneUser, login, registration } from '../../http/userAPI';
import '../../scss/login.scss';
import { IDataToken, IUser } from '../products.interface';
import { useQuery } from 'react-query';
// import { useQuery } from 'react-query';

const LoginBlock: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const navigate = useNavigate();

  const token: string | null = localStorage.getItem('token');

  const { data: user } = useQuery<IUser>('fetchOneUser', getOneUser);

  // const pokemons = useStore((state) => state.pokemons);
  // const removePokemon = useStore((state) => state.removePokemon);
  // console.log(pokemons);
  // const { data } = useQuery('login', login(email, password));
  // console.log(data)
  const click = async (e: any) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await login(email, password);
      } else {
        const response = await registration(email, password);
      }
      navigate('/');
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const info = () => {
    if (token) {
      const data: IDataToken = jwt_decode(token);
      const dateNow = new Date();
      if (dateNow.getTime() > data.exp * 1000) {
        localStorage.removeItem('token');
        navigate('/login');
      }

      return;
    }
  };

  React.useEffect(() => {
    info();
  }, []);

  return (
    <>
      <Header />
      <main className='main'>
        {token ? (
          <>
            <section className='top'>
              <div className='top-container'>
                <h2 className='top__title title'>Account</h2>
                <div className='breadcrumbs'>
                  <ul className='breadcrumbs__list'>
                    <li className='breadcrumbs__item'>
                      <a className='breadcrumbs__link' href='/'>
                        Home
                      </a>
                    </li>
                    <li className='breadcrumbs__item'>
                      <a className='breadcrumbs__link' href='#'>
                        Account
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '100px',
              }}>
              {user ? (
                <>
                  <img
                    style={{ width: '100px', borderRadius:'50%', padding:'5px'}}
                    src={process.env.REACT_APP_API_URL + user?.avatarUrl}
                    alt='avatar'
                  />
                  <div style={{ display: 'block' }}>
                    <div>
                      <span> Name: {user?.name}</span>
                      <span style={{ display: 'block' }}> Email: {user?.email}</span>
                      <span>Role: {user?.role}</span>
                    </div>
                  </div>
                </>
              ) : (
                ''
              )}
              <button className='footer-top__form-btn' onClick={logout}>
                Logout
              </button>
              {/* <div>
                {pokemons.map((pokemon: any) => (
                  <li key={pokemon.id}>
                    <div className='row'>
                      <div className='col-md-6'>{pokemon.name} </div>
                      <div className='col-md-6'>
                        <button
                          className='btn btn-outline-secondary btn-sm'
                          onClick={(e) => removePokemon(pokemon.id)}>
                          X
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </div> */}
            </div>
          </>
        ) : (
          <>
            <section className='top'>
              <div className='top-container'>
                <h2 className='top__title title'>{isLogin ? 'Login' : 'Registration'}</h2>
                <div className='breadcrumbs'>
                  <ul className='breadcrumbs__list'>
                    <li className='breadcrumbs__item'>
                      <a className='breadcrumbs__link' href='/'>
                        Home
                      </a>
                    </li>
                    <li className='breadcrumbs__item'>
                      <a className='breadcrumbs__link' href='#'>
                        {isLogin ? 'Login' : 'Registration'}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className='modalAuth'>
              <div className='container'>
                <form className='modalAuth__form' action='#'>
                  <label className='modalAuth__label'>
                    Username or email address *
                    <input
                      className='modalAuth__input'
                      type='text'
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label className='modalAuth__label'>
                    Password *
                    <input
                      className='modalAuth__input'
                      type='password'
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                  <button className='modalAuth__btn' type='submit' onClick={click}>
                    {isLogin ? 'Login' : 'Registration'}
                  </button>
                  {isLogin ? (
                    <div className='modalAuth__text'>
                      <label className='modalAuth__label modalAuth__label-checkbox'>
                        <div className='modalAuth__label-box'>
                          <input type='checkbox' />
                          Remember me
                        </div>
                        <a className='modalAuth__label-text' href='#'>
                          Lost your password?
                        </a>
                      </label>
                      Not registered? No problem
                    </div>
                  ) : (
                    <div className='modalAuth__text' style={{ marginTop: '0px' }}>
                      <label
                        className='modalAuth__label modalAuth__label-checkbox'
                        style={{ paddingBottom: '0px' }}></label>
                      Do you have an account?
                    </div>
                  )}
                </form>
                {isLogin ? (
                  <NavLink className='modalAuth__link' to='/registration'>
                    Create an account
                  </NavLink>
                ) : (
                  <NavLink className='modalAuth__link' to='/login'>
                    Sign in
                  </NavLink>
                )}
              </div>
            </section>
          </>
        )}

        <section className='partners-section'>
          <div className='container'>
            <div className='partners-section__content'>
              <div className='partners-section__images'>
                <img
                  className='partners-section__images-img'
                  src='/images/partners/1.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='/images/partners/2.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='/images/partners/3.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='/images/partners/4.png'
                  alt='partners img'
                />
                <img
                  className='partners-section__images-img'
                  src='/images/partners/5.png'
                  alt='partners img'
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LoginBlock;
