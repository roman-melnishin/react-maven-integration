import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({comment}) => {
    return (
        <li>
            <p><b>{comment.user}</b></p>
            <p>{comment.text}</p>
            <p>Comment id: {comment.id}</p>
        </li>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired
}

export default Comment;