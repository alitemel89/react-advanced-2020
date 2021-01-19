import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  }

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  }

  const resetCounter = () => {
    setValue(0)
  }

  const complexIncreaser = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      })
    }, 1000)
  }

  return (
    <React.Fragment>
      <section style={{margin: '4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={increment}>increase</button>
        <button className="btn" onClick={resetCounter}>reset</button>
        <button className="btn" onClick={decrement}>decrease</button>
      </section>
      <section style={{margin: '4rem 0'}}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncreaser}>increase later</button>
      </section>
     
    </React.Fragment>
  )
};

export default UseStateCounter;
