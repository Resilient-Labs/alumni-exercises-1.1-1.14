
import React, { useState } from 'react'
import Statistics from './Statistics'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
} 


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const allFeedback = good + bad + neutral;
  const average = (good - bad)  / allFeedback;
  const positive =  Math.floor(( good / allFeedback) * 100) + "%";
 
  return (
    <div>
      <h1> Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />    
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />   
      <Button handleClick={() => setBad(bad + 1)} text= "bad"/>
      <Statistics average={average} positive={positive} allFeedback={allFeedback} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
