import React from 'react';
import Swiper from 'react-id-swiper';
import Slides from './demo-data';
import Background from '../../Assets/carousel_1.jpg';

const Slider = (props) => {
  const _divStyle = (slide) => {
    return props.showImage ? { backgroundImage: `url(${Background})` } : {};
  };

  return (
    <div className="row" id={props.id}>
      <Swiper {...props.params}>
        {Slides.map((slide) => {
          return (
            <div className="slide" key={slide.id} style={_divStyle(slide)}>
              <section className="slider-card-headers" id="slides-header">
                <h2 className="title-card card">{slide.title}</h2>
                <h2 className="price-card card">${slide.price}</h2>
              </section>
              <p className="desc-card card">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent iaculis purus vel enim suscipit.
              </p>
              <a
                className="cta-card card"
                href="https://www.houseofhome.com.au/"
              >
                <h2>{props.callToActionDesc}</h2>
              </a>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};
export { Slider };
