import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import styles from './ProjectDetails.module.css';

export default function ProjectDetails({ currentProject, projectList }) {
  const { title, description, slug } = currentProject;
  console.log(slug)

  // const filteredProjectList = projectList.filter((project) => project.slug !== slug);


  // Cria o next e o prev para a lista de projetos 
  const currentIndex = projectList.findIndex((project) => project.slug === slug);

  const totalProjects = projectList.length;
  const previousIndex = currentIndex === 0 ? totalProjects - 1 : currentIndex - 1;
  const nextIndex = currentIndex === totalProjects - 1 ? 0 : currentIndex + 1;

  const previousProject = projectList[previousIndex];
  const nextProject = projectList[nextIndex];

  const parse = require('html-react-parser');

  return (
    <div className={ styles.about_project }>
      <div className={ styles.image_projeto } ></div> 
      <h1>{title}</h1>
      <div> {parse(description)} </div>
      {/* 
        <ul>
          {projectList.map((project) => (
            <li key={project.slug}>
              <Link
                to={ `/projects/${project.slug}`}
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul> 
      */}

      <ul className={ styles.acelerar }>
        <li key={previousProject.slug}>
          <Link to={`/projects/${previousProject.slug}`}>
            Projeto Anterior: {previousProject.title}
          </Link>
        </li>

        <li key={nextProject.slug}>
          <Link to={`/projects/${nextProject.slug}`}>
            Próximo Projeto: {nextProject.title}
          </Link>
        </li>
      </ul>

    </div>
  );
}


ProjectDetails.propTypes = {
  currentProject: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  projectList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};
