import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item.jsx';

class List extends Component {
  render () {
    var items = [];
    for (var i = 0; i < 10; ++i) {
      items.push(<div className='item'><Item /></div>);
    }

    return (
      <div className='ui relaxed divided list'>
        <Item />
      </div>
    );
  }
}

var mapStateToProps = function (state) {
  return {
    archives: state.monitor.records
  };
};

export default List;