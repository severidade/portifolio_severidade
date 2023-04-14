import React from 'react';
import './Reset.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <p>Olá mundo</p>
      </>
    );
  }
}

export default App;