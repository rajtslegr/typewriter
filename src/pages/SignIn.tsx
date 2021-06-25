import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../components/ui/Button';
import Error from '../components/ui/Error';
import Input from '../components/ui/Input';
import { useAuth } from '../contexts/Auth';
import { supabase } from '../lib/supabase';

const SignIn: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();
  const [error, setError] = useState<string | null>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  if (user) {
    history.push('/');
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    const { error } = await supabase.auth.signIn({ email, password });

    if (error) {
      setError(error.message);
    } else {
      history.push('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full space-y-4 md:w-1/3"
      >
        <Input type="email" label="Email" ref={emailRef}></Input>
        <Input type="password" label="Password" ref={passwordRef} />
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
