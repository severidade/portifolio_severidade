import React from 'react';
import styles from './SectionSkills.module.css';
import PropTypes from 'prop-types';

import curriculo from './data/curriculo.pdf';


export default function SectionSkills(props) {
  const { content } = props;

  return(
    <div className={ styles.skills_container }>
      <h2>Habilidades</h2>
      <h3 className={ styles.skill }><strong>Front-end</strong></h3>
      <p> { content.skills.front_end } </p>
      <h3 className={ styles.skill }><strong>Back-end</strong></h3>
      <p> { content.skills.back_end } </p>
      <h3 className={ styles.skill }><strong>Outros</strong></h3>
      <p> { content.skills.others } </p>

      <a
        href={curriculo}
        download="marco_severo"
        target="_blank"
        rel="noreferrer"
      >
        <button className={ styles.download }>Baixar Currículo</button>
      </a>
    </div>
  )
}

SectionSkills.propTypes = {
  content: PropTypes.object.isRequired,
};