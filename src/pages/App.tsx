import { Navigate, Route, Routes } from 'react-router-dom';

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
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/game" element={<Game />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Core>
  );
};

export default App;
