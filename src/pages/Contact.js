import React from 'react';
import Content from '../data/Content';

import Navbar from '../components/Navbar';

export default function Contact() {

  return(
    <main className='container_main'>
      <Navbar content={ Content } />
      <h1>Página de contato</h1>
      <p>formulário de mandar e-mail</p>
    </main>
  )
}