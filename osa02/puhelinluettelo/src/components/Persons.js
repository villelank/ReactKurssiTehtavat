import React from 'react'
import Person from './Person'

const Persons = ({persons, newFilter, deletePerson}) => {
  return (
  persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
    .map(person => <Person key={person.name} name={person.name} number={person.number} id={person.id} deletePerson={deletePerson}/>)
  )
}

export default Persons