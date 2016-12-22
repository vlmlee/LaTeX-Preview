import React from 'react';

const ErrorMessage = (props) => (
    <div className="error">
        <span>{props.err}</span>
    </div>
);

export default ErrorMessage;