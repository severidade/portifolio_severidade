import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CardProject.module.css';

export default function CardProject({ project, projectImage }) {
  const [figureHeight, setFigureHeight] = useState(0);

  useEffect(() => {
    const calculateFigureHeight = () => {
      const parentWidth = document.querySelector(`.${styles.work}`).offsetWidth;
      const height = parentWidth * 0.50;
      setFigureHeight(height);
    };

    calculateFigureHeight();

    window.addEventListener('resize', calculateFigureHeight);

    return () => {
      window.removeEventListener('resize', calculateFigureHeight);
    };
  }, []);

  return (
    <div className={styles.work} key={project.id}>
      <Link to={`/projects/${project.slug}`}>
        <figure
          className={styles.work_avatar}
          style={{ height: `${figureHeight}px` }}
        >
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
