
import React, { useState } from "react";
import ReactDOM from "react-dom";


const Title = ({ children, element = "h2" }) => {
  const Element = element;
  return <Element>{children}</Element>;
};

const Button = ({ children, onClick }) => (
  <button onClick={onClick}>
    {children}
  </button>
);

const Statistic = ({ text, value }) => (
  <div>
    <p>{text}</p>
    <p>{value}</p>
  </div>
);

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return <p>No feedback given.</p>;
  } else {
    return (
      <div>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="All" value={total} />
        <Statistic text="Average" value={average} />
        <Statistic text="Positive" value={positive} />
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total
    ? ((good * 1 + neutral * 0 + bad * -1) / total).toFixed(1)
    : 0;
  const positive = total ? `${((good / total) * 100).toFixed(1)}%` : "0%";

  const handleSetGood = () => setGood(value => value + 1)
  const handleSetNeutral = () => setNeutral(value => value + 1)
  const handleSetBad = () => setBad(value => value + 1)

  return (
    <div >
      <Title element="h1">Give feedback</Title>
      <div>
        <Button onClick={handleSetGood}>
          Good
        </Button>
        <Button onClick={handleSetNeutral}>
          Neutral
        </Button>
        <Button onClick={handleSetBad}>
          Bad
        </Button>
      </div>
      <Title>Statistics</Title>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
