import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {
  const getAllVotes = () => {
    return good + neutral + bad
  }

  const getAverage = () => {
    return (good - bad) / getAllVotes() || 0
  }

  const getPositive = () => {
    return `${(good / getAllVotes() || 0) * 100} %`
  }

  return (
    <div>
      <h1>Statistics</h1>

      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{getAllVotes()}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{getAverage()}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{getPositive()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = ({target}) => {
    console.log(target.innerText);
    switch (target.innerText) {
      case 'good':
        setGood(good + 1)
        break
      case 'neutral':
        setNeutral(neutral + 1)
        break
      case 'bad':
        setBad(bad + 1)
        break
      default:
        break
    }
    
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleClick}>good</button>
      <button onClick={handleClick}>neutral</button>
      <button onClick={handleClick}>bad</button>

      { good || neutral || bad ? <Statistics good={good} neutral={neutral} bad={bad}/> : <div><h1>Statistics</h1><p>none</p></div> }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)