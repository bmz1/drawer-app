import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from './Drawer.js'
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var destination = document.querySelector("#player");

ReactDOM.render(
  <MuiThemeProvider>
  <Drawer />
  </MuiThemeProvider>
  ,
  destination
);
