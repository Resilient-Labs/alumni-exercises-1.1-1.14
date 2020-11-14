import React from "react"
import Title from "./Title"
import AnecdoteBody from "./AnecdoteBody"

const Anecdote = ({ element, title, anecdote, voteScore }) => (
    <>
      <Title element={element} title={title} />
      <AnecdoteBody anecdote={anecdote} voteScore={voteScore} />
    </>
  )

  export default Anecdote