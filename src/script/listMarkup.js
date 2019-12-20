import countriesList from '../templates/countries_list.hbs';

const listContainer = document.querySelector('.list-wrp');

export default function openList(data) {
  listContainer.innerHTML = '';
  listContainer.insertAdjacentHTML('beforeend', countriesList(data));
};
