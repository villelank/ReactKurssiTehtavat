import React from 'react'
import ReactDOM from 'react-dom'

const Header = (course) => {
    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    )
    
}

const Content = (props) => {
    return (
        <div>
            <Part name={props.partName1} exercises={props.partExercises1}/>
            <Part name={props.partName2} exercises={props.partExercises2}/>
            <Part name={props.partName3} exercises={props.partExercises3}/>
        </div>
    )
}

const Part = (part) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Total = (total) => {
    return (
        <p>Number of exercises {total.sum}</p>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
      <div>
            <Header name = {course}/>
            <Content partName1 = {part1} partExercises1 = {exercises1} partName2 = {part2} partExercises2 = {exercises2} partName3 = {part3} partExercises3 = {exercises3}/>
            <Total sum = {exercises1 + exercises2 + exercises3}/>
      </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))