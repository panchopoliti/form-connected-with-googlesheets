import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameValue: '',
            surnameValue: '',
            ageValue: '',
        };

    }

    handleChange = (ev) => {
        const inputName = ev.target.name;

        this.setState({
           [`${inputName}Value`]: ev.target.value,  
        });

    }

    handleSubmit = (ev) => {
        ev.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzcK0STdQUEwI2rO5gFAFqg9713O0WmLsP7GYp1Rys6A_FQosFB/exec';

        let formData = new FormData(this.googleSheetsForm);

         fetch(scriptURL, { method: 'POST', body: formData})
         .then(response => console.log('Success!', response))
         .catch(error => console.error('Error!', error.message))

    }

    render() {
        const { nameValue, surnameValue, ageValue } = this.state;

        return (
            <form onSubmit={this.handleSubmit} ref={e => this.googleSheetsForm = e} className='form'>
                <input name='name' type='text' placeholder='Name' onChange={this.handleChange} value={nameValue}/>
                <input name='surname' type='text' placeholder='Surname' onChange={this.handleChange} value={surnameValue}/>
                <input name='age' type='text' placeholder='Age' onChange={this.handleChange} value={ageValue}/>
                <button type='submit'> Submit </button>
            </form>
        );
    }
}

export default Form;
