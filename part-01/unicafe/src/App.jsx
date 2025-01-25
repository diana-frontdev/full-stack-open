const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>
                {props.partNum} {props.exerciseNum}
            </p>
        </>
    )
}

const Content = (props) => {
    return (
        <>
            <Part partNum={props.part1} exerciseNum={props.exercises1}/>

            <Part partNum={props.part2} exerciseNum={props.exercises2}/>

            <Part partNum={props.part3} exerciseNum={props.exercises3}/>
        </>
    )
}

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course} />

            <Content parts={parts} />

            <Total parts={parts} />
        </div>
    )
}

export default App