import React from 'react';
import Content from '../data/Content';

import Navbar from '../components/Navbar';
import ReactEmail from '../components/ReactEmail';

export default function Contact() {

  return(
    <main className='container_contact'>
      <Navbar content={ Content } />
      <ReactEmail />
    </main>
  )
}