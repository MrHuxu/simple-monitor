import '../node_modules/animate.css/animate.min.css';

import $ from 'jquery';
window.jQuery = $; // Assure it's available globally.
require('../server/public/components/semantic/dist/semantic.min.js');

import React, { Component } from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import { store } from './store';

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('monitor')
);