import React, { Component} from 'react';
import AppRoutes from './routes';
import {Provider} from 'react-redux';

//Assets
//-----------CSS
import './App.css';
import './css/all.min.css';
import './css/spaces.css'

//------------JS
import './assets/js/autocomplete';
import './assets/js/login';
import './assets/js/spaces';



import store from './store';

const App =()=>{
    return(
        <AppRoutes />
    );
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
