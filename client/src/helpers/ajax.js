const Ajax = function (url) {
  this.url = url;
}

Ajax.prototype.get = function (onComplete) {
  const request = new XMLHttpRequest();
  request.open('GET', this.url);
  request.send();

  request.addEventListener('load', onComplete);
}

module.exports = Ajax;
