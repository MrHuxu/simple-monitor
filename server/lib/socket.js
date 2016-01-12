export default function (http) {
  var io = require('socket.io')(http);
  io.on('connection', (socket) => {

    setInterval(() => {
      socket.emit('new record', {
        request: JSON.parse('{"version":"1.0","network":"97753","profile":["2540","2954"],"channel":"9619452","airing":{"id":"88969724","asset_id":"88967417","start_time":1568575800,"end_time":1568584800,"break":[{"id":"229","name":null,"start_time":1568577300,"duration":60,"opportunity":[{"id":"255","is_completed":true,"ad_unit":"14384","duration":12,"sequence":69,"schedule_mode":"OPTIONAL","ad":[{"id":"2775679","placement":"2775678","creative":"1480217","sequence":0},{"id":"2775679","placement":"2775678","creative":"1480218","sequence":1},{"id":"2775679","placement":"2775678","creative":"1480219","sequence":2}]},{"id":"256","is_completed":true,"ad_unit":"14385","duration":2,"sequence":70,"schedule_mode":"OPTIONAL","ad":[]}]},{"id":"230","name":null,"start_time":1568579100,"duration":60,"opportunity":[{"id":"186","is_completed":true,"ad_unit":"14384","duration":2,"sequence":0,"schedule_mode":"OPTIONAL","ad":[]}]},{"id":"233","name":"Break","start_time":3716059447,"duration":null,"opportunity":[]}]}}'),
        response: {
          "version" : "1.0",
          "result" : [{
            "name" : "OPPORTUNITY_OVERFILLED",
            "airing" : "88969724",
            "break" : "229",
            "opportunity" : "255"
          }]
        }
      });
    }, 5000);
  });
};