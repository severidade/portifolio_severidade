import React from 'react';
import { useParams } from 'react-router-dom';
import projectList from '../../data/Projects';
import Content from '../../data/Content';
import Navbar from '../../components/Navbar';

const parse = require('html-react-parser');

export default function Project() {
  const params = useParams();
  console.log(params);
  const currentProject = projectList.find((project) => project.slug === params.project);

  return(
    <main className='container_project'>
      <Navbar content={ Content } />
      <div className='about_project'>
        <h1>{ currentProject.title }</h1>
        <div> {parse(currentProject.description)} </div>
      </div>
    </main>
  )
}