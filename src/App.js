import React from 'react';
import './Reset.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './data/Content';
import About from './components/About/About';

export default function App(){
  return (
    <>
      <Navbar content={ Content } />
      <About content={ Content } />
    </>
  );
}