import React from 'react'
import { getEmployees, createEmployee } from './requests';
import EmployeeList from './components/EmployeeList';

import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employees: [],
            pages: null,
            index: 0
        }
    }

    componentDidMount = async () => {
        const employees = await getEmployees();
        this.setState({employees: employees, pages: employees.length});
    }

    change = e => {
        this.setState({pages: Number(e.target.value), index: 0})
    };

    changeIndex = num => this.setState({index: num});

    createEmployee = e => {
        e.preventDefault();
        const name = (document.querySelector('#name').value).trim();
        const salary = (document.querySelector('#salary').value).trim();
        const age = (document.querySelector('#age').value).trim();
        createEmployee(name, salary, age)
        .then(res => {
            let employees = this.state.employees;
            employees.push({
                id: res.id,
                employee_name: res.name,
                employee_salary: res.salary,
                employee_age: res.age
            });
            this.setState({employees: employees});
        })
    }

    render(){
        let i = 0;
        let options = Array(20).fill().map(num => {
            i++;
            return (<option key={i} value={i}>{i}</option>)
        });

        i = 0;
        
        let num_of_pages = 0;
        if(this.state.pages)
            num_of_pages = Math.ceil(this.state.employees.length / this.state.pages);

        let pages = Array(num_of_pages).fill().map(num => {
            i++;
            return (<p key={Math.random()} onClick={e => this.changeIndex(Number(e.target.innerHTML) - 1)}>{i}</p>)
        });

        let idk = [];
        for(let j = this.state.pages; j < this.state.employees.length; j += this.state.pages)
            idk.push(j);

        console.log(this.state.employees.length - idk[this.state.index]);

        return(
            <div className="app">
                <form>
                    <input type="text" id="name" placeholder="Name" />
                    <input type="text" id="salary" placeholder="Salery" />
                    <input type="text" id="age" placeholder="Age" />
                    <button onClick={this.createEmployee}>Create</button>
                </form>
                <select onChange={this.change}>
                    <option value={this.state.employees.length}></option>
                    {options}
                </select>
                <EmployeeList employees={this.state.employees.slice(idk[this.state.index] - idk[0], idk[this.state.index])} />
                <div className="pages">
                    {pages}
                </div>
            </div>
        )
    }
}

export default App;