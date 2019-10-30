import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ( {onClick, text}  ) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const Header = ( {text} ) => {
  return (
  <>
    <h1>{text}</h1>
  </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const pointsStart = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)
  const [points, setPoints] = useState(pointsStart)
  const [maxSelected, setMaxPoints] = useState(0)
  const anecdoteClick = () => setSelected( Math.floor(Math.random() * anecdotes.length) )
  const title1 = "Anecdote of the day"
  const title2 = "Anecdote with most votes"

  
  const voteClick = () => {
    const copy = {...points}
    copy[selected] +=1
    setPoints(copy)

    //katsotaan missä indeksissä (copy) on isoin arvo
    for (let i = 0; i < 6; i++) {
      if(copy[i] > copy[maxSelected]) {
        setMaxPoints(i)
      }
    }

  }

  console.log(points)

  return (
    <div>
      <Header text={title1} />
      {props.anecdotes[selected]}
      <div>
        <Button text="vote" onClick={voteClick}/>
        <Button text="next anecdote" onClick={anecdoteClick}/>
      </div>
      <Header text={title2} />
      {props.anecdotes[maxSelected]} <br/>has {points[maxSelected]} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)