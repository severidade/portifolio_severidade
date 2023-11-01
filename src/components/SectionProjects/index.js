import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionProjects.module.css';
import CardProject from '../CardProject';
import { Link } from 'react-router-dom';
import scrollToTop from '../../utils/scrollToTop';

export default function SectionProjects({ projectList, projectImages }) {
  const projectIDsToDisplay = [ 6, 7, 8, 9 ];
  const filteredProjects = projectList.filter(project => projectIDsToDisplay.includes(project.id));

  return (
    <div className={styles.works_container}>
      <h2>Projetos</h2>
      <div className={ styles.works_content }>
        {Array.isArray(filteredProjects) && filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <CardProject
              project={project}
              projectImage={projectImages[project.id]}
              key={project.id}
            />
          ))
        ) : (
          <p>Nenhum projeto disponível</p>
        )}
      </div>
      <Link 
          to="/projects"
          onClick={scrollToTop}
          className={ styles.find_out_more }
        >
          Veja todos os projetos
        </Link>
    </div>
  );
}

SectionProjects.propTypes = {
  projectList: PropTypes.array,
  projectImages: PropTypes.object.isRequired,
};
