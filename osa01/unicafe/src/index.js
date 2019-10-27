import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
} 

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.name}</button>
    </>
  )
}

const Buttons = (props) => {
  return (
    <div>
      <Button name={props.button} onClick={props.onClick}/>
      <Button name={props.button2} onClick={props.onClick2}/>
      <Button name={props.button3} onClick={props.onClick3}/>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title= "give feedback"
  const title2= "statistics"
  
  const handleClickGood = (props) => {
    setGood(good +1)
    console.log(good)
  }
  const handleClickNeutral = (props) => {
    setNeutral(neutral +1)
  }   
  const handleClickBad = (props) => {
    setBad(bad +1)
  }

  console.log('lisatty... good:', good, 'neutral:', neutral, 'bad:', bad)

  return (
    <div>
      <Header title={title}/>
      <Buttons button="good" onClick={handleClickGood} button2="neutral" onClick2={handleClickNeutral} button3="bad" onClick3={handleClickBad}/>
      <Header title={title2} />
      <p>good {good}
      <br/>
      neutral {neutral}
      <br/>
      bad {bad}</p>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
