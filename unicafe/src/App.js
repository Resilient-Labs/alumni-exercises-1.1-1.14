import React, { useState, } from 'react'

const Statistic = ({ text, value }) => {
  return (
  
     // <tr><td>{text}</td></tr> <tr><td>{value}</td></tr>
    //  <tr>
    //   <td>{text}</td><td>{value} </td>
    // </tr>
    <p>{text}:     {value}</p>
    
  )
}

const Statistics = ({ good, neutral, bad, total, average }) => {
  return (
    total ?
      <div>
        <h2>Statistics</h2>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <table>
          <tbody>
            <tr><td>total feedback: {total}</td></tr>
            <tr><td>average: {average}</td></tr>
            <tr><td>positive: {Math.floor(good / total * 100)}%</td></tr>
          </tbody>
        </table>
      </div>
      :
      <p>No FeedBack Given</p>
  )

}

const Button = ({handelClick, text}) => {
  return (

      <button type="button" onClick={handelClick}>{text}</button>

  )
}

function App() {
  const [good, setGood,] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = bad + good + neutral
  //let average = ((bad * -1) + good + (neutral*0));
  let average = (good - bad ) / total


  return (
    <div>
      <h1> Give Feed Back </h1>
      <Button handelClick={() => setGood(good + 1)} text="good" />
      <Button handelClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handelClick={() => setBad(bad + 1)} text="bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
      />



    </div>
  );
}

export default App;


