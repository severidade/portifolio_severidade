import React from 'react';
import Content from '../data/Content';
import Navbar from '../components/Navbar';

export default function Projects() {

  return(
    <main className='container_main'>
      <Navbar content={ Content } />
      <h1>Pátina de projetos</h1>
    </main>
  )
}