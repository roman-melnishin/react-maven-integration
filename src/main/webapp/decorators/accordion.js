import React from 'react'

export default Component => class Accordion extends React.Component {
    state = {
        openedItemId: null
    }

    render() {
        return <Component {...this.props} openedItemId={this.state.openedItemId} toggleView={this.toggleView} />
    }

    toggleView = openedItemId => ev => {
        ev && ev.preventDefault && ev.preventDefault();

        this.setState(prevState => { 
            return {
                openedItemId: openedItemId === prevState.openedItemId ? null : openedItemId
            }
         });
    }
}