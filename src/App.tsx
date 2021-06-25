import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/ui/Layout';
import AuthProvider from './contexts/Auth';
import Dashboard from './pages/Dashboard';
import Game from './pages/Game';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <ProtectedRoute exact path="/" component={Dashboard} />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <Route exact path="/game" component={Game} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
