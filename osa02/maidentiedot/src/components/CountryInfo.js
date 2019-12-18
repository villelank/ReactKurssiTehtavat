import React from 'react'


const CountryInfo = ({ name, languages, flag, capital, population } ) => {

  return (
    <div>
      <h1>{name}</h1>
      <p>
        capital {capital} <br/>
        population {population}
      </p>
      <h2>Languages</h2>
      <p>{languages}</p>
      <img src={flag} alt="flag" height="80" width="auto"></img>
    </div>
  )
}

export default CountryInfo