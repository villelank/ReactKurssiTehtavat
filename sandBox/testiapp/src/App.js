import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [counter, setCounter] = useState(100)
  const [name5, setName] = useState("")
  const joukko = ['tero', 'pekka', 'reino', 'einari', 'pieri', 'pani']

  const handleNoteChange = (event) => {
      console.log(event.target.value)
      setNewNote(event.target.value)
  }
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const rows = () => notesToShow.map(note =>
    <Note
      key={note.id}
      note={note}
    />
  )

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toDateString(),
      important: Math.random() > 0.5,
      id: notes.length +1,
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
    console.log(notes)
  }
  
setTimeout(
  () => setName(
      name5.concat("uuno")
  ), 
  5000
)


  const TimeYear = () => (<>{new Date().getUTCFullYear().toString()}</>)
  
  const Numbers = () => {
    const t = [432, 45645,234,76876]
    return (
      t.map(num => (<li key={num}>{num*2}</li>))
    ) 
  }

  setTimeout(
    () => setCounter(counter - 1),
    5000
  )

  const onVidduClick = (value) => {
    return () => {
      setName(value)
    }
  }

  const Hello = ({ name, name2 }) => {
    
    return (
      <>
        <h1>Moro {name} ja {name2}!!!</h1>
        <h1>{joukko.join(', ')}</h1>
        <h2>{counter}</h2>
        <button onClick={onVidduClick('Perseen reikä')}>Lisää viddu</button>
        <p>Nyt on vuosi <TimeYear/> </p> 
        <Numbers/>
        
      </>
    )
  }

  return (
    <div>
      <h1>Muistiinpanot</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <Hello name="Ville" name2="Keijo"/>
      <ul>
        {rows()}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App