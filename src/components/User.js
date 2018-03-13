import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class User extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('/api/getUsers')
            .then((res) => {
                let data = res.data;
                this.setState({ data });
            });
    }

    render() {
        let formattedUsers = this.state.data.map((user, i) => {
            return (
                <Link to={`user/${user.id}`} key={user.id + user.name} >
                    <div >
                        <p>{user.name}</p>
                    </div>
                </Link>
            )
        })

        return (
            <div>
                <h1>Users Component</h1>
                { formattedUsers }
            </div>
        )
    }
}