import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Routes from './routes'
import theme from './theme'

// Material UI imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'; // see overrides here:
// https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js

const muiTheme = getMuiTheme({
  tabs: {
    backgroundColor: theme.content,
    textColor: '#BFBFBF',
    selectedTextColor: 'black'
  },
  palette: {
    accent1Color: theme.color1,
    pickerHeaderColor: theme.color3,
    primary1Color: theme.color3,
    primary2Color: theme.color3
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>  
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
