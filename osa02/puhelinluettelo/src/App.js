import React, { useState } from 'react'

const Person = props =>
  <p>{props.name} {props.number}</p>

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '050-000000' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

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
  
  const Rows = props => (
    props.persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
      .map(person => <Person key={person.name} name={person.name} number={person.number}/>)
  )
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={newFilter} onChange={handleFilterChange}/>
      </div>
      <form onSubmit={addName}>
        <div>
          <h2>add a new</h2>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Rows persons={persons} />
    </div>
    
  )

}

export default App