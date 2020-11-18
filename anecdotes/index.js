// Exercise 1.14 Anecdotes - Step 3

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [selected, setSelected] = useState(0)
  const selectRandomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  
  // Stores votes of each anecdote in an initial zero-filled array of 
  // length equal to the quantity of indexes in the anecdotes array
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  
  // Function to store votes and increment votes of each index position
  // by one in each array index that started as a zero, each index is an anecdote
  const incrementVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes)
  }

  // Function that finds the index of the anecdote within the array that contains the most number of votes
  const findMaxVotedAnecdote = () => votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={incrementVote}>vote</button>
      <button onClick={selectRandomAnecdote}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[findMaxVotedAnecdote()]}</p>
      <p>has {votes[findMaxVotedAnecdote()]} votes</p>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

//---------------------------------------------------------------------------------------------------------

// Exercise 1.13 Anecdotes - Step 2

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [selected, setSelected] = useState(0)
  const selectRandomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  
  // Stores votes of each anecdote in an initial zero-filled array of 
  // length equal to the quantity of indexes in the anecdotes array
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  
  // Function to store votes and increment votes of each index position
  // by one in each array index that started as a zero, each index is an anecdote
  const incrementVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={incrementVote}>vote</button>
      <button onClick={selectRandomAnecdote}>next anecdote</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

//---------------------------------------------------------------------------------------------------------

// Exercise 1.12 Anecdotes - Step 1

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const selectRandomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <button onClick={selectRandomAnecdote}>next anecdote</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
