import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './Theme';

type Props = {
  theme: ThemeType;
};

const GlobalStyle = createGlobalStyle<Props>`
  body {
    height: 100vh;
    font-family: 'Noto Sans', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
