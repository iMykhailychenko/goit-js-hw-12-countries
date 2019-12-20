import countryInfoTemplate from '../templates/country_info.hbs';

const infoWrapper = document.querySelector('.country-info-wrp');

export default function createCountryMarkup([country]) {
  const markup = countryInfoTemplate(country);
  infoWrapper.innerHTML = '';
  infoWrapper.insertAdjacentHTML('beforeend', markup);
};
