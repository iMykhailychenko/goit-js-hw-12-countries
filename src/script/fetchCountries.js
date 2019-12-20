import PNotify from 'pnotify/dist/es/PNotify';
import createCountryMarkup from './countryMarkup';
import createListMarkup from './listMarkup';

export default function fetchCountries(country) {
  const url = `https://restcountries.eu/rest/v2/name/${country}`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
  fetch(url, options)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.length === 1) {
        createCountryMarkup(data);
      } else if (data.length > 10) {
        PNotify.error({
          title: 'Opssss!',
          text: 'Too many matches found. Please enter a more specific queary!',
        });
      } else if (data.length < 11){
        createListMarkup(data);
      } else {
        PNotify.error({
          title: 'Opssss!',
          text: 'No matches were found.',
        });
      }
    })
    .catch(error => console.warn('Fetch Error:' + error));
}
