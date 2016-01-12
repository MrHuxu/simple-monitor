import $ from 'jquery';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item.jsx';
import { receiveRecord } from '../actions/monitorActions';

class List extends Component {
  componentDidMount () {
    const { dispatch } = this.props;

    var socket = io();
    socket.on('new record', (data) => {
      dispatch(receiveRecord(data));
      console.log(data);
    });

    $('.ui.accordion').accordion();
  }

  render () {
    const { records } = this.props;
    var items = records.map(record => <Item key={record.infos.createdAt} infos={record.infos} request={record.request} response={record.response} />);

    return (
      <div>
        <div className='ui styled fluid accordion'>
          {items}
        </div>
      </div>
    );
  }
}

var mapStateToProps = function (state) {
  return {
    records: state.monitor.records
  };
};

export default connect(mapStateToProps)(List);