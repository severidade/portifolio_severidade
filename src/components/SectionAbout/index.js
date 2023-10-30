import React from 'react';
import styles from './SectionAbout.module.css';
import PropTypes from 'prop-types';

const parse = require('html-react-parser')

export default function SectionAbout(props) {
  const { content } = props;

  return(
    <div className={ styles.about_container }>
      {/* <div class="container_picture"> <img src="./img/avatar.png" alt="foto Marco Severo"></div> */}
      <h2>Sobre</h2>
      <figure className={ styles.container_picture }>
        <img 
          src={ content.about.img }
          alt="foto de Marco Severo"
        />
      </figure>
      <div>
        {parse(content.about.description)}
      </div>
    </div>
  )
}

SectionAbout.propTypes = {
  content: PropTypes.object.isRequired,
};