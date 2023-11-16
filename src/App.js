import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import './Reset.css';
import './App.css';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/ProjectPage';
// import Contact from './pages/Contact';
import Error from './pages/Error';

export default function App() {
  const navigate = useNavigate();
  const TRACKING_ID = 'G-V5SVPDQ6F7';

  useEffect(() => {
    // Inicialize o Google Analytics
    ReactGA.initialize(TRACKING_ID);

    // Rastreie a página inicial quando o aplicativo é carregado
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });

    // Adicione um listener de histórico para rastrear mudanças de rota
    const historyListener = (event) => {
      ReactGA.send({ hitType: 'pageview', page: event.location.pathname + event.location.search });
    };

    // Adicione o listener ao histórico de navegação
    const unlisten = navigate({ history: historyListener });

    // Remova o listener quando o componente for desmontado
    return () => {
      // Certifique-se de verificar se unlisten é uma função antes de chamá-la
      if (typeof unlisten === 'function') {
        unlisten();
      }
    };
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/:project' element={<Project />} />
      {/* <Route path='/contact' element={<Contact />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
