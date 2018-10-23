import axios from 'axios';


const WEATHER_API_KEY = 'f92d12a536a903516bfb2edbf00d8aa7';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url)
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
