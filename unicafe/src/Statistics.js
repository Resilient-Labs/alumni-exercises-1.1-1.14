import React from 'react';


const Statistic = ({ text, value }) => {
    return (
      <div>
        <p>{text}: {value}</p>
      </div>
    )
  }

const Statistics = (props) => {
    // save clicks of each button to its own state
    const { good, neutral, bad, allFeedback, average, positive } = props;


    return (
        allFeedback ?
            <div>
                <h1>Statistics</h1>
                <Statistic text="good" value={good}/>
                <Statistic text="neutral" value={neutral}/>
                <Statistic text="bad" value={neutral}/>
                <table>
                    <tbody>
                        <tr><td>Good {good} </td></tr>
                        <tr><td>Neutral {neutral}</td></tr>
                        <tr><td>Bad {bad}</td></tr>
                        <tr><td>All {allFeedback} </td></tr>
                        <tr><td>Average {average} </td></tr>
                        <tr><td>Positive {positive}</td></tr>

                    </tbody>


                </table>

            </div>
            :
            <p> NO FEED BACK GIVEN</p>

    )
}

export default Statistics;