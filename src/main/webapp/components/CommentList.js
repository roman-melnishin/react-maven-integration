import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import CommentForm from './CommentForm';
import toggleOpen from '../decorators/toggleOpen';

const CommentList = ({comments = [], isOpen, toggleOpen}) => {
    const text = (isOpen ? 'hide' : 'show') + ' comments';
    
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody(comments, isOpen)}
        </div>
    )
}

const getBody = (comments, isOpen) => {
    if(!isOpen) return null;
    if(!comments.length) return <p>No comments yet</p>;

    const commentsElements = comments.map(comment => <Comment key={comment.id} comment={comment} />);
    
    return (
        <div>
            <ul>{commentsElements}</ul>
            <CommentForm />
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })),

    //from decorator 'toggleOpen'
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
}

export default toggleOpen(CommentList);