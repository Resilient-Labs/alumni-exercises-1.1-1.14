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
      <h1>statistics</h1>
      <p>good {clicks.good}</p>
      <p>neutral {clicks.neutral}</p>
      <p>bad {clicks.bad}</p>
      <p>all {total}</p>
      <p>average {(clicks.good - clicks.bad) / total}</p>
      <p>positive {clicks.good / total * 100}%</p>
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))