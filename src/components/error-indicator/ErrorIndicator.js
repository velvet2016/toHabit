import React from 'react';
import './error.css';

const ErrorIndicator = ({message}) => {
    console.log(message);

    return (
        <div className='error'>
            <span>{message}</span>
        </div>
    )
};

export default ErrorIndicator;