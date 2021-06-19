import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';
import Button from './Button';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const handleSignOut = async (): Promise<void> => {
    console.log('ss');

    await signOut();
    history.push('/login');
  };

  return (
    <div className="flex flex-row justify-end w-screen h-12 p-2 space-x-2 text-black bg-brand-500">
      {user && (
        <>
          <div className="flex items-center">
            <p>{user?.email}</p>
          </div>
          <Button clicked={handleSignOut} type="submit" variant="light">
            Sign out
          </Button>
        </>
      )}
      {!user && location.pathname !== '/login' && (
        <Button
          clicked={() => history.push('/login')}
          type="submit"
          variant="light"
        >
          Log In
        </Button>
      )}
    </div>
  );
};

export default Header;
