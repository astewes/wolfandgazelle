import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  // use default event here for accessing target, value props in linking the handler and creating two-way binding
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      // if that person id equals the id being passed in
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // old way
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    // updated by slicing one element (the element being pointed to in the array)
    person.splice(personIndex, 1);
    this.setState(persons: persons);
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // get merged with outer state, will be hoisted up to the state declaration
    this.setState({showPersons: !doesShow});
  }

  render() {
    // use only when scoping styling to a specific element
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };

    // don't show the HTML on render
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // pass a single person to the math method and run on every element in the persons array
            return <Person
              click={() => this.person.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />;
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    // const classes = [];
    // if (this.state.persons.length <= 2) {
    //   classes.push('red');
    // }
    // if (this.state.persons.length <= 1) {
    //   classes.push('bold');
    // }

    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button
            style={style}
            onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
          {persons}
        </div>
      // </StyleRoot>
    );
  }
}

export default App;
