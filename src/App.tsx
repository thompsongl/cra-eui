import * as React from 'react';

import {
  getDefaultEuiMarkdownParsingPlugins,
  getDefaultEuiMarkdownProcessingPlugins,
  EuiMarkdownEditor,
} from '@elastic/eui';

import './App.css'

const processing = getDefaultEuiMarkdownProcessingPlugins();
processing[1][1].components.timeline = () => <span>5</span>;
const parsing = getDefaultEuiMarkdownParsingPlugins();
export const Foo = () => {
  return (
    <div>
      <EuiMarkdownEditor
        aria-label="test"
        onChange={() => {}}
        value="hello"
        parsingPluginList={parsing}
        processingPluginList={processing}
      />
    </div>
  );
};