import { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            firstname: event.target.value,
        });
    };

    handleLastNameChange(event){
        this.setState({
            lastname: event.target.value,
        })
    }

    handleSubmit(event){
        event.preventDefault()
        console.log({
            fn : this.state.firstname,
            ln : this.state.lastname,
        })
    }

    render() {
        return (
            <div>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" value={this.state.firstname}></input>
                    <input onChange={this.handleLastNameChange} type="text" value={this.state.lastname}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;