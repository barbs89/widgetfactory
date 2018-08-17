import React from 'react';
import Swiper from 'react-id-swiper';
import Slides from './demo-data';
import Background from "../../assets/images/carousel_1.jpg"

export default props => {

  const _divStyle = (slide) => {
    return props.showImage ? {backgroundImage: `url(${Background})`} : {}
    // return props.showImage ? {backgroundImage: `url(${require(`srimages/img_${slide.id}.jpg`)})`} : {}
  }

  return(
    <div className="row" id={props.id}>
      <Swiper {...props.params}>
        {Slides.map((slide) => {
          return <div className="slide" key={slide.id} style={_divStyle(slide)}>
            <h2 className="title-card card">{slide.title}</h2>
            <h2 className="price-card card">${slide.price}</h2>
            <p className="desc-card card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis purus vel enim suscipit, vitae volutpat ante scelerisque. Pellentesque blandit malesuada dui, sed aliquet risus molestie non.</p>
            <a className="cta-card card" href="https://www.houseofhome.com.au/">BUY NOW</a>
          </div>
        })}
      </Swiper>
    </div>
  )
};