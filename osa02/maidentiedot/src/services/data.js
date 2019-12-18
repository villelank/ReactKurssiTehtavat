import axios from 'axios'

const countryDataUrl = 'https://restcountries.eu/rest/v2/all'
const weatherDataUrl = 'http://api.weatherstack.com/current?access_key=72e3e0b63904dd5f0aee09bb956e67b4&query='

const getCountryDataAll = () => {
  const request = axios.get(countryDataUrl)
  return request.then(response => response.data)
}

const getWeatherDataCapital = (name) => {
  const request = axios.get(weatherDataUrl.concat(name))
  return request.then(response => response.data)
}

export default { getCountryDataAll, getWeatherDataCapital }