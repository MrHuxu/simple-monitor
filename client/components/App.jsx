import React, { Component } from 'react';
import List from './List.jsx';

class App extends Component {
  render () {
    return (
      <div className='ui grid' style={{marginTop: '30px'}}>
        <div className='sixteen wide column center aligned'>
          <h1>HYLDA Monitor</h1>
          <div className="ui buttons">
            <button className="ui teal button">Validation</button>
            <div className="or"></div>
            <button className="ui blue button">Ad Suggestion</button>
          </div>
        </div>
        <div className='three wide column' />
        <div className='ten wide column'>
          <List />
        </div>
      </div>
    );
  }
}

export default App;