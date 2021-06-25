import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import Button from '../components/ui/Button';
import Error from '../components/ui/Error';
import Input from '../components/ui/Input';
import { useAuth } from '../contexts/Auth';
import { supabase } from '../lib/supabase';
import { IAuthInputs } from '../types/types';

const SignIn: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (user) {
    history.push('/');
  }

  const onSubmit: SubmitHandler<IAuthInputs> = async (data): Promise<void> => {
    const { error } = await supabase.auth.signIn(data);

    if (error) {
      setError(error.message);
    } else {
      history.push('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full space-y-4 md:w-1/3"
      >
        <Input
          {...register('email', {
            required: { value: true, message: 'Email is required' },
          })}
          type="email"
          label="Email"
        ></Input>
        <Error>{errors.email?.message}</Error>
        <Input
          {...register('password', {
            required: { value: true, message: 'Password is required' },
            minLength: {
              value: 6,
              message: 'Password must by at least 6 characters long',
            },
          })}
          type="password"
          label="Password"
        />
        <Error>{errors.password?.message}</Error>
        {error && <Error>{error}</Error>}
        <Button onClick={() => handleSubmit} type="submit" variant="dark">
          Log In
        </Button>
        <p>
          Don&apos;t have an account?&nbsp;
          <Link to="/signup" className="underline">
            Sign Up!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
