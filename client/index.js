import '../node_modules/nprogress/nprogress.css';

import $ from 'jquery';
window.jQuery = $; // Assure it's available globally.
require('../server/public/components/semantic/dist/semantic.min.js');
require('../node_modules/jqtree');

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