import React from 'react';
import Content from '../data/Content';

import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

export default function Contact() {

  return(
    <main className='container_contact'>
      <Navbar content={ Content } />
      <ContactForm />
    </main>
  )
}