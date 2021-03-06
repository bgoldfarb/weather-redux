import {keys} from '../../keys'
import axios from 'axios'

//variable to hold action type
export const FETCH_WEATHER = 'FETCH_WEATHER'

const API_KEY = keys.API_KEY

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`


export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}