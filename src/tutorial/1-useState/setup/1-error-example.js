import React, { useState } from 'react';


const ErrorExample = () => {
  const [title, setTitle] = useState('Random Title');

  const handleClick = () => {
    setTitle('Hello people')
    
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>change title</button>
    </React.Fragment>
  )
};

export default ErrorExample;
