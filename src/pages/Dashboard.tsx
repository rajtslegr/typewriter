import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

const Dashboard: React.FC = () => {
  const { profile } = useAuth();

  return (
    <div className="flex flex-col w-full space-y-4">
      <h1 className="text-4xl">Welcome, {profile?.username}!</h1>
      <p>
        Let&apos;s <Link to="/game">play!</Link>
      </p>
    </div>
  );
};

export default Dashboard;
