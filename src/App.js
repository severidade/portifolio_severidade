import React from 'react';
import './Reset.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/ProjectPage';
import Contact from './pages/Contact';
import Error from './pages/Error';


export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/projects' element= {<Projects />} />
      <Route path='/projects/:project' element= {<Project />} />
      <Route path='/contact' element= {<Contact />} />
      <Route path="*" element={<Error /> } />
    </Routes>
  );
}