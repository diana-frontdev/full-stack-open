//region part-01 a & b
// const Header = (props) => {
//     return (
//         <>
//             <h1>{props.course.name}</h1>
//         </>
//     )
// }
//
// const Part = (props) => {
//     return (
//         <>
//             <p>
//                 {props.partName} {props.exerciseNum}
//             </p>
//         </>
//     )
// }
//
// const Content = (props) => {
//     return (
//         <>
//             <Part partName={props.parts[0].name} exerciseNum={props.parts[0].exercises}/>
//
//             <Part partName={props.parts[1].name} exerciseNum={props.parts[1].exercises}/>
//
//             <Part partName={props.parts[2].name} exerciseNum={props.parts[2].exercises}/>
//         </>
//     )
// }
//
// const Total = (props) => {
//     return (
//         <>
//             <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//         </>
//     )
// }
//
// const App = () => {
//     const course = {
//         name: 'Half Stack application development',
//         parts: [
//             {
//                 name: 'Fundamentals of React',
//                 exercises: 10
//             },
//             {
//                 name: 'Using props to pass data',
//                 exercises: 7
//             },
//             {
//                 name: 'State of a component',
//                 exercises: 14
//             }
//         ]
//     }
//
//     return (
//         <div>
//             <Header course={course} />
//
//             <Content parts={course.parts} />
//
//             <Total parts={course.parts} />
//         </div>
//     )
// }
//endregion

//region part-01 c: name/age
// const Hello = ({ name, age }) => {
//     const bornYear = () => new Date().getFullYear() - age
//
//     return (
//         <div>
//
//             <p>Hello {name}, you are {age} years old</p>
//             <p>So you were probably born in {bornYear()}</p>
//         </div>
//     )
// }
// const App = () => {
//     const name = 'Peter'
//     const age = 10
//
//     return (
//         <div>
//             <h1>Greetings</h1>
//             <Hello name="Maya" age={26 + 10} />
//             <Hello name={name} age={age} />
//         </div>
//     )
// }
//endregion

//region part-01 c: page re-rendering
// import { useState } from 'react';
//
// const Display = ({counter}) => <div>{counter}</div>
//
// const Button = ({onClick, text}) => (
//     <button onClick={onClick}>
//         {text}
//     </button>
// )
//
// const App = () => {
//     const [counter, setCounter] = useState(0);
//
//     console.log('rendering with counter value', counter);
//
//     const increaseByOne = () => {
//         console.log('increasing, value before', counter)
//         setCounter(counter + 1)
//     }
//     const decreaseByOne = () => {
//         console.log('decreasing value before', counter)
//         setCounter(counter - 1)
//     }
//     const setToZero = () => {
//         console.log('resetting to zero, value before', counter)
//         setCounter(0)
//     }
//
//     return(
//         <>
//             <Display counter={counter} />
//             <Button onClick={increaseByOne} text="plus"></Button>
//             <Button onClick={setToZero} text="reset"></Button>
//             <Button onClick={decreaseByOne} text="minus"></Button>
//         </>
//     )
// }
//endregion

//region part-01 d: a more complex debugging react apps
import {useState} from 'react';

const App = () => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })

    const handleLeftClick = () => {
        setClicks({...clicks, left: clicks.left + 1})
    }

    const handleRightClick = () => {
        setClicks({...clicks, right: clicks.right + 1})
    }

    return (
        <div>
            {clicks.left}
            <button onClick={handleLeftClick}>
                left
            </button>
            <button onClick={handleRightClick}>
                right
            </button>
            {clicks.right}
        </div>
    )
}
//endregion

export default App