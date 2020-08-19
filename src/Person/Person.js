import React, { useState } from "react";
import './Person.css'

const Person = props => {
    const [personState, setPersonState ] = useState({
        showHobbies: false
    });

    const toggleShowHobbiesHandler = () => {
        setPersonState({showHobbies: !personState.showHobbies});
    }

    return (
        <div className={"Person"}>
            <p>I'm {props.name} and I am {props.age} years old.</p>
            <button onClick={toggleShowHobbiesHandler}>Show Hobbies</button>
            <p>{personState.showHobbies ? props.children : null}</p>
        </div>
    )
}

export default Person;
