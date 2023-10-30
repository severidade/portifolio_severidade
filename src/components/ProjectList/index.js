import React from 'react';
import PropTypes from 'prop-types';
import CardProject from '../CardProject';
import styles from './ProjectList.module.css'

export default function ProjectList({ projectList, projectImages }) {
    return (
      <main className={styles.project_list}>
      {Array.isArray(projectList) && projectList.length > 0 ? (
        projectList.map((project) => (
          <CardProject
            project={project}
            projectImage={projectImages[project.id]}
            key={project.id}
          />
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
