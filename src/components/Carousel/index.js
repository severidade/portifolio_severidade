import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "./carousel.css";
import { Link } from 'react-router-dom';
import projectList from '../../data/Projects';
import ReactPlayer from 'react-player';


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
            <Link 
              to={ `/projects/${projectList[0].slug}`}
              // key={post.slug.current}
              className='show_project'
            >
              Ver Projeto
            </Link>
          </div>
        </div>
        {/* Slide 2 */}
        <div className='vereda'>
          <div className='container_banner'>
            <div className='banner_vereda'/>
            <div className='logo_vereda'/>
            <Link 
              to={ `/projects/${projectList[1].slug}`}
              // key={post.slug.current}
              className='show_project'
            >
              Ver Projeto
            </Link>
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
            <Link 
              to={ `/projects/${projectList[2].slug}`}
              // key={post.slug.current}
              className='show_project'
            >
              Ver Projeto
            </Link>
          </div>
        </div>
        {/* Slide 4 */}
        <div className='the_box_blog'>
          <div className='container_banner'>
            <div className='banner_the_box_blog'></div>
            {/* <div className='container_logo_easy_cooking'> 
              <p className='logo_easy_cooking'>easy<strong>cooking</strong></p>
              <p className="subtitle">the best recipe app</p>
            </div> */}
            <Link 
              to={ `/projects/${projectList[3].slug}`}
              // key={post.slug.current}
              className='show_project'
            >
              Ver Projeto
            </Link>
          </div>
        </div>
        {/* Slide 5 */}
        <div className='solar_system'>
          <div className='container_banner'>
            <div className='banner_solar_system'></div>
            <ReactPlayer
              className='video_background'
              // url="https://www.youtube.com/watch?v=ztVV54sPOns&t=46m36s"
              // url="https://www.youtube.com/watch?v=ztVV54sPOns&t=6m32s"
               url="https://www.youtube.com/watch?v=ztVV54sPOns&t=10m9s"
              // url="https://www.youtube.com/watch?v=kiNSWFEyDQM&t=795s"
              playing
              loop
              muted
              controls={ false }
              speed="2"
              width="300%"
              height="150%"
            />
            <Link 
              to={ `/projects/${projectList[4].slug}`}
              // key={post.slug.current}
              className='show_project'
            >
              Ver Projeto
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}
