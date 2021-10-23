import React, { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../components/ui/Layout';
import AuthProvider from '../contexts/Auth';

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
