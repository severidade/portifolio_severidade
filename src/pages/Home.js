import React from 'react';
import Content from '../data/Content';

import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Skills from '../components/Skills';
import Works from '../components/Works';

// import avatarImage from '../img/works/mini/sistema_solar.png';

export default function Home() {

  return(
    <main className='container_main'>
      <Navbar content={ Content } />
      <Carousel />
      <About content={ Content } />
      <Skills content={ Content } />
      <Works />
    </main>
  )
}