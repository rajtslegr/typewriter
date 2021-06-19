import React, { useEffect, useState } from 'react';
import Button from '../components/ui/Button';
import Error from '../components/ui/Error';
import Input from '../components/ui/Input';
import { useAuth } from '../contexts/Auth';
import { upsertProfile } from '../lib/supabase';

const Profile: React.FC = () => {
  const { user, profile, refreshProfile } = useAuth();
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setUsername(profile?.username);
    setLoading(false);
  }, [profile]);

  const updateProfile = async ({
    username,
  }: {
    username: string | undefined;
  }): Promise<void> => {
    try {
      setLoading(true);
      await upsertProfile(user?.id, username);
    } catch (error) {
      setError(error.message);
    } finally {
      refreshProfile();
      setLoading(false);
    }
  };

  return (
    <div>
      <Input label="Email" value={user?.email} disabled />
      <Input
        label="Username"
        value={username || ''}
        onChange={(e) => setUsername(e.target.value)}
      />
      {error && <Error>{error}</Error>}
      <Button
        onClick={() => updateProfile({ username })}
        disabled={loading}
        variant="dark"
      >
        Update
      </Button>
    </div>
  );
};

export default Profile;
