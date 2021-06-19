import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import LogIn from './components/LogIn';
import PrivateRoute from './components/ProtectedRoute';
import SignUp from './components/SignUp';
import AuthProvider from './contexts/Auth';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
