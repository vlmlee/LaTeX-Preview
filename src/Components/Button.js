import React from 'react';

const Button = (props) => (
  <div className="button-container">
    <button onClick={props.example}>
      Example
    </button>
    <button onClick={props.clear}>
      Clear
    </button>
  </div>
);

export default Button;