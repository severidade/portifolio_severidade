import React from 'react';
import Content from '../data/Content';
import Navbar from '../components/Navbar';
import projectList from '../data/Projects';
import ProjectList from '../components/ProjectList';

export default function Projects() {

  return(
    <main className='container_project_list'>
      <Navbar content={ Content } />
      < ProjectList projectList={ projectList }/>
      {/* <div className='project_list'>
      
      </div> */}
    </main>
  )
}