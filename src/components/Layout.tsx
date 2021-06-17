import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/Global';
import Theme from '../styles/Theme';
import Header from './Header';

const SMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 12px auto;
  padding: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.6rem;
`;

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<IProps> = ({ children }) => (
  <Theme>
    <GlobalStyle />
    <Header />
    <SMain>{children}</SMain>
  </Theme>
);

export default Layout;
