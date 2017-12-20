const CountriesList = function () {
  this.countries = [];
}

CountriesList.prototype.setCountries = function (countries) {
  this.countries = countries;
}

module.exports = CountriesList;
