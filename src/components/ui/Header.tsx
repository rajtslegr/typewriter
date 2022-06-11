import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/Auth';
import { supabase } from '../../lib/supabase';
import Button from './Button';

const Header: React.FC = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async (): Promise<void> => {
    await supabase.auth.signOut();
    navigate('/signin');
  };

  return (
    <header className="flex flex-row justify-between items-center p-2 w-screen h-12 text-black bg-brand-500">
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
            <Button onClick={() => navigate('/')} variant="light">
              Dashboard
            </Button>
            <Button onClick={() => navigate('/profile')} variant="light">
              {profile?.username || user?.email}
            </Button>
            <Button onClick={handleSignOut} type="submit" variant="light">
              Sign out
            </Button>
          </>
        ) : (
          <Button
            onClick={() => navigate('/game')}
            type="button"
            variant="light"
          >
            Play without an account!
          </Button>
        )}
        {!user && location.pathname !== '/signin' && (
          <Button
            onClick={() => navigate('/signin')}
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
