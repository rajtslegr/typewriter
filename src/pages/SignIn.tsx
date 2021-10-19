import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Error from '../components/ui/Error';
import Input from '../components/ui/Input';
import useSignIn from '../hooks/useSignIn';

const SignIn = () => {
  const { error, register, handleSubmit, errors, onSubmit } = useSignIn();

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
        <Error>{errors.password?.message || error}</Error>
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
