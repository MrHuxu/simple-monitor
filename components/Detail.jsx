import React, { Component } from 'react';
import { connect } from 'react-redux';

class Detail extends Component {
  render () {
    return (
      <h1> Detail </h1>
    );
  }
}

export default connect()(Detail);