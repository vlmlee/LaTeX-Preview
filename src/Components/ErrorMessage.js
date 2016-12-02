import React from 'react';

class ErrorMessage extends React.Component {
  render() {
    return (
      <div className="error">
        <span>{this.props.err}</span>
      </div>
    );
  }
}

export default ErrorMessage;