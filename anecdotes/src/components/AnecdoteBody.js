import React from "react"
import AnecdoteText from "./AnecdoteText"
import Vote from "./Vote"

const AnecdoteBody = ({ anecdote, voteScore }) => (
    <div>
      <AnecdoteText anecdote={anecdote} />
      <Vote voteScore={voteScore} />
    </div>
)

export default AnecdoteBody