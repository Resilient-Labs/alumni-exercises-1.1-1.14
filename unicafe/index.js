// Exercise 1.11 Unicafe - Step 6

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => {
  return (
      <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({text, value}) => {
  return (
      <tr>
        <td>{text} {value}</td>
      </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  return (
    <div>
      {
        total ?
          <table>
            <tbody>
              <Statistic text='Good' value={good}></Statistic>
              <Statistic text='Neutral' value={neutral}></Statistic>
              <Statistic text='Bad' value={bad}></Statistic>
              <Statistic text='All' value={total}></Statistic>
              <Statistic text='Average' value={(good- bad)/total}></Statistic>
              <Statistic text='Positive' value={`${(good/total) *100}%`}></Statistic>
            </tbody>
          </table>
          :
          <p>No feedback given</p>
      }
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='Good' handleClick={()=>setGood(good + 1)}></Button>
      <Button text='Neutral' handleClick={()=>setNeutral(neutral + 1)}></Button>
      <Button text='Bad' handleClick={()=>setBad(bad + 1)}></Button>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

//---------------------------------------------------------------------------------------------------------

// Exercise 1.10 Unicafe - Step 5

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => {
  return (
      <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({text, value}) => {
  return (
      <p>{text} {value}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  return (
    <div>
      {
        total ?
          <div>
            <Statistic text='Good' value={good}></Statistic>
            <Statistic text='Neutral' value={neutral}></Statistic>
            <Statistic text='Bad' value={bad}></Statistic>
            <Statistic text='All' value={total}></Statistic>
            <Statistic text='Average' value={(good- bad)/total}></Statistic>
            <Statistic text='Positive' value={`${(good/total) *100}%`}></Statistic>
          </div>
          :
          <p>No feedback given</p>
      }
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='Good' handleClick={()=>setGood(good + 1)}></Button>
      <Button text='Neutral' handleClick={()=>setNeutral(neutral + 1)}></Button>
      <Button text='Bad' handleClick={()=>setBad(bad + 1)}></Button>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

//---------------------------------------------------------------------------------------------------------

// Exercise 1.9 Unicafe - Step 4

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Option = ({text, handleClick}) => {
  return (
      <button onClick={handleClick}>{text}</button>
  )
}

const SubHeader = ({subTitle}) => {
  return (
    <h1>{subTitle}</h1>
  )
}

const Statistic = ({text, value}) => {
  return (
      <p>{text} {value}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  return (
    <div>
      {
        total ?
          <div>
            <Statistic text='Good' value={good}></Statistic>
            <Statistic text='Neutral' value={neutral}></Statistic>
            <Statistic text='Bad' value={bad}></Statistic>
            <Statistic text='All' value={total}></Statistic>
            <Statistic text='Average' value={(good- bad)/total}></Statistic>
            <Statistic text='Positive' value={`${(good/total) *100}%`}></Statistic>
          </div>
          :
          <p>No feedback given</p>
      }
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = "give feedback"
  const subTitle = "statistics"

  return (
    <div>
      <Header title={title}></Header>
      <Option text='Good' handleClick={()=>setGood(good + 1)}></Option>
      <Option text='Neutral' handleClick={()=>setNeutral(neutral + 1)}></Option>
      <Option text='Bad' handleClick={()=>setBad(bad + 1)}></Option>
      <SubHeader subTitle={subTitle}></SubHeader>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

//---------------------------------------------------------------------------------------------------------

// Exercise 1.8 Unicafe - Step 3

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Option = ({text, handleClick}) => {
  return (
      <button onClick={handleClick}>{text}</button>
  )
}

const SubHeader = ({subTitle}) => {
  return (
    <h1>{subTitle}</h1>
  )
}

const Statistic = ({text, value}) => {
  return (
      <p>{text} {value}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  return (
    <div>
      <Statistic text='Good' value={good}></Statistic>
      <Statistic text='Neutral' value={neutral}></Statistic>
      <Statistic text='Bad' value={bad}></Statistic>
      <Statistic text='All' value={total}></Statistic>
      <Statistic text='Average' value={(good- bad)/total}></Statistic>
      <Statistic text='Positive' value={`${(good/total) *100}%`}></Statistic>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = "give feedback"
  const subTitle = "statistics"

  return (
    <div>
      <Header title={title}></Header>
      <Option text='Good' handleClick={()=>setGood(good + 1)}></Option>
      <Option text='Neutral' handleClick={()=>setNeutral(neutral + 1)}></Option>
      <Option text='Bad' handleClick={()=>setBad(bad + 1)}></Option>
      <SubHeader subTitle={subTitle}></SubHeader>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

//---------------------------------------------------------------------------------------------------------

// Exercise 1.7 Unicafe - Step 2

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Option = ({text, handleClick}) => {
  return (
      <button onClick={handleClick}>{text}</button>
  )
}

const SubHeader = ({subTitle}) => {
  return (
    <h1>{subTitle}</h1>
  )
}

const Statistic = ({text, value}) => {
  return (
      <p>{text} {value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = "give feedback"
  const subTitle = "statistics"
  const total = good + bad + neutral

  return (
    <div>
      <Header title={title}></Header>
      <Option text='Good' handleClick={()=>setGood(good + 1)}></Option>
      <Option text='Neutral' handleClick={()=>setNeutral(neutral + 1)}></Option>
      <Option text='Bad' handleClick={()=>setBad(bad + 1)}></Option>
      <SubHeader subTitle={subTitle}></SubHeader>
      <Statistic text='Good' value={good}></Statistic>
      <Statistic text='Neutral' value={neutral}></Statistic>
      <Statistic text='Bad' value={bad}></Statistic>
      <Statistic text='All' value={total}></Statistic>
      <Statistic text='Average' value={(good- bad)/total}></Statistic>
      <Statistic text='Positive' value={`${(good/total) *100}%`}></Statistic>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

//---------------------------------------------------------------------------------------------------------

// Exercise 1.6 Unicafe - Step 1

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Option = ({text, handleClick}) => {
  return (
      <button onClick={handleClick}>{text}</button>
  )
}

const SubHeader = ({subTitle}) => {
  return (
    <h1>{subTitle}</h1>
  )
}

const Statistic = ({text, value}) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = "give feedback"
  const subTitle = "statistics"

  return (
    <div>
      <Header title={title}></Header>
      <Option text='Good' handleClick={()=>setGood(good + 1)}></Option>
      <Option text='Neutral' handleClick={()=>setNeutral(neutral + 1)}></Option>
      <Option text='Bad' handleClick={()=>setBad(bad + 1)}></Option>
      <SubHeader subTitle={subTitle}></SubHeader>
      <Statistic text='Good' value={good}></Statistic>
      <Statistic text='Neutral' value={neutral}></Statistic>
      <Statistic text='Bad' value={bad}></Statistic>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
