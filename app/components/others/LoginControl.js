import React, {Component} from 'react'
import PropTypes from 'prop-types'

class LoginControl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
        
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;

        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

const LoginButton = props => <button onClick={props.onClick}>Login</button>;
const LogoutButton = props => <button onClick={props.onClick}>Logout</button>;
const Greeting = ({isLoggedIn}) => isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
const UserGreeting = props => <h1>Welcome back!</h1>;
const GuestGreeting = props => <h1>Please sign up.</h1>;

export default LoginControl;