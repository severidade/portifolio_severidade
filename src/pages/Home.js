import React from 'react';
import Content from '../data/Content';

import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Works from '../components/Works';

export default function Home() {

  return(
    <main className='container_main'>
      <Navbar content={ Content } />
      <About content={ Content } />
      <Skills content={ Content } />
      <Works content={ Works } />
    </main>
  )
}