import * as React from 'react';

import {
  EuiIcon,
  EuiSpacer,
} from '@elastic/eui';

import './App.css'

export const App = () => {
  return (
    <div>
      <EuiSpacer />
      <EuiIcon type="reporter" size="l" />
      <EuiSpacer />
    </div>
  );
};
