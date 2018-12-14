import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {

    state = {
        persons: [],
        datas: []

    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res);
                this.setState({ persons: res.data })
                this.setState({ datas: res.data })
            });
    }
    render() {
        return (
            <ul>
                {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
                {this.state.persons.map(alok => <li>{alok.username},{alok.email}</li>)}
                {this.state.persons.map(shubham => <li>{shubham.address.street}</li>)}
                <p>chnage
                </p>
                {this.state.datas.map(demo => <li key={demo.id}>{demo.website}</li>)}

            </ul>
        )
    }
}