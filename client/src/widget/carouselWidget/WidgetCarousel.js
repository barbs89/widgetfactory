import React from 'react';
import {Slider} from './slider';
import '../WidgetPage.css';

const WidgetCarousel = (props) => {
  const params = {
    // pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  }

  return (
    <div>
      <Slider params={params} showImage="true" />
    </div>
  );
};

export {WidgetCarousel}