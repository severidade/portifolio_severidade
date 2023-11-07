import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectDetails.module.css';
import calculateProjectNavigation from '../../utils/calculateProjectNavigation';
import ProjectNavigation from '../ProjectNavigation'
import ProjectImages from '../../data/ProjectImages'

export default function ProjectDetails({ currentProject, projectList }) {
  const [figureHeight, setFigureHeight] = useState('100%');
  const { 
    title,
    description,
    introduction_description, 
    slug: slug_current,
    deployLink,
    githubLink,
    id,
  } = currentProject;

  
  const { previousProject, nextProject } = calculateProjectNavigation( slug_current, projectList );
  const parse = require('html-react-parser');

  useEffect(() => {
    const calculateFigureHeight = () => {
      const parentWidth = document.querySelector(`.${styles.image_projeto}`).offsetWidth;
      const windowHeight = window.innerHeight - 40;
      const sideLength = Math.min(parentWidth, windowHeight);

      console.log(`A largura da imagem é ${parentWidth} e a altura da tela é ${windowHeight} | o menor tamanho é ${sideLength}`);

      setFigureHeight(sideLength);
      
    };

    calculateFigureHeight();

    window.addEventListener('resize', calculateFigureHeight);

    return () => {
      window.removeEventListener('resize', calculateFigureHeight);
    };
  }, []);

  return (

    <div className={ styles.about_project }>
      <div className={ styles.container_project_full_image }>
        <figure 
          className={ styles.image_projeto }
          style={{ height: `${figureHeight}px`, width: `${figureHeight}px` }}
        >
          {ProjectImages[id] && ProjectImages[id].gallery ? (
            <img src={ProjectImages[id].gallery} alt={`📷 ${title} - Miniatura`} />
          ) : (
            <p>Sem 📷</p>
          )}
        </figure>
      </div>
      <div className='project'>
        <h1 className={ styles.project_title }>{title}</h1>
        <div
          className={ styles.introduction_description }
        >
          {parse(introduction_description)}
        </div>
        <div className={ styles.container_links }>     
          {githubLink && githubLink.trim() !== '' && (
            <a
              className={ styles.btn_github } 
              href={ githubLink } 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver Github
            </a>
          )}
          {deployLink && deployLink.trim() !== '' && (
            <a
              className={ styles.btn_deploy } 
              href={ deployLink } target="_blank"
              rel="noopener noreferrer"
            >
              Visitar o Site
            </a>
          )}
        </div>
        <div className={ styles.description }> 
          { parse(description) } 
        </div>
      </div>

      <ProjectNavigation 
        previousProject={ previousProject } 
        nextProject={ nextProject } 
        projectImages={ ProjectImages }
      />
  </div>
  );
}


ProjectDetails.propTypes = {
  currentProject: PropTypes.shape({
    title: PropTypes.string.isRequired,
    introduction_description: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    deployLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  projectList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};
