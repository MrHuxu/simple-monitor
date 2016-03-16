import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/lib/app-bar';

import FilterList from './FilterList';
import Graph from './Graph';
import Detail from './Detail';

const styles = {
  content: {
    verticalAlign: 'top'
  },

  leftPanel: {
    display: 'inline-block',
    width: '35%',
    height: '100%',
    float: 'left'
  },

  rightPanel: {
    display: 'inline-block',
    width: '65%',
    height: '100%'
  },

  graph: {
    height: '40%'
  },

  detail: {
    height: '50%'
  }
};

class App extends Component {
  render () {
    return (
      <div className='full-height' style={styles.app}>
        <AppBar
          title = 'HYLDA Monitor'
          showMenuIconButton = {false}
        />

        <div style={styles.content}>
          <div style={styles.leftPanel}>
            <FilterList />
          </div>

          <div style={styles.rightPanel}>
            <div style={styles.graph}>
              <Graph />
            </div>
            <div style={styles.detail}>
              <Detail />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default connect()(App);