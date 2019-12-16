import React from 'react'

const Person = ({name, number, id, deletePerson}) => {
  return(
  <p>
    {name} {number} <button onClick={() => deletePerson(id)}>delete</button>
  </p>
  )
}

export default Person