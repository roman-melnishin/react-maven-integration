import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    state = {
        username: ''
    }

    handleUserChange = ev => {
        if(ev.target.value.length > 10) return;

        this.setState({
            username: ev.target.value
        });
    }

    render() {
        return(
            <div>
                Name: <input type="text" value={this.state.username} onChange={this.handleUserChange} />
            </div>
        )
    }
}

export default UserForm;