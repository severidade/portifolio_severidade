import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import scrollToTop from '../../utils/scrollToTop';
import styles from './ProjectNavigation.module.css';

export default function ProjectNavigation({ previousProject, nextProject, projectImages }) {

  const [figureSize, setfigureSize] = useState(0);

  useEffect(() => {
    const calculatefigureSize = () => {
      const parentWidth = document.querySelector(`.${styles.projects}`).offsetWidth - 10;
      const height = parentWidth / 2 ;
      setfigureSize(height);
    };

    calculatefigureSize();

    window.addEventListener('resize', calculatefigureSize);

    return () => {
      window.removeEventListener('resize', calculatefigureSize);
    };
  }, []);


  return (
    <div className={styles.project_navigation}>
      <div className={ styles.projects }>
        <div 
          key={previousProject.slug}
          className={styles.project_navigation_link_prev}
        >
          <Link
            to={`/projects/${previousProject.slug}`}
            onClick={scrollToTop}
          >
          <figure 
            className={ styles.project_navigation_avatar}
            style={{ height: `${figureSize}px`, width: `${figureSize}px` }}
          >
            {projectImages[previousProject.id] && projectImages[previousProject.id].gallery ? (
              <img src={projectImages[previousProject.id].avatar} alt={`📷 ${previousProject.title } - Miniatura`} />
            ) : (
              <p>📷</p>
            )}
          </figure>
           <span className={ styles.project_title }> { previousProject.title } </span>
          </Link>
        </div>
        <div 
          key={nextProject.slug}
          className={styles.project_navigation_link_next}
        >
          <Link
            className={styles.project_navigation_link}
            to={`/projects/${nextProject.slug}`}
            onClick={scrollToTop}
          >
         <figure 
            className={ styles.project_navigation_avatar}
            style={{ height: `${figureSize}px`, width: `${figureSize}px` }}
          >
            {projectImages[nextProject.id] && projectImages[nextProject.id].gallery ? (
              <img src={projectImages[nextProject.id].avatar} alt={`📷 ${nextProject.title } - Miniatura`} />
            ) : (
              <p>📷</p>
            )}
          </figure>
          <span className={ styles.project_title }> { nextProject.title } </span>
          </Link>
        </div>
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

ProjectNavigation.propTypes = {
  previousProject: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  nextProject: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  projectImages: PropTypes.object.isRequired,
};
