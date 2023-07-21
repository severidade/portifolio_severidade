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
            <div className='banner'></div>
            <div className='letreiro'></div>
            <div className='pandeiro'></div>
            {/* <figure className='banner'>
              <img className='banner_01' src={ banner_palmeiras } alt='Banner' />
              <img className='banner_02'src={ banner } alt='Banner' />
              <img className='banner_03'src={ banner_inferior } alt='Banner' />
            </figure> */}
          </div>
          <h3>Slide 1</h3>
          <p>Conteúdo do slide 1</p>
        </div>
        {/* Slide 2 */}
        <div>
          <h3>Slide 2</h3>
          <p>Conteúdo do slide 2</p>
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
