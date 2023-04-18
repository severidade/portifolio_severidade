import React from 'react';
import styles from './Works.module.css';
import img from '../../img/works/mini/sistema_solar.png'


export default function Works() {

  return(
    <div className={ styles.works_container }>
      <h2>Trabalhos</h2>
      <div className={ styles.works}>
        <div className='work'>
          <figure className={ styles.container_work_picture }>
            <img 
              src={ img }
              alt="foto de Marco Severo"
            />
          </figure>
          <div className='about'>
            <div className='work_stack'>Front_end</div>
            <h3 className='work_title'>Sistema Solar</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  href= "https://github.com/severidade/solar_system"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href= "http://solarsystem.severidade.com.br/"
                  rel="noreferrer"
                >
                  web
                </a>
              </li>
            </ul>
            <div>
              <p>Esta aplicação React, desenvolvida com componentes de classe, lista todos os planetas do Sistema Solar e também algumas das missões espaciais mais conhecidas. Nela exercitei o uso de props e composição de componentes, conceitos fundamentais no desenvolvimento de aplicações React.</p>
            </div>
            
          </div>
        </div>
        <div className='work'>
          <figure className={ styles.container_work_picture }>
            <img 
              src={ img }
              alt="foto de Marco Severo"
            />
          </figure>
          <div className='about'>
            <div className='work_stack'>Front_end</div>
            <h3 className='work_title'> Nome do projeto</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  href= "https://github.com/severidade/solar_system"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href= "http://solarsystem.severidade.com.br/"
                  rel="noreferrer"
                >
                  web
                </a>
              </li>
            </ul>
            <div>
              <p>Esta aplicação React, desenvolvida com componentes de classe, lista todos os planetas do Sistema Solar e também algumas das missões espaciais mais conhecidas. Nela exercitei o uso de props e composição de componentes, conceitos fundamentais no desenvolvimento de aplicações React.</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

