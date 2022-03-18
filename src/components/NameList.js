import React from 'react'

import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 20,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clrak',
            age: 20,
            skill: '.Net'
        },
        {
            id: 3,
            name: 'Diana',
            age: 20,
            skill: 'C++'
        },
        {
            id: 4,
            name: 'John',
            age: 20,
            skill: 'Angular'
        },
    ]

    const personList = persons.map((person, index) => <Person key={index} person={person} />)
    
   

    const names = ['Bruce', 'clark', 'john']
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    return (
        <div>
            <div>{personList}</div>
            <div>{nameList}</div>
        </div>
    )
}

export default NameList
