import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import './style.css';

class CommentForm extends Component {
    state = this.getInitialState();

    getInitialState() {
        return {
            username: '',
            comment: ''
        };
    }

    render() {
        const {usernameValid, commentValid, username, comment} = this.state;

        return(
            <form onSubmit={this.handleSubmit} className="comment-form">
                Name: <input className={this.getClassName('username')} 
                             value={username} 
                             onChange={this.handleChange('username')} 
                             type="text" 
                      />
                Text: <textarea className={this.getClassName('comment')} 
                                onChange={this.handleChange('comment')} 
                                value={comment} 
                      />

                Submit: <input type="submit" />
            </form>
        )
    }

    handleChange = type => ev => this.setState({ [type]: ev.target.value });

    handleSubmit = ev => {
        ev.preventDefault();

        this.setState(this.getInitialState());
    }
    
    getClassName = type => {
        return this.state[type].length >= limits[type].min
            && this.state[type].length <= limits[type].max ? '' : 'error';
    }
}   

const limits = {
    username: {
        min: 5,
        max: 15
    },
    comment: {
        min: 20,
        max: 50
    }
}

export default CommentForm;