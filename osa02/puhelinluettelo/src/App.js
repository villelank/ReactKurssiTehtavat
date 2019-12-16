import React, { useState, useEffect } from 'react'
import personService from './services/persons.js'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ message, setMessage ] = useState([null, null])

  const hook = () => {
    console.log('effect')
    personService
      .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
        })
        .catch(error => {
          setMessage(['Tietoja ei saatu palvelimelta', 'error'])
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
  
  const deletePerson = (id) => {
    const personToDelete = persons.filter(person => person.id === id)
    if(window.confirm('Haluatko varmasti poistaa henkilön ' + personToDelete[0].name + ' puhelinluettelosta?')){
      console.log('poistetaan', personToDelete[0].name)
      personService
      .deletePerson(id)
      .then(returned => {
        setPersons(persons.filter(person => person.id !== id))
        setMessage([personToDelete[0].name + ' on poistettu puhelinluettelosta', 'ok'])
        setTimeout(() => {
          setMessage([null, null])
        }, 5000);
      })
      .catch(error => {
        setMessage(['Henkilön ' + personToDelete[0].name + ' poistaminen ei onnistunut', 'error'])
        setPersons(persons.filter(person => person.id !== id))
      })
    }
    
  }

  const addName = (event) => {
    event.preventDefault()
    let isInList = false
    let isInListId;
    persons.forEach(person => {
      if(person.name === newName) {
        isInList=true
        isInListId = person.id
      } 
    });

    if(isInList){
      const confirmMsg = `${newName} on jo puhelinluettelossa. Haluatko vaihtaa hänen puhelinnumeronsa?`
      if(window.confirm(confirmMsg)){
        const nameObject = {
          name: newName,
          number: newNumber
        }
        personService
          .update(isInListId, nameObject)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.id !== isInListId ? person : returnedPerson))
              setMessage(['Henkilön ' + returnedPerson.name + ' puhelinnumero on päivitetty', 'ok'])
              setTimeout(() => {
                setMessage([null, null])
              }, 5000);
            })
            .catch(error => {
              setMessage(['Päivittäminen epäonnistui. Henkilöä ' + nameObject.name + ' ei enää ole palvelimella', 'error'])
              setPersons(persons.filter(person => person.id !== isInListId))
            })
        setNewName('')
        setNewNumber('')
      }
      
    } else {
        const nameObject = {
          name: newName,
          number: newNumber
        }
        personService
          .create(nameObject)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              setMessage(['Lisätty ' + returnedPerson.name + '  puhelinluetteloon','ok'])
              setTimeout(() => {
                setMessage([null, null])
              }, 5000);
            })
            .catch(error => {
              setMessage(['Henkilön ' + nameObject.name + ' lisääminen epäonnistui', 'error'])
              setPersons(persons.filter(persons))
            })
        setNewName('')
        setNewNumber('')
      }         
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message[0]} type={message[1]}/>
      <Filter filterValue={newFilter} handleFilterChange={handleFilterChange}/>
      <h3>add a new</h3>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>      
      <h3>Numbers</h3>
      <Persons persons={persons} newFilter={newFilter} deletePerson={deletePerson}/>
    </div>
  )

}

export default App