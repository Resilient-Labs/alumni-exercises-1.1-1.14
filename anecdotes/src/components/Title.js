import React from 'react'

const Title = ({ element = "h2", title }) => {
    const Element = element
    return <Element>{title}</Element>
}

export default Title