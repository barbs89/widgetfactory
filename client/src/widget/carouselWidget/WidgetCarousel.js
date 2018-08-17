import React from 'react'
import Slider from './slider';
import '../WidgetPage.css'


<<<<<<< HEAD
export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true
=======
class WidgetCarousel extends React.Component {

  render() {
    const params = {
      centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 30,
      setWrapperSize: true,
      direction: 'horizontal',
      }

    return(
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
    )
>>>>>>> 96794ff6e04a6334e1eaefd396e3e9c3eae8fd81
  }

  return(
    <div>
      <Slider params={params} showImage="true" />
    </div>
  )
};