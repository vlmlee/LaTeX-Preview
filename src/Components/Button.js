import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div className="button-container">
        <button onClick={this.props.example}>
          Example
        </button>
        <button onClick={this.props.clear}>
          Clear
        </button>
      </div>
    );
  }
}

export default Button;