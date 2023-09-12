import React from 'react';
import Content from '../data/Content';
import Navbar from '../components/Navbar';
import projectList from '../data/Projects';
import ProjectList from '../components/ProjectList';

export default function Projects() {

  return(
    <main className='container_project_list'>
      <Navbar content={ Content } />
      <div className='project_list'>
        <h1>Página de projetos</h1>
        < ProjectList projectList={ projectList }/>
      </div>
    </main>
  )
}