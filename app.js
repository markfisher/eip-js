var Channel = require('./lib/channel');

var channel = new Channel();

channel.subscribe(function(payload, headers) {
  var output = 'received: ' + payload;
  if (headers) {
    output +=  ' with headers: ';
    for (var name in headers) {
      output += name + '=' + headers[name] + ' ';
    }
  }
  console.log(output);
});

channel.send('test1');

channel.send('test2', {a:1, b:2});
