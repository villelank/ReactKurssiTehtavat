import React, { useState, useEffect } from 'react'
import axious from 'axios'

const Country = ({ name }) => (
  <div>{name}</div>
)

const CountryInfo = ({ name, languages, flag, capital, population} ) => (
  <div>
    <h1>{name}</h1>
    <p>
      capital {capital} <br/>
      population {population}
    </p>
    <h2>Languages</h2>
    <p>{languages}</p>
    <img src={flag} alt="here is a picture of a flag" height="80" width="auto"></img>
  </div>
)



const Countries = ({ countries, newSeacrh }) => {

  const filteredCountries = countries.filter(country => country.name.toLowerCase()
  .includes(newSeacrh.toLowerCase()))

  const searchedCountries =
    filteredCountries
    .map(country => <Country key={country.alpha3Code} name={country.name}/>)
  
  if(filteredCountries.length === 1) {
    return <CountryInfo 
      name={filteredCountries[0].name} 
      languages={filteredCountries[0].languages.map(lan => <li key = {lan.name}>{lan.name}</li>)} 
      flag={filteredCountries[0].flag}
      population={filteredCountries[0].population}
      capital={filteredCountries[0].capital}
      />
  } else if(filteredCountries.length <= 10) {
    return searchedCountries
  } else if(newSeacrh.length > 0){
    return "too much " + filteredCountries.length
  } else {
    return""
  }

}
console.log()
const App = (prorp) => {
  const [countriesData, setCountriesData] = useState([])
  const [ newSeacrh, setNewSearch ] = useState('')
  const [ newResultInfo, setResultInfo ] = useState('')

  const hook = () => {
    axious
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountriesData(response.data)
    })
  }

  useEffect(hook, [])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    
  }

  const countryNames = (countriesData.map(country => country.name))
  console.log(countriesData.length)

  return (
    <div>
      find countires <input value={newSeacrh} onChange={handleSearchChange}/>
      <br/>
      <Countries countries={countriesData} newSeacrh={newSeacrh} newResultInfo={newResultInfo}/>
      
    </div>
  );
}

export default App;
