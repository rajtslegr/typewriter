import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const history = useHistory();

  const handleSignOut = async (): Promise<void> => {
    await signOut();
    history.push('/login');
  };

  return (
    <div className="flex flex-row justify-end w-screen h-12 p-2 text-black bg-brand-500">
      {user ? (
        <>
          <div className="flex items-center">
            <p>{user?.email}</p>
          </div>
          <button
            className="px-3 mx-4 transition bg-gray-900 border border-gray-900 rounded text-brand-500 hover:shadow hover:bg-brand-500 hover:text-gray-900"
            onClick={() => handleSignOut()}
          >
            LOGOUT
          </button>
        </>
      ) : (
        <button
          className="px-3 transition bg-gray-900 border border-gray-900 rounded text-brand-500 hover:shadow hover:bg-brand-500 hover:text-gray-900"
          onClick={() => history.push('/login')}
        >
          LOGIN
        </button>
      )}
    </div>
  );
};

export default Header;
