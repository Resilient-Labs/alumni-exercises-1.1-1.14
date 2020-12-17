import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  return(
    <h1>give feedback</h1>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => {
  return (
      <p>{text} {value}</p>
  )
}

const Statistics = (props) => { 
  if(props.total === 0) {
    return(
      <div>
        <h3>No feedback given</h3>
      </div>
    )
  }
  return(
    <div>
      <Statistic text='good' value={props.good} />
      <Statistic text='neutral' value={props.neutral} />
      <Statistic text='bad' value={props.bad} />
      <Statistic text='all' value={props.total} />
      <Statistic text='average' value={(props.good - props.bad) / props.total} />
      <Statistic text='positive' value={`${props.good / props.total * 100}%`} />
    </div>
  ) 
}

const App = () => {
  const [clicks, setClicks] = useState(
    { good: 0, neutral: 0, bad: 0
  }) 


  const total = clicks.good + clicks.neutral + clicks.bad

  const goodClicks = () => 
    setClicks({...clicks, good: clicks.good + 1}) 

  const neutralClicks = () => 
    setClicks({...clicks, neutral: clicks.neutral + 1})

    const badClicks = () => 
    setClicks({...clicks, bad: clicks.bad + 1})


  return (
    <div>
      <Header />
      <Button onClick={goodClicks} text='good' />
      <Button onClick={neutralClicks} text='neutral' />
      <Button onClick={badClicks} text='bad' />
      <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} total={total} />
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))