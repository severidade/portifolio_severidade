import React from 'react';
import { useParams } from 'react-router-dom';
import projectList from '../../data/Projects';
import Content from '../../data/Content';
import Navbar from '../../components/Navbar';

export default function Project() {
  const params = useParams();
  console.log(params);
  const currentProject = projectList.find((project) => project.slug === params.project);

  return(
    <main className='container_main'>
      <Navbar content={ Content } />
      <h1>{ currentProject.title }</h1>
      <p>{ currentProject.description }</p>
    </main>
  )
}