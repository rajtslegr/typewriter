import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';
import Button from '../components/ui/Button';
import Error from '../components/ui/Error';
import Input from '../components/ui/Input';

const LogIn: React.FC = () => {
  const { signIn, user } = useAuth();
  const history = useHistory();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  if (user) {
    history.push('/');
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    const { error } = await signIn({ email, password });

    if (error) {
      setError(error.message);
    } else {
      history.push('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <form onSubmit={handleSubmit} className="flex flex-col w-1/3 space-y-4">
        <Input type="email" label="Email" ref={emailRef}></Input>
        <Input type="password" label="Password" ref={passwordRef} />
        {error && <Error>{error}</Error>}
        <Button clicked={() => handleSubmit} type="submit" variant="dark">
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

export default LogIn;
