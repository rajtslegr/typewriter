import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';
import { supabase } from '../../lib/supabase';
import Button from './Button';

const Header: React.FC = () => {
  const { user, profile } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const handleSignOut = async (): Promise<void> => {
    await supabase.auth.signOut();
    history.push('/signin');
  };

  return (
    <header className="flex flex-row items-center justify-between w-screen h-12 p-2 text-black bg-brand-500">
      <Link to="/">
        <div className="items-center italic font-bold text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800">
            TypeWriter
          </span>
        </div>
      </Link>

      <div className="space-x-2">
        {user ? (
          <>
            <Button onClick={() => history.push('/dashboard')} variant="light">
              Dashboard
            </Button>
            <Button onClick={() => history.push('/profile')} variant="light">
              {profile?.username || user?.email}
            </Button>
            <Button onClick={handleSignOut} type="submit" variant="light">
              Sign out
            </Button>
          </>
        ) : (
          <Button
            onClick={() => history.push('/game')}
            type="button"
            variant="light"
          >
            Play without an account!
          </Button>
        )}
        {!user && location.pathname !== '/signin' && (
          <Button
            onClick={() => history.push('/signin')}
            type="submit"
            variant="light"
          >
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
