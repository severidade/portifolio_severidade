import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "./carousel.css";

// import banner_palmeiras from "./img/laje/fundo_palmeiras.png";
// import banner from "./img/laje/banner_geral.png";
// import banner_inferior from "./img/laje/banner_inferior.gif";


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
        <div>
          <h3>Slide 3</h3>
          <p>Conteúdo do slide 3</p>
        </div>
      </Slider>
    </div>
  );
}
