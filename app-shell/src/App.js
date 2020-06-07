import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header';
import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-container">
        <Menu />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
