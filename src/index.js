//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router} from 'react-router-dom';

//Browser Routes
import { BrowserRouter } from 'react-router-dom';
//import AppRoutes from './routes.js'

//Assets
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
