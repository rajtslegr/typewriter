import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/Auth';

const SHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 2rem;
  padding: 0.5rem;
  color: black;
  background-color: ${({ theme }) => theme.colors.primary};
  gap: 1rem;
`;

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const history = useHistory();

  const handleSignOut = async (): Promise<void> => {
    await signOut();
    history.push('/login');
  };

  return (
    <SHeader>
      {user ? (
        <>
          <p>{user?.email}</p>
          <button onClick={() => handleSignOut()}>LOGOUT</button>
        </>
      ) : (
        <button onClick={() => history.push('/login')}>LOGIN</button>
      )}
    </SHeader>
  );
};

export default Header;
