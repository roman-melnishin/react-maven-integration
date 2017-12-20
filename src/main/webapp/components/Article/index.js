import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux'; 

import {deleteArticle} from '../../AC';
import CommentList from '../CommentList';
import './style.css';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            text: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                user: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
            }))
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps(nextProps) {
        // console.log('---', 'updating', this.props.isOpen, nextProps.isOpen);
    }

    componentWillMount() {
        // console.log('---', 'mounting');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.isOpen !== this.props.isOpen;
    // }

    render() {
        const { article, isOpen, toggleOpen } = this.props;
        // console.log('---', 'Article render');
        return (
            <li ref={this.setContainerRef}>
                <h3>{article.title}</h3>
                <p>{article.date}</p>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <button onClick={this.handleDelete}>
                    Delete
                </button>
                <CSSTransitionGroup
                    transitionName='article'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    component='div' 
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </li>
        )
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;

        deleteArticle(article.id);
        // console.log('----', 'Deleting article');
    }

    componentDidMount() {
        // console.log('---', 'mounted');
    }

    setContainerRef = ref => {
        // this.container = ref;
        // console.log('---', ref);
    }

    getBody() {
        const {article, isOpen} = this.props;
        if(!isOpen) return null;
        
        return (
            <section>
                {article.text}
                <CommentList comments={article.comments} ref={this.setCommentsRef} />
            </section>
        )
    }

    setCommentsRef = ref => {
        // this.comments = ref;
        // console.log('---', findDOMNode(ref));
    }
}

export default connect(null, { deleteArticle })(Article);