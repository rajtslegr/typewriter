import { useState } from 'react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { useAuth } from '../contexts/Auth';
import { supabase } from '../lib/supabase';

const useSignIn = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (user) {
    navigate('/');
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data): Promise<void> => {
    const { error: err } = await supabase.auth.signIn(data);

    if (err) {
      setError(err.message);
    } else {
      navigate('/');
    }
  };

  return {
    user,
    error,
    setError,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useSignIn;
