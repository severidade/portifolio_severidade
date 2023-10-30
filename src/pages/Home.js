import React from 'react';
import Content from '../data/Content';
import projectList from '../data/Projects';
import projectImages from '../data/ProjectImages';

import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import SectionAbout from '../components/SectionAbout';
import SectionSkills from '../components/SectionSkills';
import Works from '../components/Works';

// import avatarImage from '../img/works/mini/sistema_solar.png';

export default function Home() {

  return(
    <main className='container_main'>
      <Navbar content={ Content } />
      <Carousel />
      <SectionAbout content={ Content } />
      <SectionSkills content={ Content } />
      <Works projectList={ projectList } projectImages={ projectImages } />
    </main>
  )
}