import React, { useState }  from 'react';
// import styles from './Navbar.module.css';
import PropTypes from 'prop-types';
// import Content from '../../data/Content';

import './Navbar.css';


export default function Navbar(props) {
  const { content } = props;
  const [menuOpen, setmenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setmenuOpen(!menuOpen);
  };

  return(
    <div className="navbar_container">
        <div
          // className="menu"
          className={`menu ${menuOpen ? 'open' : ''}`}
          onClick={ toggleMenu }
        >
          <div className=" dot"/>
        </div>
        <h1 className="logotipo">Marco <span>Severo</span></h1>
        <ul className=" container_social">
          {content.navbar.social_links?.map((item) =>(
            <li key={item.name} > 
              <a 
                className={`${item.name.toLowerCase()}`}
                // className={`${styles[item.name.toLowerCase()]}`}
                target="_blank"
                href={ item.href }
                rel="noreferrer"
              >
                { item.name }
              </a>
            </li>
          ))}
        </ul>
        <div className="contexto_pais">Brasil</div>
    </div>
  )
}

Navbar.propTypes = {
  content: PropTypes.object.isRequired,
};