import React from 'react';

import './Employee.css';

const Employee = props => {
    return (
        <div className="employee">
            <p>Name: {props.name}</p>
            <p>Salery: {props.salery}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Employee;