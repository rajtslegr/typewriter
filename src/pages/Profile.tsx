import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../components/ui/Button';
import Error from '../components/ui/Error';
import Input from '../components/ui/Input';
import { useAuth } from '../contexts/Auth';
import { upsertProfile } from '../lib/supabase';
import { IProfileInputs } from '../types/types';

const Profile: React.FC = () => {
  const { user, profile, refreshProfile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue('username', profile?.username);
    setLoading(false);
  }, [profile, setValue]);

  const updateProfile: SubmitHandler<IProfileInputs> = async ({
    username,
  }): Promise<void> => {
    try {
      setError('');
      setLoading(true);
      await upsertProfile(user?.id, username);
    } catch (error) {
      setError(error.message);
      setValue('username', profile?.username);
    } finally {
      refreshProfile();
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <form
        onSubmit={handleSubmit(updateProfile)}
        className="flex flex-col w-full space-y-4 md:w-1/3"
      >
        <Input label="Email" value={user?.email} disabled></Input>
        <Input
          {...register('username', {
            required: { value: true, message: 'Username is required' },
            minLength: {
              value: 4,
              message: 'Username must by at least 4 characters long',
            },
          })}
          defaultValue={profile?.username || ''}
          type="text"
          label="Username"
        />
        <Error>{errors.username?.message || error}</Error>
        <Button
          onClick={() => handleSubmit}
          type="submit"
          disabled={loading}
          variant="dark"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default Profile;
