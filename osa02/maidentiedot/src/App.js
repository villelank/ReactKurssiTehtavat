import React, { useState, useEffect } from 'react'
import dataService from './services/data.js'
import Countries from './components/Countries'

const App = () => {
  const [ countriesData, setCountriesData ] = useState([])
  const [ newSeacrh, setNewSearch ] = useState('')
  const [ clickedCountry, setClickedCountry ] = useState(null)

  const getCountriesData = () => {
    dataService
      .getCountryDataAll()
      .then(returned => {
        setCountriesData(returned)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(getCountriesData, [])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    setClickedCountry(null)
  }

  return (
    <div>
      find countries <input value={newSeacrh} onChange={handleSearchChange}/>
      <br/>
      <Countries countries={countriesData} newSeacrh={newSeacrh} clickedCountry={clickedCountry} setClickedCountry={setClickedCountry}/>
      
    </div>
  );
}

export default App;
