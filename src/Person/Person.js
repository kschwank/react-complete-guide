import React, { useState } from "react";
import './Person.css'

const Person = props => {
    const [personState, setPersonState ] = useState({
        name: props.name,
        age: props.age,
        showHobbies: false
    });

    const toggleShowHobbiesHandler = () => {
        setPersonState({showHobbies: !personState.showHobbies});
    }

    const handleNameChange = (event) => {
        setPersonState({name: event.target.value})
    }

    return (
        <div className={"Person"}>
            <p>I'm {personState.name} and I am {personState.age} years old.</p>
            <input type="text" onChange={handleNameChange}/>
            <br/>
            <button className="Person-button" onClick={toggleShowHobbiesHandler}>Show Hobbies</button>
            <p>{personState.showHobbies ? props.children : null}</p>
        </div>
    )
}

export default Person;
