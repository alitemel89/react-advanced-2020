import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    setPeople(people.filter(person => person.id !== id));
  }
  
  return (
    <React.Fragment>
      {people.map(person => {
        const {id, name} = person;
        return (
          <div className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>            
        )
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>

    </React.Fragment>
  )
};

export default UseStateArray;
