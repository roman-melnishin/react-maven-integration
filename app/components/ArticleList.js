import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; 

import Article from './Article';
import accordion from '../decorators/accordion';

class ArticleList extends Component {
    static propTypes = {
        // from connect
        articles: PropTypes.arrayOf(PropTypes.object).isRequired,
        // from decorator 'accordion'
        openedItemId: PropTypes.string,
        toggleView: PropTypes.func.isRequired
    }

    render() {
        const { articles, openedItemId, toggleView } = this.props;
        const articleElements = articles.map(article => 
            <Article 
                key={article.id} 
                article={article}
                isOpen={article.id === openedItemId}
                toggleOpen={toggleView(article.id)}
            />
        );

        return (
            <ul>{articleElements}</ul>
        )
    }
}

export default connect(({filters, articles}) => {
    const {selected, dateRange: {from, to}} = filters;

    const filteredArticles = articles.filter(article => {
        const articleDate = Date.parse(article.date);

        return (!selected.length || selected.includes(article.id)) && 
               (!from || !to || (from < articleDate && articleDate < to));
    });

    return {
        articles: filteredArticles
    }
})(accordion(ArticleList));

