import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

const Signup: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // Get signUp function from the auth context
  const { signUp } = useAuth();

  const history = useHistory();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    // Get email and password input values
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    // Calls `signUp` function from the context
    const { error } = await signUp({ email, password });

    if (error) {
      alert(error.message);
    } else {
      // Redirect user to Dashboard
      history.push('/');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Sign up</button>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </>
  );
};

export default Signup;
