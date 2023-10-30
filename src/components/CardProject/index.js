import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CardProject.module.css';

export default function CardProject({ project, projectImage }) {
  return (
    <div className={styles.work} key={project.id}>
      <Link to={`/projects/${project.slug}`}>
        <figure className={styles.work_avatar}>
          {projectImage && projectImage.avatar ? (
            <img src={projectImage.avatar} alt={`${project.title} - Avatar`} />
          ) : (
            <p>Sem 📷</p>
          )}
        </figure>
        <h3>{project.title}</h3>
        <p className={styles.short_description}>{project.short_description}</p>
      </Link>
    </div>
  );
}

CardProject.propTypes = {
  project: PropTypes.object.isRequired,
  projectImage: PropTypes.object.isRequired,
};
