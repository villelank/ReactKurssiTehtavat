import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
} 

const Button = ({ onClick, name }) => {
  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  )
}

const Buttons = ({ buttonGood, buttonNeutral, buttonBad, onClickGood, onClickNeutral, onClickBad }) => {
  return (
    <div>
      <Button name={buttonGood} onClick={onClickGood}/>
      <Button name={buttonNeutral} onClick={onClickNeutral}/>
      <Button name={buttonBad} onClick={onClickBad}/>
    </div>
  )
}

const Statistic = ( { text, values }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{values}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const Statistics = ( { good, neutral, bad }) => {
  let all = good + bad + neutral
  let average = (good - bad) / all
  let positive = good / all * 100 + " %"
  if(all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div> 
      <Statistic text="good" values={good}/>
      <Statistic text="neutral" values={neutral}/>
      <Statistic text="bad" values={bad}/>
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
  
  const handleClickGood = () => setGood(good +1)
  const handleClickNeutral = () => setNeutral(neutral +1)
  const handleClickBad = () => setBad(bad +1)

  return (
    <div>
      <Header title={title}/>
      <Buttons buttonGood="good" onClickGood={handleClickGood} buttonNeutral="neutral" onClickNeutral={handleClickNeutral} buttonBad="bad" onClickBad={handleClickBad}/>
      <Header title={title2} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
