import { Link } from 'react-router-dom';

import Button from '../components/ui/Button';
import Error from '../components/ui/Error';
import Input from '../components/ui/Input';
import useSignUp from '../hooks/useSignUp';

const SignUp: React.FC = () => {
  const { error, register, handleSubmit, errors, onSubmit } = useSignUp();

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-full md:w-1/3"
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
          Sing Up
        </Button>
        <p>
          Already have an account?&nbsp;
          <Link to="/signin" className="underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
