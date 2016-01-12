import $ from 'jquery';
import React, { Component } from 'react';
import JSONTree from 'react-json-tree';

class Item extends Component {
  render () {
    var data = '{"version":"1.0","network":"97753","profile":["2540","2954"],"channel":"9619452","airing":{"id":"88969724","asset_id":"88967417","start_time":1568575800,"end_time":1568584800,"break":[{"id":"229","name":null,"start_time":1568577300,"duration":60,"opportunity":[{"id":"255","is_completed":true,"ad_unit":"14384","duration":12,"sequence":69,"schedule_mode":"OPTIONAL","ad":[{"id":"2775679","placement":"2775678","creative":"1480217","sequence":0},{"id":"2775679","placement":"2775678","creative":"1480218","sequence":1},{"id":"2775679","placement":"2775678","creative":"1480219","sequence":2}]},{"id":"256","is_completed":true,"ad_unit":"14385","duration":2,"sequence":70,"schedule_mode":"OPTIONAL","ad":[]}]},{"id":"230","name":null,"start_time":1568579100,"duration":60,"opportunity":[{"id":"186","is_completed":true,"ad_unit":"14384","duration":2,"sequence":0,"schedule_mode":"OPTIONAL","ad":[]}]},{"id":"233","name":"Break","start_time":3716059447,"duration":null,"opportunity":[]}]}}';
    var json1 = JSON.parse(data);

    var json2 = {
      "version" : "1.0",
      "result" : [
      {
        "name" : "OPPORTUNITY_OVERFILLED",
        "airing" : "88969724",
        "break" : "229",
        "opportunity" : "255"
      },
      {
        "name" : "AD_FLIGHT_WINDOW",
        "airing" : "88969724",
        "break" : "229",
        "opportunity" : "255",
        "ad" : "2775679",
        "creative" : "1480217"
      },
      {
        "name" : "AD_FLIGHT_WINDOW",
        "airing" : "88969724",
        "break" : "229",
        "opportunity" : "255",
        "ad" : "2775679",
        "creative" : "1480218"
      },
      {
        "name" : "AD_FLIGHT_WINDOW",
        "airing" : "88969724",
        "break" : "229",
        "opportunity" : "255",
        "ad" : "2775679",
        "creative" : "1480219"
      },
      {
        "name" : "IRREGULAR_REMAIN_DURATION",
        "airing" : "88969724",
        "break" : "229",
        "opportunity" : "256"
      },
      {
        "name" : "IRREGULAR_REMAIN_DURATION",
        "airing" : "88969724",
        "break" : "230",
        "opportunity" : "186"
      }
      ]
    };

    const theme = {
      scheme: 'monokai',
      author: 'wimer hazenberg (http://www.monokai.nl)',
      base00: '#272822',
      base01: '#383830',
      base02: '#49483e',
      base03: '#75715e',
      base04: '#a59f85',
      base05: '#f8f8f2',
      base06: '#f5f4f1',
      base07: '#f9f8f5',
      base08: '#f92672',
      base09: '#fd971f',
      base0A: '#f4bf75',
      base0B: '#a6e22e',
      base0C: '#a1efe4',
      base0D: '#66d9ef',
      base0E: '#ae81ff',
      base0F: '#cc6633'
    };

    return (
      <div className='ui grid'>
      <div className='eight wide column left aligned'>
      <div style={{ backgroundColor: theme.base00 }}>
      <JSONTree data={json1} theme={theme} />
      </div>
      </div>
      <div className='eight wide column left aligned'>
      <div style={{ backgroundColor: theme.base00 }}>
      <JSONTree data={json2} theme={theme} />
      </div>
      </div>
      </div>
      );
  }
}

export default Item;