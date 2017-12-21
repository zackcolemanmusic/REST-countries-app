const CountryInfo = function () {
  this.ul = document.querySelector('#country-info');
}

CountryInfo.prototype.render = function (country) {
  const ul = document.querySelector('#populate');
  const li = document.createElement('li');
  const text = document.createElement('p');
  text.innerText = `${country.name}`;
  li.appendChild(text);
  ul.appendChild(li);
}

CountryInfo.prototype.createListItem = function (label, content) {
  const li = document.createElement('li');
  li.innerText = `${ label }: ${ content }`;
  return li;
}

module.exports = CountryInfo;
