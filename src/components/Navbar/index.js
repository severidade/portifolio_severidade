import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MobileDetect from 'mobile-detect';
import './Navbar.css';

export default function Navbar(props) {
  const { content } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const isMobileDevice = () => {
    const md = new MobileDetect(window.navigator.userAgent);
    return md.mobile() !== null;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const disableScrollOnWheel = (event) => {
    event.preventDefault();
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (menuOpen) {
      const touchCurrentX = event.touches[0].clientX;
      const touchDiffX = touchStartX - touchCurrentX;

      // Se o usuário deslizar a tag nav para a esquerda em pelo menos 50 pixels, feche o menu
      if (touchDiffX > 20) {
        setMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    if (isMobileDevice()) {
      document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
      // isso bloqueia o scroll vertical no celular
    }

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

  return (
    <>
      <div className="navbar_container">
        <div
          className={`menu ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div className=" dot" />
        </div>
        <h1 className="logotipo">Marco <span>Severo</span></h1>
        <ul className=" container_social">
          {content.navbar.social_links?.map((item) => (
            <li key={item.name} >
              <a
                className={`${item.name.toLowerCase()}`}
                target="_blank"
                href={item.href}
                rel="noreferrer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="contexto_pais">Brasil</div>
      </div>
      <nav
        className={`menu_options ${menuOpen ? 'open' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <button
          className='close_menu'
          onClick={toggleMenu}
        >
          close
        </button>
        <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/projects" onClick={toggleMenu}>Projetos</NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>Contato</NavLink>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  content: PropTypes.object.isRequired,
};
