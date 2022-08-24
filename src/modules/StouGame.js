// Create a new id unique -> Go to the browser and check the console
// eslint-disable-next-line
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Pacman',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  // eslint-disable-next-line
  .then((json) => console.log(json));
