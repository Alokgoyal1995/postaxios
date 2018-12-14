import React from 'react';
import axios from 'axios';

export default class PersonInput extends React.Component {

    state = {
        name: '',
        persons: []
    }

    handleChnage = event => {
        this.setState({ name: event.target.value });
    };

    habdleSubmit = event => {
        event.preventDefault();

        const user = {

            name: this.state.name
        };

        axios
            .post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({ name: res.data })
            });
    };
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            console.log(res);
            this.setState({ persons: res.data })
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.habdleSubmit}>
                    <label>
                        Person name :
                    <input type="text" name="name" onChange={this.handleChnage} />
                    </label>
                    <button type="submit">Add</button>
                </form>
                <div>
                    {this.state.persons.map(mob => <h3 key={mob.id}>{mob.name}</h3>)}
                </div>
            </div>
        )
    }
}