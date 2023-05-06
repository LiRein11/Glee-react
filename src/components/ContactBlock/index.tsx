import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const ContactBlock = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <section className='top'>
          <div className='top-container'>
            <h2 className='top__title title'>Contact</h2>
            <div className='breadcrumbs'>
              <ul className='breadcrumbs__list'>
                <li className='breadcrumbs__item'>
                  <a className='breadcrumbs__link' href='#'>
                    Home
                  </a>
                </li>
                <li className='breadcrumbs__item'>
                  <a className='breadcrumbs__link' href='#'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='contact'>
          <div className='container'>
            <h6 className='contact__thumbtitle'>Write Here</h6>
            <h4 className='contact__title'>Get In Touch</h4>
            <div className='contact__items'>
              <div className='contact__item'>
                <div className='contact__img'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='31'
                    height='44'
                    viewBox='0 0 31 44'>
                    <defs>
                      {/* <style>
                    .cls-1 {
                      fill: #a3bbc8;
                      fill-rule: evenodd;
                    }
                  </style> */}
                    </defs>
                    <path
                      id='icon'
                      className='cls-1'
                      d='M558.6,655.809l-6.584-2.917-5.674,2.51a1.651,1.651,0,0,1-1.864-.355,1.634,1.634,0,0,1-.313-1.862l4.994-10.516a1.1,1.1,0,1,1,1.972.987l-4.343,9.144,4.32-1.914a2.227,2.227,0,0,1,1.806,0l6.583,2.916h0.011l6.585-2.917a2.223,2.223,0,0,1,1.8,0l4.32,1.914-4.342-9.145a1.093,1.093,0,0,1,.174-1.275,1.107,1.107,0,0,1,1.8.288l4.994,10.518a1.656,1.656,0,0,1-2.176,2.216L567,652.892l-6.594,2.917A2.23,2.23,0,0,1,558.6,655.809Zm-1.947-7.6L547.1,632.283c-0.011-.02-0.023-0.041-0.033-0.062a13.944,13.944,0,1,1,26.39-6.327,13.691,13.691,0,0,1-1.528,6.327l-0.034.062-9.548,15.927A3.326,3.326,0,0,1,556.65,648.21Zm2.683-34.012a11.783,11.783,0,0,0-11.586,11.625,11.521,11.521,0,0,0,1.269,5.366l9.529,15.9a1.114,1.114,0,0,0,1.91,0l9.528-15.9a11.665,11.665,0,0,0-2.231-13.625,11.7,11.7,0,0,0-8.247-3.368Zm-4.884,11.7a5.051,5.051,0,1,1,5.051,5.027A5.044,5.044,0,0,1,554.449,625.894Zm2.206,0a2.845,2.845,0,1,0,2.845-2.83A2.842,2.842,0,0,0,556.655,625.894Z'
                      transform='translate(-544 -612)'
                    />
                  </svg>
                </div>
                <h5 className='contact__item-title'>Address</h5>
                <div className='contact__info'>
                  <p className='contact__info-one'>2416 Mapleview Drive</p>
                  <p className='contact__info-two'>Tampa, FL 33634</p>
                </div>
              </div>
              <div className='contact__item contact__item--active'>
                <div className='contact__img contact__img--active'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='37'
                    height='33.968'
                    viewBox='0 0 37 33.968'>
                    <defs>
                      <style>
                        {/* .cls-1 {
                      fill: #fff;
                      fill-rule: evenodd;
                    } */}
                      </style>
                    </defs>
                    <path
                      id='icon'
                      className='cls-1'
                      d='M942.975,650.918a0.957,0.957,0,0,1-.669-0.272,0.922,0.922,0,0,1-.278-0.659L942,629.786c0-.006,0-0.011,0-0.017a0.927,0.927,0,0,1,.408-0.754l5.322-3.616v-3.838a0.94,0.94,0,0,1,.948-0.932h6.067l5.217-3.546a0.961,0.961,0,0,1,1.079,0l5.185,3.545h6.093a0.94,0.94,0,0,1,.947.932v3.882l5.3,3.621a0.933,0.933,0,0,1,.373.519,0.528,0.528,0,0,1,.034.184L979,649.937a0.941,0.941,0,0,1-.946.933l-35.077.048h0Zm2.773-1.867,29.478-.041-14.712-11.224Zm-1.828-.965,11.443-8.73L943.9,631.563Zm21.72-8.748,11.461,8.744-0.023-16.565Zm-16.014-6.148,7.308,4.968,3-2.288a0.959,0.959,0,0,1,1.148-.008l0.013,0.008,2.977,2.272,7.3-4.993V622.493H949.626v10.7Zm-5.013-3.408,3.118,2.121v-4.241Zm28.654,2.072,3.028-2.071-3.028-2.07v4.141Zm-15.188-11.225h4.828l-2.407-1.645Zm-3.994,12.3a0.933,0.933,0,1,1,0-1.865h12.83a0.933,0.933,0,1,1,0,1.865h-12.83Zm0-4.847a0.932,0.932,0,1,1,0-1.864h12.83a0.932,0.932,0,1,1,0,1.864h-12.83Z'
                      transform='translate(-942 -616.938)'
                    />
                  </svg>
                </div>
                <h5 className='contact__item-title'>Our Email</h5>
                <div className='contact__info'>
                  <p className='contact__info-one'>Main Email : contact@website.com</p>
                  <p className='contact__info-two'>Inquiries : Info@mail.com</p>
                </div>
              </div>
              <div className='contact__item'>
                <div className='contact__img'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='37'
                    height='44'
                    viewBox='0 0 37 44'>
                    <defs>
                      {/* <style>
                    .cls-1 {
                      fill: #a3bbc8;
                      fill-rule: evenodd;
                    }
                  </style> */}
                    </defs>
                    <path
                      id='icon'
                      className='cls-1'
                      d='M1355.44,650.922a5.06,5.06,0,1,1,5.06,5A5.034,5.034,0,0,1,1355.44,650.922Zm1.97,0a3.085,3.085,0,1,0,3.09-3.045A3.074,3.074,0,0,0,1357.41,650.922Zm11.47-11.336a5.06,5.06,0,1,1,5.06,5A5.033,5.033,0,0,1,1368.88,639.586Zm1.98,0a3.085,3.085,0,1,0,3.08-3.046A3.066,3.066,0,0,0,1370.86,639.586Zm-15.42,0a5.06,5.06,0,1,1,5.06,5A5.033,5.033,0,0,1,1355.44,639.586Zm1.97,0a3.085,3.085,0,1,0,3.09-3.046A3.075,3.075,0,0,0,1357.41,639.586Zm-15.41,0a5.06,5.06,0,1,1,5.06,5A5.033,5.033,0,0,1,1342,639.586Zm1.97,0a3.085,3.085,0,1,0,3.09-3.046A3.075,3.075,0,0,0,1343.97,639.586Zm24.91-11.337a5.06,5.06,0,1,1,5.06,5A5.034,5.034,0,0,1,1368.88,628.249Zm1.98,0a3.085,3.085,0,1,0,3.08-3.045A3.064,3.064,0,0,0,1370.86,628.249Zm-15.42,0a5.06,5.06,0,1,1,5.06,5A5.034,5.034,0,0,1,1355.44,628.249Zm1.97,0a3.085,3.085,0,1,0,3.09-3.045A3.073,3.073,0,0,0,1357.41,628.249Zm-15.41,0a5.06,5.06,0,1,1,5.06,5A5.034,5.034,0,0,1,1342,628.249Zm1.97,0a3.085,3.085,0,1,0,3.09-3.045A3.073,3.073,0,0,0,1343.97,628.249Zm24.91-11.336a5.06,5.06,0,1,1,5.06,5A5.033,5.033,0,0,1,1368.88,616.913Zm1.98,0a3.085,3.085,0,1,0,3.08-3.046A3.066,3.066,0,0,0,1370.86,616.913Zm-15.42,0a5.06,5.06,0,1,1,5.06,5A5.033,5.033,0,0,1,1355.44,616.913Zm1.97,0a3.085,3.085,0,1,0,3.09-3.046A3.075,3.075,0,0,0,1357.41,616.913Zm-15.41,0a5.06,5.06,0,1,1,5.06,5A5.033,5.033,0,0,1,1342,616.913Zm1.97,0a3.085,3.085,0,1,0,3.09-3.046A3.075,3.075,0,0,0,1343.97,616.913Z'
                      transform='translate(-1342 -611.906)'
                    />
                  </svg>
                </div>
                <h5 className='contact__item-title'>Our Phone</h5>
                <div className='contact__info'>
                  <p className='contact__info-one'>Office Telephone : 0029129102320</p>
                  <p className='contact__info-two'>Mobile : 000 2324 39493</p>
                </div>
              </div>
            </div>
            <div className='contact__box'>
              <form className='contact__form'>
                <div className='contact__form-box'>
                  <input
                    className='contact__form-input contact__form-input--name'
                    placeholder='NAME'
                    type='text'
                  />
                  <input
                    className='contact__form-input contact__form-input--email'
                    placeholder='EMAIL'
                    type='text'
                  />
                </div>
                <textarea
                  className='contact__form-textarea contact__form-textarea--message'
                  placeholder='MESSAGE'></textarea>
                <button className='contact__form-btn'>SEND MESSAGE</button>
              </form>

              <div id='map'></div>
            </div>
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
                  <img src='/images/blog/1.png' alt='img blog' />
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
                  <img src='/images/blog/2.png' alt='img blog' />
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
                  <img src='/images/blog/3.png' alt='img blog' />
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
            <div className='partners'>
              <div className='partners__images'>
                <img src='/images/partners/1.png' alt='partners img' />
                <img src='/images/partners/2.png' alt='partners img' />
                <img src='/images/partners/3.png' alt='partners img' />
                <img src='/images/partners/4.png' alt='partners img' />
                <img src='/images/partners/5.png' alt='partners img' />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {/* <script
        src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap&v=weekly"
        async></script>
      <script>
        let map; function initMap(){' '}
        {
          (map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 29.76804442779756, lng: -95.35843470871232 },
            zoom: 9,
          }))
        }
      </script> */}
    </>
  );
};

export default ContactBlock;
