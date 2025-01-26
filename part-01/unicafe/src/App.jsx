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
const App = (props) => {
    const {counter} = props
    return (
        <div>{counter}</div>
    )
}
//endregion

export default App