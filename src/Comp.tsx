/** jsx jsx */
import {
  // jsx,
  css
} from '@emotion/react'
import * as React from 'react';
import {
  EuiIcon,
  EuiSpacer,
  EuiPanel,
  useEuiTheme
} from '@elastic/eui';

// https://stackoverflow.com/questions/54006540/emotion-js-with-create-react-app-referenceerror-jsx-is-not-defined
// jsx; // eslint-disable-line no-unused-expressions

const Internal = ({children, ...props}: any) => (
  <div {...props}>{children}</div>
)

export const Comp = () => {
  const [theme] = useEuiTheme();
  const using_css = css`
    color: ${theme.colors.euiColorPrimaryText}
  `;
  return (
    <div css={using_css}>
      <div css={{color: '#FF0000'}}>
        <Internal css={using_css}>Test</Internal>
        <Internal css={{color: '#FF0000'}}>Test</Internal>
        <EuiPanel css={using_css}>
          <EuiSpacer css={{background: theme.colors.euiFocusBackgroundColor}} />
          <EuiIcon type="reporter" size="l" />
          <EuiSpacer />
        </EuiPanel>
      </div>
    </div>
  );
};
