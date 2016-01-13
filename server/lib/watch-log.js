import { Tail } from './tail';

var scokets = [];

function initSocket (http) {
  var io = require('socket.io')(http);
  io.on('connection', (socket) => {
    socket.on('disconnect', () => {
      scokets.splice(scokets.indexOf(socket), 1);
    });
    scokets.push(socket);
  });
}
export var initSocket;

function startWatch (filename) {
  var tail = new Tail(filename);
  var record = {};

  var emitRecord = function (record) {
    for (var i = 0, len = scokets.length; i < len; ++i) {
      console.log(scokets[i].emit)
      console.log(record);
      scokets[i].emit('new record', record);
    }
    record = {};
  };

  tail.on("line", function(data) {
    var reqLocation = data.indexOf('[HYLDA ADS Validation] HTTP Request Content');
    var errLocation = data.indexOf('[HYLDA ADS Validation] Error');
    var resLocation = data.indexOf('[HYLDA ADS Validation] HTTP Response Content');

    if (reqLocation !== -1) {
      var decodedRequest = JSON.parse(data.slice(reqLocation + 45));
      record.infos = {
        time: (new Date()).toLocaleString(),
        network: decodedRequest.network,
        channel: decodedRequest.channel,
        airing: decodedRequest.airing
      };
      record.request = decodedRequest;
    } else if (resLocation !== -1) {
      record.response = JSON.parse(data.slice(resLocation + 46));
      emitRecord(record);
    } else if (errLocation !== -1) {
      record.response = {error: data.slice(errLocation + 38)};
      emitRecord(record);
    }
  });
}
export var startWatch;