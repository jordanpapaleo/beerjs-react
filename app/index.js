import 'normalize.css';
import './styles.css';

import debug from 'debug';
import React from 'react';
import Hello from './components/Hello';
import HelloES6 from './components/HelloES6';

const log = debug('application:bootstrap');

// Enable debug messages outside of production
if (process.env.NODE_ENV !== 'production') {
  debug.enable('application:*');
}

log('creating application node');
const applicationNode = document.createElement('div');
applicationNode.className = 'application';
applicationNode.id = 'application';

log('adding application node to body');
document.body.appendChild(applicationNode);

log('mounting application');
/*React.render(<Hello name="Jordan" />, applicationNode, () => {
    log('finished mounting application');
});*/

React.render(<HelloES6 name="Jordan" />, applicationNode, () => {
  log('finished mounting application');
});
