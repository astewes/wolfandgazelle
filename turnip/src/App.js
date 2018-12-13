import React, { Component } from 'react';
import './App.css';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit';
import SearchBar from './components/SearchBar/SearchBar';
import Results from './components/Results/Results';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        "Go to the store",
        "Wash the dishes",
        "Learn some code"
      ],
      results: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
      showResults: true
    }

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    // Prevent button click from submitting form
    e.preventDefault();

    // Create variables for our list, the item to add, and our form
    let list = this.state.list;
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");

    // If our input has a value
    if (newItem.value !== "") {
      // Add the new item to the end of our list array
      list.push(newItem.value);
      // Then we use that to set the state for list
      this.setState({
        list: list
      });
      // Finally, we need to reset the form
      newItem.classList.remove("is-danger");
      form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newItem.classList.add("is-danger");
    }
  }

  // use default event here for accessing target, value props in linking the handler and creating two-way binding
  resultChangedHandler = (event, id) => {
    const resultIndex = this.state.results.findIndex(p => {
      // if that person id equals the id being passed in
      return p.id === id;
    });
    const result = {
      ...this.state.results[resultIndex]
    };
    // old way
    // const person = Object.assign({}, this.state.persons[personIndex]);
    result.name = event.target.value;
    const results = [...this.state.results];
    results[resultIndex] = result;

    this.setState({ results: results });
  }

  deleteResultHandler = (resultIndex) => {
    const results = [...this.state.results];
    // updated by slicing one element (the element being pointed to in the array)
    results.splice(resultIndex, 1);
    this.setState({results: results});
  }

  toggleResultsHandler = () => {
    const doesShow = this.state.showResults;
    // get merged with outer state, will be hoisted up to the state declaration
    this.setState({showResults: !doesShow});
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentDidUpdate');
  }

  render() {
    let results = null; // hide results HTML on render

    if (this.state.showResults) {
      results = <Results
            results={this.state.results}
            clicked={this.deleteResultHandler}
            changed={this.nameChangedHandler}
            />;
    }

    return (
      <div className="App">
        <div className="container">
          <section>
            <ul>
              {this.state.list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <form id="addItemForm">
              <input
                type="text"
                id="addInput"
                placeholder="Something that needs ot be done..."
              />
              <button
                className="button is-info"
                onClick={this.addItem}>Add Item</button>
            </form>
          </section>
        </div>
      </div>

      // <div className="App">
      //   <SearchBar />
      //   <Cockpit
      //     clicked={this.toggleResultsHandler}
      //     showResults={this.state.showResults}
      //     results={this.state.results} />
      //   {results}
      // </div>
    );
  }
}

export default App;
