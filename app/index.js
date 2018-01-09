import React from 'react';
import {render} from 'react-dom';

import Root from './components/Root';

render(
    <Root />,
    document.getElementById('new')
);

// render(React.createElement(Root, null), document.getElementById('new'));
