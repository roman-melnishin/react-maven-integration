import React, { Component } from 'react'

class Clock extends Component {
    state = {
        date: new Date()
    };

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(), 
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>Time is: {this.state.date.toLocaleTimeString()}</div>
        )
    }
}

export default Clock;