import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ProjectList.module.css'

export default function ProjectList({ projectList }) {

  return (
    <main className={ styles.project_list }>

      {projectList.map((project) => (
        <div
          className={ styles.project } 
          key={ project.slug }
        >
          <h2> { project.title } </h2>
          <div className={ styles.image_projeto_mini } >
            <img src={ project.img } alt={ project.title } />
          </div> 
          <Link
            to={`/projects/${ project.slug }`}
          >
            {project.title}
          </Link>
        </div>
      ))}

    </main>
  );
}

ProjectList.propTypes = {
  projectList: PropTypes.array.isRequired,
};
