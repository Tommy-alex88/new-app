import React, { Component } from "react";
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'fljap', name: 'Max', age: 28 },
      { id: ';w.[p', name: 'Manu', age: 29 },
      { id: 'lowkk', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // альтернативный способ скопировать массив
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const isPersonVisible = this.state.showPersons;
    this.setState({ showPersons: !isPersonVisible });
  }

  render() {
    const style = {
      backgroundColor: 'green',
    }
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <Cockpit 
          title={this.props.appTitle}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    )
  }
}

export default App;
