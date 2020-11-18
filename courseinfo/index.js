// Exercise 1.5 Course Information, Step 5

import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({courseName}) => {
  return (
    <h1>{courseName}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <p>{parts[0].name} {parts[0].exercises}</p>
      <p>{parts[1].name} {parts[1].exercises}</p>
      <p>{parts[2].name} {parts[2].exercises}</p>
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
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

  return (
    <div>
      <Header courseName={course}></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

//---------------------------------------------------------------------------------------------------------

// Exercise 1.4 Course Information, Step 4

import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({courseName}) => {
  return (
    <h1>{courseName}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <p>{parts[0].name} {parts[0].exercises}</p>
      <p>{parts[1].name} {parts[1].exercises}</p>
      <p>{parts[2].name} {parts[2].exercises}</p>
    </div>
  )
}

const Total = ({exercisesTotalSum}) => {
  return (
    <p>Number of exercises {exercisesTotalSum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
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

  return (
    <div>
      <Header courseName={course}></Header>
      <Content parts={parts}></Content>
      <Total exercisesTotalSum={parts[0].exercises + parts[1].exercises + parts[2].exercises}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

//---------------------------------------------------------------------------------------------------------

// Exercise 1.3 Course Information, Step 3

import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({courseName}) => {
  return (
    <h1>{courseName}</h1>
  )
}

const Content = ({part1, part2, part3}) => {
  return (
    <div>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises}</p>
    </div>
  )
}

const Total = ({exercisesTotalSum}) => {
  return (
    <p>Number of exercises {exercisesTotalSum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header courseName={course}></Header>
      <Content part1={part1} part2={part2} part3={part3}></Content>
      <Total exercisesTotalSum={part1.exercises + part2.exercises + part3.exercises}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


//---------------------------------------------------------------------------------------------------------

// Exercise 1.2 Course Information, Step 2

import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({courseName}) => {
  return (
    <h1>{courseName}</h1>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = ({exercisesTotalSum}) => {
  return (
    <p>Number of exercises {exercisesTotalSum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part = [
    {
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
    },
  ]

  return (
    <div>
      <Header courseName={course}></Header>
      <Part part={part[0]}></Part>
      <Part part={part[1]}></Part>
      <Part part={part[2]}></Part>
      <Total exercisesTotalSum={part[0].exercises + part[1].exercises + part[2].exercises}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

//---------------------------------------------------------------------------------------------------------

// Exercise 1.2 Course Information, Step 1

import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({courseName}) => {
  return (
    <h1>{courseName}</h1>
  )
}

const Content = ({part1Prop, exercises1Prop, part2Prop, exercises2Prop, part3Prop, exercises3Prop}) => {
  return (
    <div>
      <p>{part1Prop} {exercises1Prop}</p>
      <p>{part2Prop} {exercises2Prop}</p>
      <p>{part3Prop} {exercises3Prop}</p>
    </div>
  )
}

const Total = ({exercisesTotalSum}) => {
  return (
    <p>Number of exercises {exercisesTotalSum}</p>
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
      <Header courseName={course}></Header>
      <Content part1Prop={part1} exercises1Prop={exercises1} part2Prop={part2} exercises2Prop={exercises2} part3Prop={part3} exercises3Prop={exercises3}></Content>
      <Total exercisesTotalSum={exercises1 + exercises2 + exercises3}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
