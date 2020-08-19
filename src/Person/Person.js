import React, {Component} from "react";

class Person extends Component {

    state = {
        showHobbies: true
    }

    toggleShowHobbiesHandler = () => {
        this.setState({showHobbies: !this.state.showHobbies});
    }

    render() {
        return (
            <div>
                <p>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <button onClick={this.toggleShowHobbiesHandler}>Show Hobbies</button>
                <p>{this.state.showHobbies ? this.props.children : null}</p>
            </div>
        )
    }
}

export default Person;
