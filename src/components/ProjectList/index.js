import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ProjectList.module.css'

export default function ProjectList({ projectList, projectImages }) {

  return (
    <main className={ styles.project_list }>
      {Array.isArray(projectList) && projectList.length > 0 ? (
        projectList.map((project) => (
          <div 
            className={ styles.work }
            key={project.id}
          >
            <Link to={`/projects/${project.slug}`}>
              <figure className={ styles.work_avatar }>
                {projectImages[project.id] && projectImages[project.id].avatar ? (
                  <img src={projectImages[project.id].avatar} alt={`${project.title} - Avatar`} />
                ) : (
                  <p>Sem 📷</p>
                )}
              </figure>
              <h3>{project.title}</h3>
              <p className={ styles.short_description }>{project.short_description}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>Nenhum projeto disponível</p>
      )}
    </main>
);
}

ProjectList.propTypes = {
  projectList: PropTypes.array.isRequired,
  projectImages: PropTypes.object.isRequired,
};
