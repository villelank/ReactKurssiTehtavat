import React from 'react'
import Country from './Country'
import CountryInfo from './CountryInfo'

const Countries = ({ countries, newSeacrh, clickedCountry, setClickedCountry}) => {

  const filteredCountries = countries.filter(country => country.name.toLowerCase()
  .includes(newSeacrh.toLowerCase()))

  const handleShowCountryClick = (event) => {
    const clickedCountry = countries.filter(country => country.alpha3Code === event.target.value)
    setClickedCountry(clickedCountry)
  }

  const searchedCountries =
    filteredCountries
    .map(country => 
    <Country key={country.alpha3Code} id={country.alpha3Code} name={country.name} showCountry={handleShowCountryClick}/>)

  if(filteredCountries.length === 1) {
    return <CountryInfo 
      name={filteredCountries[0].name} 
      languages={filteredCountries[0].languages.map(lan => <li key = {lan.name}>{lan.name}</li>)} 
      flag={filteredCountries[0].flag}
      population={filteredCountries[0].population}
      capital={filteredCountries[0].capital}
      />
  } else if(filteredCountries.length <= 10 && clickedCountry !== null) {
    return <CountryInfo 
    name={clickedCountry[0].name} 
    languages={clickedCountry[0].languages.map(lan => <li key = {lan.name}>{lan.name}</li>)} 
    flag={clickedCountry[0].flag}
    population={clickedCountry[0].population}
    capital={clickedCountry[0].capital}
    />
  } else if(filteredCountries.length <= 10) {
    return searchedCountries
  } else if(newSeacrh.length > 0){
    return "too much " + filteredCountries.length
  } else {
    return""
  }
}

export default Countries