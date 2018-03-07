import axios from 'axios';

const API_KEY = 'e913e57d83ec09c683c6f4d78b08a730';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}&q=`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}${city},us`;
  const request = axios.get(url); //behaves just like the jquery ajax call
  console.log(`Request is ${request}`);
  //payload (request) is a promise. and redux promise middleware just
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
