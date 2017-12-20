import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

import App from './App';
import store from '../store';

function Root() {
    return (
        <Provider store={store}>    
            <App />
        </Provider>
    )
}

Root.PropTypes = {};

export default Root;