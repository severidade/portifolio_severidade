import React from 'react';
import Content from '../data/Content';

import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
// import Works from '../components/Works';

import avatarImage from '../img/works/mini/sistema_solar.png';

export default function Home() {

  return(
    <main className='container_main'>
      <Navbar content={ Content } />
      <div className='slider'>
        <img src={avatarImage} alt="Avatar" />
      </div>
      <About content={ Content } />
      <Skills content={ Content } />
      {/* <Works content={ Works } /> */}
    </main>
  )
}