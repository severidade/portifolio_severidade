import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "./carousel.css";

export default function Carousel() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    cssEase: "linear",
    swipeThreshold: 1, // reduz o deslizamento horizontal para ativar o slider - padrao é 5
  };

  return (
    <div className='container_carousel'>
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className='laje'>
          <div className='container_banner'>
            <div className='banner'/>
            <div className='letreiro'/>
            <div className='pandeiro'/>
          </div>
        </div>
        {/* Slide 2 */}
        <div className='vereda'>
          <div className='container_banner'>
            <div className='banner_vereda'/>
            <div className='logo_vereda'/>
          </div>
        </div>
        {/* Slide 3 */}
        <div className='easy_cooking'>
          <div className='container_banner'>
            <div className='banner_easy_cooking'></div>
            <div className='container_logo_easy_cooking'> 
              <p className='logo_easy_cooking'>easy<strong>cooking</strong></p>
              <p className="subtitle">the best recipe app</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
