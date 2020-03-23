import axios from 'axios';

const getEmployees = () => {
    return axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then(res => res.data.data);
}

const getEmployee = id => {
    return axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
    .then(res => res.data.data);
}

const createEmployee = (name, salary, age) => {
    return axios.post('http://dummy.restapiexample.com/api/v1/create', {name: name, salary: salary, age: age})
    .then(res => res.data.data);
}

const updateEmployee = (id, name, salery, age) => {
    return axios.put(`http://dummy.restapiexample.com/api/v1/update/${id}`, {name: name, salery: salery, age: age})
    .then(res => res.data.data);
}

const deleteEmployee = id => {
    return axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
    .then(res => res.data.data);
}

export {
    getEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}
