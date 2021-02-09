/** jsx jsx */

// import {jsx} from '@emotion/react'
import * as React from 'react';
import {
  EuiThemeProvider,
  EuiThemeDefault
} from '@elastic/eui';
import {Comp} from './Comp';

import './App.css'

// https://stackoverflow.com/questions/54006540/emotion-js-with-create-react-app-referenceerror-jsx-is-not-defined
// jsx; // eslint-disable-line no-unused-expressions

export const App = () => {
  return (
    <EuiThemeProvider theme={EuiThemeDefault}>
      <Comp />
    </EuiThemeProvider>
  );
};
