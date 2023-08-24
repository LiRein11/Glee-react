import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

const Slider = () => {
  return (
    <Carousel id="sampleSlide" controls={false} indicators={true} interval={null}>
      <Carousel.Item>
        <div className="top-slider__item">
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
      </Carousel.Item>
      <Carousel.Item>
        <div className="top-slider__item">
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
      </Carousel.Item>
      <Carousel.Item>
        <div className="top-slider__item">
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
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
