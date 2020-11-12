import React, { useState } from 'react'

function App() {
  // state hook for selected and setSelected. 
  //selected starting value is 0 
  const [selected, setSelected] = useState(0);

  //anecdotes array
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];

  // length of anecdotes array
  const anecdotesLength = anecdotes.length;

  // state hook for vote and set vote.  
  // vote starting value is an array filled with 0's
  const [vote, setVotes] = useState(Array(anecdotesLength).fill(0));

  // event to set selected to a random number 
  const handleClickAnecdotes = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  // index of greatest vote of the vote array
  let IndexOfGreatestVote = vote.indexOf(Math.max(...vote))

  // event to updates votes
  const handleClickVotes = () => {
    // mutation of state directly is forbiden: make copy of vote 
    const copyOfVotes = [...vote]

    // add one vote to the seleceted anecdote
    copyOfVotes[selected] += 1

    // update vote
    setVotes(copyOfVotes)

  }

  return (
    <div >
      <h1>Anecdote Of The Day</h1>

      {/* passes selected ( a random number) to anecdotes, and displays how many votes it has */}
      <p>"{anecdotes[selected]}", has {vote[selected]} votes</p>

      {/* update seleceted to a new random number  */}
      <button onClick={handleClickAnecdotes}>Next anecdotes</button>

      {/* updates adds one to vote of the current anecdote */}
      <button onClick={handleClickVotes}>Vote</button>

      <h2>Anecdotes With The Most Votes</h2>

      {/* passes IndexOfGreatestVote to anecdotes to get the anecdote with the highest vote, and displays how many votes it has   */}
      <p>"{anecdotes[IndexOfGreatestVote]}", has {[Math.max(...vote)]} votes</p>
    </div>
  );
}

export default App;