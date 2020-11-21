import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Content = ({parts}) => {
  console.log(parts);
  return (
    <div>
      <p>
        {parts.parts[0].name} {parts.parts[0].exercises}
      </p>
      <p>
        {parts.parts[1].name} {parts.parts[1].exercises}
      </p>
      <p>
        {parts.parts[2].name} {parts.parts[2].exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {
        props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises
      } </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

ReactDOM.render( < App / > , document.getElementById('root'))