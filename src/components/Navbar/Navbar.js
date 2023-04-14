import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {

  return(
    <div className={ styles.navbar_container }>
        <div className="contexto_cidade">BH</div>
        <h1 className="logotipo">Marco <em>Severo</em></h1>
        <ul className="container_social">
          <li>
            <a
              target="_blank"
              className={ styles.social_linkedin }
              href="https://www.linkedin.com/in/severidade/" 
              rel="noreferrer"
            >
                Linkedin
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className={ styles.social_github }
              href="https://github.com/severidade"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className={ styles.social_codpen }
              href="https://codepen.io/severidade"
              rel="noreferrer"
            >
              Codepen
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className={ styles.social_behance }
              href="https://www.behance.net/severidade"
              rel="noreferrer"
            >
              Behance
            </a>
          </li>
        </ul>
        <div className="contexto_pais">Brasil</div>
    </div>
  )
}