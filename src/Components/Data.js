import React from 'react';
import axios from 'axios';

export default class Data extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            age: "",
            loading: false,
            message: ""
        }
    }
    dataChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    postData(event) {
        event.preventDefault()

        const name = this.state.name
        const age = this.state.age

        this.setState({
            loading: true
        })
        const data = {
            name,
            age
        }
        axios.post(`/t/kjzdq-1544773109/post`, data)
            .then(response => {
                console.log(response);
                this.setState({
                    loading: false,
                    message: response.data
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    loading: false

                })
            })
    }
    loadOrShowMsg() {
        if (this.state.loading) {
            return <p>loading............</p>
        }
        else {
            return <p>{this.state.message}</p>
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.postData.bind(this)}>
                    <label>
                        Person name :
                      <input type="text" name="name" value={this.state.name} onChange={this.dataChange.bind(this)} />
                        person age :
                        <input type="text" name="age" value={this.state.age} onChange={this.dataChange.bind(this)} />
                    </label>
                    <button type="submit">Add</button>
                </form>
                {this.loadOrShowMsg()}

            </div>


        )
    }
}