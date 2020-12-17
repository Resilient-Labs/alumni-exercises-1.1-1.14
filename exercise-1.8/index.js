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

const Statistics = (props) => { 
  return(
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {(props.good - props.bad) / props.total}</p>
      <p>positive {props.good / props.total * 100}%</p>
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