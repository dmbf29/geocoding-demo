import { injectCoordinates, injectMap } from './geocode';

const formElement = document.getElementById('searchForm');
formElement.addEventListener('submit', (event) => {
  // prevent form's default behavior
  event.preventDefault();

  // get input value
  const address = document.getElementById('address').value;

  // trigger request to Google Maps API
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCGWaHvfRuXVTLj4h7xkwl4ZcmZaWkWf5k`)
    .then(response => response.json())
    .then((data) => {
      console.log(data.results[0  ])
      const coordinates = data.results[0].geometry.location;
      injectCoordinates(coordinates);
      injectMap(coordinates);
    });
});
