import React, { Component } from 'react';

import UserForm from './UserForm';
import Filters from './Filters/index.js';
import ArticleList from './ArticleList';
import Counter from './Counter';

class App extends Component {
    render() {
        return(
            <div>
                <Counter />
                <UserForm />
                <Filters />
                <ArticleList />
            </div>
        )
    }
}

export default App;