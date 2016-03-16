import React, { Component } from 'react';
import { connect } from 'react-redux';

class Graph extends Component {
  render () {
    return (
      <h1> Graph </h1>
    );
  }
}

export default connect()(Graph);