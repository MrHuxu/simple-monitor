import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterList extends Component {
  render () {
    return (
      <h1> FilterList </h1>
    );
  }
}

export default connect()(FilterList);