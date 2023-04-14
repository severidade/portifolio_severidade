import React from 'react';
import styles from './Navbar.module.css';
import Content from '../../data/Content';

export default function Navbar() {
  return(
    <div className={ styles.navbar_container }>
        <div className={ styles.contexto_cidade }>BH</div>
        <h1 className={ styles.logotipo }>Marco <span>Severo</span></h1>
        <ul className={ styles.container_social }>
          {Content.navbar.social_links?.map((item) =>(
            <li key={item.name} > 
              <a 
                // className={`${item.name.toLowerCase()}`}
                className={`${styles[item.name.toLowerCase()]}`}
                target="_blank"
                href={ item.href }
                rel="noreferrer"
              >
                { item.name }
              </a>
            </li>
          ))}
        </ul>
        <div className={ styles.contexto_pais }>Brasil</div>
    </div>
  )
}