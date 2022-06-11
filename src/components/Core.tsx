import { ReactNode } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import AuthProvider from '../contexts/Auth';
import Layout from './ui/Layout';

interface Props {
  children: ReactNode;
}

const Core: React.FC<Props> = ({ children }) => {
  return (
    <AuthProvider>
      <Router>
        <Layout>{children}</Layout>
      </Router>
    </AuthProvider>
  );
};

export default Core;
