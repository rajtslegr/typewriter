import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#B36FF6',
    secondary: '#017B92',
    accent: '#FF6BB5',
    text: '#737373',
    background: '#202020',
  },
  mediaQueries: {
    large: '(min-width: 1280px)',
    medium: '(min-width: 680px)',
    small: '(min-width: 450px)s',
  },
};

type ThemeType = typeof theme;

interface Props {
  children: React.FC[] | React.FC;
}

const Theme: DefaultTheme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export type { ThemeType };
export default Theme as React.ComponentType;
