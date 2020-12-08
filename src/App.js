import './App.css';

import './template/custom.css'

import React from 'react'
import Menu from './template/menu'
import Routes from './main/routes'

function App() {
  return (
    <div className="App">
        <Menu />
        <Routes />
    </div>
  );
}

export default App;
