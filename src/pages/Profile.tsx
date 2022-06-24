import Button from '../components/ui/Button';
import Error from '../components/ui/Error';
import Input from '../components/ui/Input';
import useProfile from '../hooks/useProfile';

const Profile: React.FC = () => {
  const {
    user,
    profile,
    loading,
    error,
    errors,
    register,
    handleSubmit,
    updateProfile,
  } = useProfile();

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <form
        onSubmit={handleSubmit(updateProfile)}
        className="flex flex-col space-y-4 w-full md:w-1/3"
      >
        <Input label="Email" value={user?.email} disabled></Input>
        <Input
          {...register('username', {
            required: { value: true, message: 'Username is required' },
            minLength: {
              value: 4,
              message: 'Username must by at least 4 characters long',
            },
          })}
          defaultValue={profile?.username || ''}
          type="text"
          label="Username"
        />
        <Error>{errors.username?.message?.toString() || error}</Error>
        <Button
          onClick={() => handleSubmit}
          type="submit"
          disabled={loading}
          variant="dark"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default Profile;
