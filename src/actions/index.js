// TODO: add and export your own actions
const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: 'FETCH_CARS',
    payload: promise
  };
}

export function removeCar(history, car) {
  const url = `${BASE_URL}/cars/${car.id}`;
  fetch(url, { method: 'DELETE' })
    .then(response => response.json())
    .then(() => history.push(""));

  return {
    type: 'REMOVE_CAR',
    payload: car
  };
}
