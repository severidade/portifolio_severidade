import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProjectList({ projectList }) {

  return (
    <main className='list'>
      <ul className='project'>
        {projectList.map((project) => (
          <li key={project.slug}>

            <Link
              to={`/projects/${ project.slug }`}
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

ProjectList.propTypes = {
  projectList: PropTypes.array.isRequired,
};
