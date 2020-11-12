import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.name} </td><td> {props.value} </td>
    </tr>

  )
}

const Statistics = (props) => {

  let { good, bad, neutral } = props

  const total = good + bad + neutral

  return (
    total ?
      <div><table><tbody>
        <Statistic name="good" value={good} />
        <Statistic name="neutral" value={neutral} />
        <Statistic name="bad" value={bad} />
        <tr><td>total</td><td> {total} </td></tr>
        <tr><td>average</td><td> {(good - bad) / total} </td></tr>
        <tr><td>positive</td><td> {100 * good / total}%</td></tr>
      </tbody></table>
      </div>
      :
      <p>no feedback given</p>
  )
}

const Button = (props) => {

  return (
    <button onClick={props.handleclick} type="button">{props.text}</button>
  )
}

const App = () => {
  // buttons have their own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (

    <div>
      <h1>give feedback:</h1>
      <Button handleclick={() => setGood(good + 1)} text="good" />
      <Button handleclick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleclick={() => setBad(bad + 1)} text="bad" />
      <h2>statistics:</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;

