import React from 'react';

// With JSX, Through Function
// function Functional() {
//     return <h1>Hello, Normal function, Functional Component</h1>
// }

// Without JSX in React
// const Functional = () => {
//     return React.createElement(
//         'div',
//         {id: 'hello', className: 'dummyClass'},
//         React.createElement('h1', null, 'Hello, without JSX!')
//     )
// }


// With Arrow function
const Functional = ({name, heroName, children}) => {

    function clickHandler() {
        console.log('Button clicked')
    }

    return(
        <div className="functional-wrap">
            <h1>Functional Component: Hello, {name} as known as {heroName}</h1>
            <h6>{children}</h6>

            <button onClick={clickHandler}>Click</button>
        </div>

    )
}

export default Functional;