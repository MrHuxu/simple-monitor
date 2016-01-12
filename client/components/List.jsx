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
    });

    $('.ui.accordion').accordion();
  }

  render () {
    const { records, selectedRecords } = this.props;
    var items = records.map(record => <Item key={record.infos.createdAt} record={record} category={'realtime'} infos={record.infos} request={record.request} response={record.response} />);
    var selectedItems = selectedRecords.map(record => <Item key={'select - ' + record.infos.createdAt} record={record} category={'selected'} infos={record.infos} request={record.request} response={record.response} />);

    return (
      <div>
        <div className='ui grid'>
          <div className='eight wide column'>
            <div className='ui segment center aligned'>
              <h1 className='ui head' style={{color: '#999'}}> Real Time </h1>
            </div>
            <div className='ui styled fluid accordion'>
              {items}
            </div>
          </div>
          <div className='eight wide column'>
            <div className='ui segment center aligned'>
              <h1 className='ui head' style={{color: '#999'}}> Selected </h1>
            </div>
            <div className='ui styled fluid accordion'>
              {selectedItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

var mapStateToProps = function (state) {
  return {
    records: state.monitor.records,
    selectedRecords: state.monitor.selectedRecords
  };
};

export default connect(mapStateToProps)(List);