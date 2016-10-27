import React from 'react';
import ReactDOM from 'react-dom';
import CardListContainer from './containers/CardListContainer';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <CardListContainer />
  </MuiThemeProvider>,
  document.getElementById('root')
);
