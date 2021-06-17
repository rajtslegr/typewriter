import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/ProtectedRoute';
import Signup from './components/Signup';
import AuthProvider from './contexts/Auth';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
