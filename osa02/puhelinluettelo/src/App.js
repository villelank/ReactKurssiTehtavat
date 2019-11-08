import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Person = props =>
  <p>{props.name} {props.number}</p>

const Persons = ({persons, newFilter}) => (
  persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
    .map(person => <Person key={person.name} name={person.name} number={person.number}/>)
)

const Filter = ({filterValue, handleFilterChange}) => (
  <div>
    filter shown with <input value={filterValue} onChange={handleFilterChange}/>
  </div>
)

const PersonForm = ({addName, newName, newNumber, handleNameChange, handleNumberChange}) => (
  <form onSubmit={addName}>
    <div>
      name: <input value={newName} onChange={handleNameChange}/>
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberChange}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  
  const addName = (event) => {
    event.preventDefault()
    let isInList = false
    persons.forEach(person => {
      if(person.name === newName) isInList=true
    });
    
    if(isInList) {
      const alertMsg = `${newName} is already added to phonebook`
      window.alert(alertMsg)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }         
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={newFilter} handleFilterChange={handleFilterChange}/>
      <h3>add a new</h3>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>      
      <h3>Numbers</h3>
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  )

}

export default App