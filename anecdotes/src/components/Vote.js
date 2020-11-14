import React from 'react'

const Vote = ({ voteScore }) => {
    return (
      <span>
        {voteScore === 1 ? `has ${voteScore} vote` : `has ${voteScore} votes`}
      </span>
    )
}

export default Vote