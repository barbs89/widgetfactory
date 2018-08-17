import React from 'react';

import Swiper from 'react-id-swiper';

class WidgetCarousel extends React.Component {
  render() {
    const params = {
      centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 30,
      setWrapperSize: true,
      direction: 'horizontal'
    };

    return (
      <div>
        <Swiper {...params}>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
          <div>Slide 5</div>
          <div>Slide 6</div>
        </Swiper>
      </div>
    );
  }
}

export default WidgetCarousel;
