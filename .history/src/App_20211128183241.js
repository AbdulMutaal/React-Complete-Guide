import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    othersState: 'some other value',
    personsState: false
  }

  switchNameHandler = () => {
    this.setState( {
      persons: [
        {name: 'Maximilian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  togglePersons = () => {
    let tempPersonsState = this.state.personsState;
    this.setSttate({personsState: !tempPersonsState});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={this.togglePersons}>
            Toggle Persons
          </button>
        { this.state.personsState ? 
          <div>
          <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person 
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            />
        </div> : null}
      </div>
    );
  }
}

export default App;
