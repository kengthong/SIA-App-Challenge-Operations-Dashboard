import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'antd/dist/antd.css';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { store } from './store';

import './index.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

let BASE_URL;
BASE_URL = 'http://siachallenge.reversethatshell.com/';
console.log({BASE_URL})
export default {BASE_URL};
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App}/>
    </Router>

  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
