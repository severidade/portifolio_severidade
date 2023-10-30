import React from 'react';
import Content from '../data/Content';
import Navbar from '../components/Navbar';
import projectList from '../data/Projects';
import ProjectList from '../components/ProjectList';
import projectImages from '../data/ProjectImages';

export default function Projects() {

  return(
    <main className='container_project_list'>
      <Navbar content={ Content } />
      < ProjectList projectList={ projectList } projectImages={ projectImages } />
    </main>
  )
}