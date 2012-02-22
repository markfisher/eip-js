var Channel = module.exports = function() {}

Channel.prototype.subscribe = function(handler) {
  this.handler = handler;
};

Channel.prototype.send = function(message, headers) {
  this.handler(message, headers);
}
