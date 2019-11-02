import React from 'react'

const Course = ({course}) => (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}  />
      <Total parts={course.parts} />
    </div>
  )

const Header = props =>
  <h2>{props.course}</h2>
  

const Content = props => ( 
  props.parts.map(prop=> <Part key = {prop.id} part={prop} />)
)

const Part = props =>
  <p>{props.part.name} {props.part.exercises} </p>


const Total = props => {
  const total = props.parts.reduce((sum, current) => 
    sum + current.exercises,0)
  //const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  console.log("total sum", total)
  return <p><b>Total of {total} exercises </b></p>
}

  export default Course