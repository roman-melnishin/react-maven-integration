import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {connect} from 'react-redux'; 

import {changeSelection} from '../../AC';

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.object).isRequired,
        changeSelection: PropTypes.func.isRequired
    };

    render() {
        const {articles, selected} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <Select 
                options={options} 
                value={selected}
                onChange={this.handleChange} 
                multi={true}
            />
        )
    }

    handleChange = selected => {
        return this.props.changeSelection(selected.map(option => option.value));
    }
}

export default connect(state => ({
    selected: state.filters.selected,
    articles: state.articles
}), { changeSelection })(SelectFilter);