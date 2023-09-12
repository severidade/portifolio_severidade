import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import scrollToTop from '../../utils/scrollToTop';
import styles from './ProjectNavigation.module.css';

export default function ProjectNavigation({ previousProject, nextProject }) {
  return (
    <ul className={styles.project_navigation}>
      <li key={previousProject.slug}>
        <Link
          className={styles.project_navigation_link}
          to={`/projects/${previousProject.slug}`}
          onClick={scrollToTop}
        >
          {previousProject.title}
        </Link>
      </li>

      <li key={nextProject.slug}>
        <Link
          className={styles.project_navigation_link}
          to={`/projects/${nextProject.slug}`}
          onClick={scrollToTop}
        >
          {nextProject.title}
        </Link>
      </li>
    </ul>
  );
}

ProjectNavigation.propTypes = {
  previousProject: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  nextProject: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};