// TODO: add and export your own actions
const baseUrl = 'https://wagon-garage-api.herokuapp.com';

export function fetchCars(garage) {
  const url = `${baseUrl}/${garage}/cars`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: 'FETCH_CARS',
    payload: promise
  };
}
