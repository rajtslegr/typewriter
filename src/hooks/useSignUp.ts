import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/Auth';
import { supabase } from '../lib/supabase';
import { AuthForm } from '../types/types';

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

  const onSubmit: SubmitHandler<AuthForm> = async (data): Promise<void> => {
    const { error } = await supabase.auth.signUp(data);

    if (error) {
      setError(error.message);
    } else {
      navigate('/');
    }
  };

  return { error, register, handleSubmit, errors, onSubmit };
};

export default useSignUp;
