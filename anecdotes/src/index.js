import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Button from "./components/Button"
import Anecdote from "./components/Anecdote"

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
]

const App = props => {
 
  const initialVotes = Array(props.anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVotes)
  const [mostVoted, setMostVoted] = useState(0)

  
  const generateRandomNum = () => Math.floor(Math.random() * 6)

  const handleClick = () => {
    let randomNum = generateRandomNum()
    while (randomNum === selected) {
      randomNum = generateRandomNum()
    }
    setSelected(randomNum)
  }

  const updateVote = () => {
    let updatedVotes = [...votes]
    updatedVotes[selected]++
    setVotes(updatedVotes)
  }


  useEffect(() => {
    const anecdote = votes.indexOf(Math.max(...votes))
    if (votes[anecdote] <= votes[mostVoted]) return
    setMostVoted(anecdote)
  }, [votes, mostVoted])

  return (
    <div>
      <Anecdote
        element="h1"
        title="Anecdote of the day"
        anecdote={props.anecdotes[selected]}
        voteScore={votes[selected]}
      />
      <Button onClick={updateVote}>
        Vote
      </Button>
      <Button onClick={handleClick}>
        Next anecdote
      </Button>
      {votes[mostVoted] === 0 ? null : (
        <Anecdote
          title="Anecdote with most votes"
          anecdote={props.anecdotes[mostVoted]}
          voteScore={votes[mostVoted]}
        />
      )}
    </div>
  )
}

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"))