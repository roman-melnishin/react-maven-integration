import React, { Component } from 'react'

import toggleOpen from '../../decorators/toggleOpen'

const Banner = ({ isOpen: showWarning, toggleOpen }) => {
    return (
        <div>
            {showWarning ? <h2>Warning!!!!</h2> : null}
            <button onClick={toggleOpen}>{showWarning ? 'hide' : 'show'} warning</button>
        </div>
    )
}

export default toggleOpen(Banner);