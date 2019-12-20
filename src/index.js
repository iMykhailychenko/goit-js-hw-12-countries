// styles
import './main.scss';

// JavaScript
import fetchCountries from './script/fetchCountries.js';
import './script/chooseItem';

const debounce = require('lodash.debounce');

const input = document.querySelector('[type="search"]');

const transiteRequest = ({ target }) => {
  fetchCountries(target.value);
  const listContainer = document.querySelector('.list-wrp');
  const infoWrapper = document.querySelector('.country-info-wrp');
  listContainer.innerHTML = '';
  infoWrapper.innerHTML = '';
};

input.addEventListener('input', debounce(transiteRequest, 500));
