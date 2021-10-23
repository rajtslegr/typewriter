import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

interface ProtectedRouteProps extends RouteProps {
  component: React.FC<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
