import { useState } from 'react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { useAuth } from '../contexts/Auth';
import { supabase } from '../lib/supabase';

const useSignUp = () => {
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
    const { error: err } = await supabase.auth.signUp(data);

    if (err) {
      setError(err.message);
    } else {
      navigate('/');
    }
  };

  return { error, register, handleSubmit, errors, onSubmit };
};

export default useSignUp;
