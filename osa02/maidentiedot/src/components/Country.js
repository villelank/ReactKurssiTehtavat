import React from 'react'

const Country = ({ id, name, showCountry }) => (
  <div>
    {name} <button value={id} onClick={showCountry}>show more info</button>
  </div> 
)

export default Country