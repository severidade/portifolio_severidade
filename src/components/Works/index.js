import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Works.module.css';

export default function Works({ projectList, projectImages }) {
  const projectIDsToDisplay = [ 7, 8 ,9];
  const filteredProjects = projectList.filter(project => projectIDsToDisplay.includes(project.id));

  return (
    <div className={styles.works_container}>
      <h2>Trabalhos</h2>
      <div className='works_content'>

        {Array.isArray(filteredProjects) && filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id}>
              <Link to={`/projects/${project.slug}`}>
                <h3>{project.title}</h3>
                <p>{project.short_description}</p>

                <figure>
                  {projectImages[project.id] && projectImages[project.id].avatar ? (
                    <img src={projectImages[project.id].avatar} alt={`${project.title} - Avatar`} />
                  ) : (
                    <p>Sem 📷</p>
                  )}
                </figure>

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
