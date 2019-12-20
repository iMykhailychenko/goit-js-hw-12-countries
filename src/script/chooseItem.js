import fetchCountries from './fetchCountries.js';

const proposalList = document.querySelector('.list-wrp');

proposalList.addEventListener('click', e => {
  fetchCountries(e.target.textContent);
  proposalList.innerHTML = '';
});

