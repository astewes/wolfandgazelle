import React, { Component } from 'react';
import logo from './logo.svg';
// JS object that returns string of CSS classes
import classes from './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps);
    return nextProps.persons !== this.props.persons || nextProps.changed;
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps);
  }

  componentDidUpdate (nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentDidUpdate');
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
    const persons = [...this.state.persons];
    // updated by slicing one element (the element being pointed to in the array)
    person.splice(personIndex, 1);
    this.setState({persons: persons});
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

    let persons = null; // don't show persons HTML on render

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <button>Show Button</button>
        <Cockpit
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons} />
        {persons}
      </div>
    );
  }
}

export default App;
