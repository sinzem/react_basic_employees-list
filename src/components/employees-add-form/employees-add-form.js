import './employees-add-form.scss';
import { Component } from 'react';

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        } 
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 
    
    addNewEmployee = (e) => {
        const {name, salary} = this.state;
        e.preventDefault();
        if (name.length > 1 && salary.length > 0) {
            this.props.addItem(name, salary);
            this.setState({
                name: '',
                salary: ''
            })
        }
    }

    render() {

        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form className="add-form d-flex">
                    <input 
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Employee name" 
                        value={name}
                        name="name"
                        onChange={this.onValueChange} />
                    <input 
                        type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $"
                        value={salary} 
                        name="salary"
                        onChange={this.onValueChange} />
                        <button
                            type="submit"
                            className="btn btn-outline-light"
                            onClick={this.addNewEmployee}>
                                Add
                        </button>
                </form>
            </div>
        );
    }
};

export default EmployeesAddForm;