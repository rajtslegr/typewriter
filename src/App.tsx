import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import Login from './components/Login';
import PrivateRoute from './components/ProtectedRoute';
import Signup from './components/Signup';
import AuthProvider from './contexts/Auth';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
