import React from 'react';
import { Slider } from './slider';
import './WidgetCarousel.css';

const WidgetCarousel = (props) => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    renderPrevButton: () => (
      <div className="swiper-button-prev">
        <h1>Previous</h1>
      </div>
    ),
    renderNextButton: () => (
      <div className="swiper-button-next">
        <h1>Next</h1>
      </div>
    ),
    loop: true
  };
  return (
    <Slider
      className="swiper-container"
      adverts={props.adverts}
      params={params}
      showImage="true"
      callToActionDesc={props.callToActionDesc}
    />
  );
};

export { WidgetCarousel };
