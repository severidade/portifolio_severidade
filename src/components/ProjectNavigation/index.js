import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import scrollToTop from '../../utils/scrollToTop';
import styles from './ProjectNavigation.module.css';

export default function ProjectNavigation({ previousProject, nextProject, projectImages }) {

  const [tumbWidth, setTumbWidth] = useState(0);
  const [tumbHeight, setTumbHeight] = useState(0)

  // useEffect(() => {
  //   const calculatetumbWidth = () => {
  //     const parentWidth = document.querySelector(`.${styles.projects}`).offsetWidth;
  //     // const height = parentWidth / 2 ;
  //     const height = window.innerWidth > 1400 ? parentWidth : (parentWidth - 20)/ 2;

  //     setTumbWidth(height);
  //   };

  //   calculatetumbWidth();

  //   window.addEventListener('resize', calculatetumbWidth);

  //   return () => {
  //     window.removeEventListener('resize', calculatetumbWidth);
  //   };
  // }, []);
  useEffect (() =>{
    const calculatetumbWidth = () => {
      const parentWidth = document.querySelector(`.${styles.projects}`).offsetWidth;

      let altura;
      let largura;

      if (window.innerWidth >= 600 && window.innerWidth <= 1399) {
        altura = ((parentWidth - 20) / 4.5);
        largura = (parentWidth - 20) / 2;
      } else {
        altura = window.innerWidth > 1400 ? parentWidth : (parentWidth - 20)/ 2;
        largura = window.innerWidth > 1400 ? parentWidth : (parentWidth - 20)/ 2;
      }

      setTumbWidth(largura)
      setTumbHeight(altura)
    };

    calculatetumbWidth();
    window.addEventListener('resize', calculatetumbWidth);
    return () => {
      window.removeEventListener('resize', calculatetumbWidth);
    };
  },[]);


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
            style={{ height: `${tumbHeight}px`, width: `${tumbWidth}px` }}
          >
            {projectImages[previousProject.id] && projectImages[previousProject.id].avatar ? (
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
            style={{ height: `${tumbHeight}px`, width: `${tumbWidth}px` }}
          >
            {projectImages[nextProject.id] && projectImages[nextProject.id].avatar ? (
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
          + projetos
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
