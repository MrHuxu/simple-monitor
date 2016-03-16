import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { rootStore } from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import $ from 'jquery';
window.jQuery = $; // Assure it's available globally.

// import stylesheets
import './styles/common.css';

// import the entry of components
import App from './components/App.jsx';

render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('hylda-monitor')
);