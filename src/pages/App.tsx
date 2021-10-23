import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Core from '../components/Core';
import ProtectedRoute from '../components/ProtectedRoute';
import Dashboard from './Dashboard';
import Game from './Game';
import Profile from './Profile';
import SignIn from './SignIn';
import SignUp from './SignUp';

const App: React.FC = () => {
  return (
    <Core>
      <Switch>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <Route exact path="/game" component={Game} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Core>
  );
};

export default App;
