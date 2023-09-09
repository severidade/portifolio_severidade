import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import styles from './ProjectDetails.module.css';

export default function ProjectDetails({ currentProject, projectList }) {
  const { 
    title,
    description,
    slug,
    deployLink,
    githubLink,
  } = currentProject;

  // Cria o next e o prev para a lista de projetos 
  const currentIndex = projectList.findIndex((project) => project.slug === slug);

  const totalProjects = projectList.length;
  const previousIndex = currentIndex === 0 ? totalProjects - 1 : currentIndex - 1;
  const nextIndex = currentIndex === totalProjects - 1 ? 0 : currentIndex + 1;

  const previousProject = projectList[previousIndex];
  const nextProject = projectList[nextIndex];

  const parse = require('html-react-parser');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={ styles.about_project }>
      <div className={ styles.image_projeto } ></div> 
      <h1>{title}</h1>
      <div> {parse(description)} </div>

      <div className={ styles.container_links }>     
        {deployLink && deployLink.trim() !== '' && (
          <a
            className={ styles.btn_deploy } 
            href={ deployLink } target="_blank"
            rel="noopener noreferrer"
          >
            Ver deploy
          </a>
        )}

        {githubLink && githubLink.trim() !== '' && (
          <a
            className={ styles.btn_github } 
            href={ githubLink } 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Ver github
          </a>
        )}
      </div>
      <ul className={ styles.acelerar }>
        <li key={previousProject.slug}>
          <Link 
            to={`/projects/${previousProject.slug}`}
            onClick={scrollToTop}  
          >
            Projeto Anterior: {previousProject.title}
          </Link>
        </li>

        <li key={nextProject.slug}>
          <Link 
            to={`/projects/${nextProject.slug}`}
            onClick={scrollToTop}
          >
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
    deployLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
  projectList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};
