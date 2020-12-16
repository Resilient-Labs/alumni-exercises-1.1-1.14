import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const goodClicks = () => 
    setClicks({...clicks, good: clicks.good + 1}) 

  const neutralClicks = () => 
    setClicks({...clicks, neutral: clicks.neutral + 1})

    const badClicks = () => 
    setClicks({...clicks, bad: clicks.bad + 1})

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodClicks}>
        good
      </button>
      <button onClick={neutralClicks}>
        neutral
      </button>
      <button onClick={badClicks}>
        bad
      </button>
      <h1>statistics</h1>
      <p>good {clicks.good}</p>
      <p>neutral {clicks.neutral}</p>
      <p>bad {clicks.bad}</p>
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))