const CountryInfo = function () {
  this.ul = document.querySelector('#country-info');
}

CountryInfo.prototype.render = function (country) {
  // TODO: Render country info
  const ul = document.querySelector('#country-info')
  const li = document.createElement('li')
  const select = document.querySelector('#countries-select')
  li.innerText = select.option
  ul.appendChild(li)
}

CountryInfo.prototype.createListItem = function (label, content) {
  const li = document.createElement('li');
  li.innerText = `${ label }: ${ content }`;
  return li;
}

module.exports = CountryInfo;
