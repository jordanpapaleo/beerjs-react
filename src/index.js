import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import debug     from 'debug';
import React     from 'react';
//import Hello     from './components/HelloCreateClass';
import { Hello } from './components/HelloComponent';

const log = debug('application:bootstrap');

if (process.env.NODE_ENV !== 'production') {
    debug.enable('application:*');
}

log('creating application node');
const applicationNode = document.createElement('div');
applicationNode.className = 'container';
applicationNode.id = 'application';

log('adding application node to body');
document.body.appendChild(applicationNode);

log('mounting application');
React.render(<Hello name="Jordan" />, applicationNode, () => {
    log('finished mounting application');
});
