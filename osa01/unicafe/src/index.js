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

const Statistic = (props) => {
  return (
    <>
    {props.text} {props.values}  <br/>
    </>
  )
}

const Statistics = (props) => {
  let all = props.good + props.bad + props.neutral
  let average = (props.good - props.bad) / all
  let positive = props.good / all * 100
  if(all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div> 
      <Statistic text="good" values={props.good}/>
      <Statistic text="neutral" values={props.neutral}/>
      <Statistic text="bad" values={props.bad}/>
      <Statistic text="all" values={all}/>
      <Statistic text="average" values={average}/>
      <Statistic text="positive" values={positive}/>
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

  return (
    <div>
      <Header title={title}/>
      <Buttons button="good" onClick={handleClickGood} button2="neutral" onClick2={handleClickNeutral} button3="bad" onClick3={handleClickBad}/>
      <Header title={title2} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
