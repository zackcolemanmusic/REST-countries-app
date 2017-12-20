const CountriesSelect = function () {
  this.select = document.querySelector('#countries-select');
}

CountriesSelect.prototype.createOption = function (country, index) {
  const option = document.createElement('option');
  option.innerText = country.name;
  option.value = index;
  return option;
}

CountriesSelect.prototype.render = function (countries) {
  countries.forEach(function (country, index) {
    const option = this.createOption(country, index);
    this.select.appendChild(option);
  }.bind(this));
}

module.exports = CountriesSelect;
