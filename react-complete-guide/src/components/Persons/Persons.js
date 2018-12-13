import React from 'react';
import Person from './Persons/Person';

const persons = (props) => props.persons.map( (person, index) => {
  // pass a single person to the math method and run on every element in the persons array
  return
    <Person
    clicked={() => props.clicked(index)}
    name={person.name}
    age={person.age}
    key={person.id}
    changed={(event) => props.changed(event, person.id)} />
});

export default persons;
