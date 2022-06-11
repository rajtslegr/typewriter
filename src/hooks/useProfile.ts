import { useEffect, useState } from 'react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from '../contexts/Auth';
import { upsertProfile } from '../lib/supabase';

const useProfile = () => {
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

  const updateProfile: SubmitHandler<FieldValues> = async ({
    username,
  }): Promise<void> => {
    try {
      setError('');
      setLoading(true);

      await upsertProfile(user?.id, username);
    } catch (e) {
      const err = e as Error;

      setError(err.message);
      setValue('username', profile?.username);
    } finally {
      refreshProfile();
      setLoading(false);
    }
  };

  return {
    user,
    profile,
    loading,
    error,
    errors,
    register,
    handleSubmit,
    updateProfile,
  };
};

export default useProfile;
