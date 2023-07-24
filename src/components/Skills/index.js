import React from 'react';
import styles from './skills.module.css';
import PropTypes from 'prop-types';

export default function Skills(props) {
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

      <a href="/data/curriculo.pdf" download>
        <button>Baixar Currículo</button>
      </a>
    </div>
  )
}

Skills.propTypes = {
  content: PropTypes.object.isRequired,
};