import React, { Component } from 'react';
import axios from 'axios';

export default class UserDetails extends Component {
    constructor() {
        super();
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        axios.get('/api/getUsers/' + this.props.match.params.id)
            .then((res) => {        
                this.setState({user: res.data});
            });
    }

    render() {
        return (
            <div>
                <h1>{ this.state.user.name }</h1>
                <p>{ this.state.user.description }</p>
                <img src={this.state.user.image} alt="user image"/>
            </div>
        )
    }
}