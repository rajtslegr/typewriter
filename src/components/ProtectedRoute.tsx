/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

interface PrivateRouteProps extends RouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
}

const ProtectedRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;
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
