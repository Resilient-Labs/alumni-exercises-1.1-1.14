//Finish code 1.14
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const App = (props) => {
//   const [selected, setSelected] = useState(0)

//   const anecdotesLength = anecdotes.length

//   const handleClickAnecdotes = () => {
//     setSelected(Math.floor(Math.random() * anecdotesLength))
//   }


//   const [points, setPoints] = useState(Array(anecdotesLength).fill(0))

//   const handleClickPoints = () => {
//     const copyOfPoints = [...points]

//     copyOfPoints[selected] += 1 

//     setPoints(copyOfPoints)  
//   }

//   let indexOfGreatestPoints = points.indexOf(Math.max(...points))

//   return (
//     <div>
//       <h1>Anecdotes of the Day</h1>
//       <p>"{props.anecdotes[selected]}", has {points[selected]} votes</p>
//       <button onClick={handleClickAnecdotes}>Next Anecdotes</button>
//       <button onClick={handleClickPoints}>Votes</button>
//       <h2> Anecdotes with the most Votes</h2>
//       <p>"{anecdotes[indexOfGreatestPoints]}", has {[Math.max(...points)]} votes</p>
//     </div>
//   )
// }

// const anecdotes = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// ReactDOM.render(
//   <App anecdotes={anecdotes} />,
//   document.getElementById('root')
// )


//-----------------------------------------------------------------------
// Exercise 1.10 
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const Header = ({title}) => {
//   return (
//     <h1>{title}</h1>
//   )
// }
// const Option = ({text, handleClick}) => {
//   return (
//       <button onClick={handleClick}>{text}</button>
//   )
// }

// const SubHeader = ({subTitle}) => {
//   return (
//     <h1>{subTitle}</h1>
//   )
// }
// const Statistic = ({text, value}) => {
//   return (
//       <p>{text} {value}</p>
//   )
// }
// const Statistics = ({good, neutral, bad}) => {
//   const total = good + neutral + bad;
//   return (
//     <div>
//       {
//         total ?
//           <div>
//             <Statistic text='Good' value={good}></Statistic>
//             <Statistic text='Neutral' value={neutral}></Statistic>
//             <Statistic text='Bad' value={bad}></Statistic>
//             <Statistic text='All' value={total}></Statistic>
//             <Statistic text='Average' value={(good- bad)/total}></Statistic>
//             <Statistic text='Positive' value={`${(good/total) *100}%`}></Statistic>
//           </div>
//           :
//           <p>No feedback given</p>
//       }
//     </div>
//   )
// }
// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const title = "give feedback"
//   const subTitle = "statistics"


//   return (
//     <div>
//       <Header title={title}></Header>
//       <Option text='Good' handleClick={()=>setGood(good + 1)}></Option>
//       <Option text='Neutral' handleClick={()=>setNeutral(neutral + 1)}></Option>
//       <Option text='Bad' handleClick={()=>setBad(bad + 1)}></Option>
//       <SubHeader subTitle={subTitle}></SubHeader>
//       <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
//     </div>
//   )
// }
// ReactDOM.render(<App />, 
//   document.getElementById('root')
// )


//----------------------------------------------------------------------
// Exercise 1.9
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const Header = ({title}) => {
//   return (
//     <h1>{title}</h1>
//   )
// }
// const Option = ({text, handleClick}) => {
//   return (
//       <button onClick={handleClick}>{text}</button>
//   )
// }
// const SubHeader = ({subTitle}) => {
//   return (
//     <h1>{subTitle}</h1>
//   )
// }
// const Statistic = ({text, value}) => {
//   return (
//       <p>{text} {value}</p>
//   )
// }
// const Statistics = ({good, neutral, bad}) => {
//   const total = good + neutral + bad;
//   return (
//     <div>
//       {
//         total ?
//           <div>
//             <Statistic text='Good' value={good}></Statistic>
//             <Statistic text='Neutral' value={neutral}></Statistic>
//             <Statistic text='Bad' value={bad}></Statistic>
//             <Statistic text='All' value={total}></Statistic>
//             <Statistic text='Average' value={(good- bad)/total}></Statistic>
//             <Statistic text='Positive' value={`${(good/total) *100}%`}></Statistic>
//           </div>
//           :
//           <p>No feedback given</p>
//       }
//     </div>
//   )
// }
// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const title = "give feedback"
//   const subTitle = "statistics"


//   return (
//     <div>
//       <Header title={title}></Header>
//       <Option text='Good' handleClick={()=>setGood(good + 1)}></Option>
//       <Option text='Neutral' handleClick={()=>setNeutral(neutral + 1)}></Option>
//       <Option text='Bad' handleClick={()=>setBad(bad + 1)}></Option>
//       <SubHeader subTitle={subTitle}></SubHeader>
//       <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
//     </div>
//   )
// }
// ReactDOM.render(<App />, 
//   document.getElementById('root')
// )


//------------------------------------------
  // Exercise 1.8 Unicafe - Step 3

//  import React, { useState } from 'react'
//  import ReactDOM from 'react-dom'
//  const Header = ({title}) => {
//    return (
//      <h1>{title}</h1>
//    )
//  }
//  const Option = ({text, handleClick}) => {
//    return (
//        <button onClick={handleClick}>{text}</button>
//    )
//  }
//  const SubHeader = ({subTitle}) => {
//    return (
//      <h1>{subTitle}</h1>
//    )
//  }
//  const Statistic = ({text, value}) => {
//    return (
//        <p>{text} {value}</p>
//    )
//  }

//   const Statistics = ({good, neutral, bad}) => {
//    const total = good + neutral + bad;
//    return (
//      <div>
//        <Statistic text='Good' value={good}></Statistic>
//        <Statistic text='Neutral' value={neutral}></Statistic>
//        <Statistic text='Bad' value={bad}></Statistic>
//        <Statistic text='All' value={total}></Statistic>
//        <Statistic text='Average' value={(good- bad)/total}></Statistic>
//        <Statistic text='Positive' value={`${(good/total) *100}%`}></Statistic>
//      </div>
//    )
//  }

//  const App = () => {
//    // save clicks of each button to its own state
//    const [good, setGood] = useState(0)
//    const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//    const title = "give feedback"
//    const subTitle = "statistics"
//    const total = good + bad + neutral


//    return (
//      <div>
//        <Header title={title}></Header>
//        <Option text='Good' handleClick={()=>setGood(good + 1)}></Option>
//        <Option text='Neutral' handleClick={()=>setNeutral(neutral + 1)}></Option>
//        <Option text='Bad' handleClick={()=>setBad(bad + 1)}></Option>
//        <SubHeader subTitle={subTitle}></SubHeader>
//        <Statistic text='Good' value={good}></Statistic>
//        <Statistic text='Neutral' value={neutral}></Statistic>
//        <Statistic text='Bad' value={bad}></Statistic>
//        <Statistic text='All' value={total}></Statistic>
//        <Statistic text='Average' value={(good- bad)/total}></Statistic>
//        <Statistic text='Positive' value={`${(good/total) *100}%`}></Statistic>
//      </div>
//    )
//  }
//  ReactDOM.render(<App />, 
//    document.getElementById('root')
//  )
//-------------------------------------------
// Exercise 1.7 Unicafe - Step 2


//  import React, { useState } from 'react'
//  import ReactDOM from 'react-dom'
//  const Header = ({title}) => {
//    return (
//      <h1>{title}</h1>
//    )
//  }
//  const Option = ({text, handleClick}) => {
//    return (
//        <button onClick={handleClick}>{text}</button>
//    )
//  }
//  const SubHeader = ({subTitle}) => {
//    return (
//      <h1>{subTitle}</h1>
//    )
//  }
//  const Statistic = ({text, value}) => {
//    return (
//        <p>{text} {value}</p>
//    )
//  }
//  const App = () => {
//    // save clicks of each button to its own state
//    const [good, setGood] = useState(0)
//    const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//    const title = "give feedback"
//    const subTitle = "statistics"
//    const total = good + bad + neutral
//    return (
//      <div>
//        <Header title={title}></Header>
//        <Option text='Good' handleClick={()=>setGood(good + 1)}></Option>
//        <Option text='Neutral' handleClick={()=>setNeutral(neutral + 1)}></Option>
//        <Option text='Bad' handleClick={()=>setBad(bad + 1)}></Option>
//        <SubHeader subTitle={subTitle}></SubHeader>
//        <Statistic text='Good' value={good}></Statistic>
//        <Statistic text='Neutral' value={neutral}></Statistic>
//        <Statistic text='Bad' value={bad}></Statistic>
//        <Statistic text='All' value={total}></Statistic>
//        <Statistic text='Average' value={(good- bad)/total}></Statistic>
//        <Statistic text='Positive' value={`${(good/total) *100}%`}></Statistic>
//      </div>
//    )
//  }
//  ReactDOM.render(<App />, 
//    document.getElementById('root')
//  )


//------------------------------------------ 
// Exercise 1.6 Step 1

// import React, { useState} from 'react';
// import ReactDOM from 'react-dom';

// const Header = ({title}) => {
//     return (
//       <h1>{title}</h1>
//     )
//   }

//   const SubHeader = ({subTitle}) => {
//       return (
//         <h1>{subTitle}</h1>
//       )
//     }

//     const Statistic = ({text, value}) => {
//       return (
//           <p>{text} {value}</p>
//       )
//     }

//   const Option = ({text, handleClick}) => {
//       return (
//           <button onClick={handleClick}>{text}</button>
//       )
//     }

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const subTitle = "statistics"
//   const title = "give feedback"


//   return (
//     <div>
//       <Header title={title}></Header>
//        <Option text='Good' handleClick={()=>setGood(good + 1)}></Option>
//        <Option text='Neutral' handleClick={()=>setNeutral(neutral + 1)}></Option>
//        <Option text='Bad' handleClick={()=>setBad(bad + 1)}></Option>
//        <SubHeader subTitle={subTitle}></SubHeader>
//        <Statistic text='Good' value={good}></Statistic>
//        <Statistic text='Neutral' value={neutral}></Statistic>
//        <Statistic text='Bad' value={bad}></Statistic>
//     </div>
//   )
// }

// ReactDOM.render(<App />,
// document.getElementById('root'))

//------------------------------------------
// Exercise 1.5 step 5 

// import React from 'react';
// import ReactDOM from 'react-dom';

// const Header = ({title}) => {
//   return (
//     <h1>{title}</h1>
//   )
// }

// const Content = ({parts}) => { 
//   return (
//     <div>
//     <p>{parts[0].name} {parts[0].exercises}</p>
//     <p>{parts[1].name} {parts[1].exercises}</p>
//     <p>{parts[2].name} {parts[2].exercises}</p>
//     </div>
//   )
// }

// const Total = ({totalExercises}) => {
//   return (
//   <p>Number of exercises {totalExercises[0].exercises + totalExercises[1].exercises + totalExercises[2].exercises}</p>
//   )
// }

// const App = () => {
// const course = 'Half Stack application development' 
// const parts = [
// { 
//     name: 'Fundamentals of React',
//     exercises: 10
//   },
//    {
//     name: 'Using props to pass data',
//     exercises: 7
//   },
//  {
//     name: 'State of a component',
//     exercises: 14
//   }
// ]
// return (
//   <div>
// <Header>title={course}</Header>
// <Content parts={parts} ></Content>
// <Total totalExercises={parts}></Total>
//     </div>
//   )
// }
// ReactDOM.render(<App />,
// document.getElementById('root'))

//-------------------------------------------
// Exercises 1.4 step 4

// import React from 'react';
// import ReactDOM from 'react-dom';

// const Header = ({title}) => {
//   return (
//     <h1>{title}</h1>
//   )
// }

// const Content = ({parts}) => { 
//   return (
//     <div>
//     <p>{parts[0].name} {parts[0].exercises}</p>
//     <p>{parts[1].name} {parts[1].exercises}</p>
//     <p>{parts[2].name} {parts[2].exercises}</p>
//     </div>
//   )
// }

// const Total = ({totalExercises}) => {
//   return (
//   <p>Number of exercises {totalExercises}</p>
//   )
// }

// const App = () => {
// const course = 'Half Stack application development' 
// const parts = [
// { 
//     name: 'Fundamentals of React',
//     exercises: 10
//   },
//    {
//     name: 'Using props to pass data',
//     exercises: 7
//   },
//  {
//     name: 'State of a component',
//     exercises: 14
//   }
// ]
// return (
//   <div>
// <Header>title={course}</Header>
// <Content parts={parts} ></Content>
// <Total totalExercises={parts[0].exercises + parts[1].exercises + parts[2].exercises}></Total>
//     </div>
//   )
// }
// ReactDOM.render(<App />,
// document.getElementById('root'))

//------------------------------------------
// Exercises 1.3 step 3


// import React from 'react';
// import ReactDOM from 'react-dom';

// const Header = ({title}) => {
//   return (
//     <h1>{title}</h1>
//   )
// }

// const Content = ({part1, part2, part3}) => { 
//   return (
//     <div>
//       <p>{part1.name} {part1.exercises}</p>
//       <p>{part2.name} {part2.exercises}</p>
//       <p>{part3.name} {part3.exercises}</p>
//     </div>
//   )
// }

// const Total = ({totalExercises}) => {
//   return (
//   <p>Number of exercises {totalExercises}</p>
//   )
// }

// const App = () => {
// const course = 'Half Stack application development'
// const part1 ={ 
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 =  {
//     name: 'State of a component',
//     exercises: 14
//   }

// return (
//   <div>
// <Header>title={course}</Header>
// <Content part1={part1} part2={part2} part3={part3} ></Content>
// <Total totalExercises={part1.exercises + part2.exercises + part3.exercises}></Total>
//     </div>
//   )
// }
// ReactDOM.render(<App />,
// document.getElementById('root'))

//--------------------------------------------
// Exercise 1.2 Step 2 

// import React from 'react';
// import ReactDOM from 'react-dom';

// const Header = ({title}) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//     </div>
//   )
// }

// const Content = ({part}) => { 
//   return (
//       <p>{part.name} {part.exercises}</p>
//   )
// }

// const Total = ({totalExercises}) => {
//   return (
//   <p>Number of exercises {totalExercises}</p>
//   )
// }

// const App = () => {
// const course = 'Half Stack application development'
// const part = [ 
//   { 
//     name: 'Fundamentals of React',
//     exercises: 10
//   },
//   {
//     name: 'Using props to pass data',
//     exercises: 7
//   },
//   {
//     name: 'State of a component',
//     exercises: 14
//   },
// ]

// return (
//   <div>
// <Header>title={course}</Header>
// <Content part={part[0]} ></Content>
// <Content part={part[1]} ></Content>
// <Content part={part[2]} ></Content>
// <Total totalExercises={part[0].exercises + part[1].exercises + part[2].exercises}></Total>
//     </div>
//   )
// }
// ReactDOM.render(<App />,
// document.getElementById('root'))


// ---------------------------------------------
// Exercise 1.2 Step 1

// import React from 'react';
// import ReactDOM from 'react-dom';

// const Header = ({title}) => {
//   return (
//     <h1>{title}</h1>
//   )
// }

// const Content = ({part1, exercise1, part2, exercise2, part3, exercise3}) => { 
//   return (
//     <div>
//       <p>{part1} {exercise1}</p>
//       <p>{part2} {exercise2}</p>
//       <p>{part3} {exercise3}</p>
//     </div>
//   )
// }

// const Total = ({totalExercises}) => {
//   return (
//   <p>Number of exercises {totalExercises}</p>
//   )
// }

// const App = () => {
// const course = 'Half Stack application development'
// const part1 = 'Fundamentals of React'
// const exercises1 = 10
// const part2 = 'Using props to pass data'
// const exercises2 = 7
// const part3 = 'State of a component'
// const exercises3 = 14

// return (
//   <div>
//   <Header>title={course}</Header>
// <Content> part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3{exercises3}</Content>
// <Total totalExercises={exercises1 + exercises2 + exercises3}></Total>
//   </div>
// )
// }
// ReactDOM.render(<App />,
//   document.getElementById('root'))