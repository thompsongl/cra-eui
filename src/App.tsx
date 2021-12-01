import * as React from 'react';

import { EuiProvider } from '@elastic/eui';

import './App.css'

import { View } from './View'

export const App = () => {
  return (
    <EuiProvider>
      <View />
    </EuiProvider>
  );
};
