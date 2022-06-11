import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../contexts/Auth';

const ProtectedRoute = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/signin" />;
};
export default ProtectedRoute;
