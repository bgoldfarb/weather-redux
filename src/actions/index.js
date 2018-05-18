import keys from '../../keys'

//variable to hold action type
export const FETCH_WEATHER = 'FETCH_WEATHER'

const API_KEY = keys.API_KEY

export function fetchWeather(){
    return {
        type: FETCH_WEATHER
    }
}