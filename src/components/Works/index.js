import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Works.module.css';

export default function Works({ projectList, projectImages }) {
  const projectIDsToDisplay = [ 1, 2, 3, 4, 5, 7, 8,9];
  const filteredProjects = projectList.filter(project => projectIDsToDisplay.includes(project.id));

  return (
    <div className={styles.works_container}>
      <h2>Projetos</h2>
      <div className={ styles.works_content }>

        {Array.isArray(filteredProjects) && filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
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


                {/* {projectImages[project.id] && projectImages[project.id].gallery && projectImages[project.id].gallery.map((image, index) => (
                  <img key={index} src={image} alt={`${project.title} - Image ${index}`} />
                ))} */}

              </Link>
            </div>
          ))
        ) : (
          <p>Nenhum projeto disponível</p>
        )}

      </div>
    </div>
  );
}

Works.propTypes = {
  projectList: PropTypes.array,
  projectImages: PropTypes.object.isRequired,
};
