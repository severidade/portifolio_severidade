import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Navbar.css';


export default function Navbar(props) {
  const { content } = props;
  const [menuOpen, setmenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setmenuOpen(!menuOpen);
  };

  // useEffect(() => {
  //   document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
  // }, [menuOpen]);

  const disableScrollOnWheel = (event) => {
    event.preventDefault();
  }
  

  useEffect(() => {
    if (menuOpen) {
      document.body.addEventListener('wheel', disableScrollOnWheel, { passive: false });
    } else {
      document.body.removeEventListener('wheel', disableScrollOnWheel);
    }

    // Limpa o ouvinte de evento quando o componente é desmontado
    return () => {
      document.body.removeEventListener('wheel', disableScrollOnWheel);
    };
  }, [menuOpen]);

  return(
    <>
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
      <div
        className={`menu_options ${menuOpen ? 'open' : ''}`}
      >
        <a
          className='close_menu'
          onClick={ toggleMenu }
        >
          close
        </a>
        <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/projects" onClick={ toggleMenu }>Projetos</NavLink>
        <NavLink to="/contact" onClick={ toggleMenu }>Contato</NavLink>
      </div>
    </>
  )
}

Navbar.propTypes = {
  content: PropTypes.object.isRequired,
};