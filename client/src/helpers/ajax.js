const Ajax = function (url) {
  this.url = url;
}

Ajax.prototype.get = function (onComplete) {
  const request = new XMLHttpRequest();
  request.open('GET', this.url);
  request.send();

  request.addEventListener('load', function () {
    if (this.status !== 200) return;
    const jsonString = this.responseText;
    const data = JSON.parse(jsonString);
    onComplete(data);
  });
}

module.exports = Ajax;
