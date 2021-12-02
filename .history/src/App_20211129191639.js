import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28},
      { id: 2, name: 'Manu', age: 29},
      { id: 3, name: 'Stephanie', age: 26}
    ],
    othersState: 'some other value',
    personsState: false,
    text: '',
    textLength: null
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

  nameChangedHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    let person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    let persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersons = () => {
    let tempPersonsState = this.state.personsState;
    this.setState({personsState: !tempPersonsState});
  }

  deletePerson = (personIndex) => {
    let person = [...this.state.persons];
    person.splice(personIndex, 1);

    this.setState({persons: person});
  }

  textChangedHandler = (e) => {
    let textLength = e.target.value.length;
    
    this.setState({text: e.target.value});
    this.setState({textLength: textLength});
  }

  charChangedHandler = (e, charIndex) => {
    let text = [...this.state.text];
    text.splice(charIndex, 1);

    this.setState({text: text});

  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;

    if (this.state.personsState) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
          return <Person 
            click={() => this.deletePerson(index)}
            name={person.name} 
            age={person.age}
            key={person.id} 
            click={(event) => this.nameChangedHandler(event, person.id)}/>
        })}
        </div>
        
      );
    }

    let charComponent = null;

    if (this.state.text.length > 0) {
      charComponent = (
        <div>
          {
            this.state.text.split().map((t, index) => {
              return (<CharComponent textChar={t} 
                      clicked={(e) => this.charChangedHandler(e, index)} />
              )
            })
          }
        </div>
      )
    }

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
          person : null}
        <input type='text' onChange={(e) => this.textChangedHandler(e)} value={this.state.text} />
        {this.state.textLength}

        <Validation textLength={this.state.textLength} />
        {charComponent}
      </div>
    );
  }
}

export default App;
