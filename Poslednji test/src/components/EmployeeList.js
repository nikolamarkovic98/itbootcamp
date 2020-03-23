import React from 'react';
import Employee from './Employee';

import './EmployeeList.css';

const EmployeeList = props => {
    const employees = props.employees.map(employee => {
        return (
            <Employee key={employee.id} id={employee.id} name={employee.employee_name} salery={employee.employee_salary} age={employee.employee_age} />
        )
    })

    return (
        <div className="employee-list">
            {employees}
        </div>
    )
}

export default EmployeeList;