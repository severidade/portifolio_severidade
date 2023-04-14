import React from 'react';
import './Reset.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './data/Content';

export default function App(){
  return (
    <>
      <Navbar content={ Content } />
    </>
  );
}