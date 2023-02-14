import useAuth from '@/hooks/useAuth';

function SignIn() {
  const { signin, signout, user, loading } = useAuth();

  return (
    <>
      {user?.displayName ? (
        <div>
          {user?.displayName}
          <button className='btn btn-info' onClick={() => signout()}>
            Sing out
          </button>
        </div>
      ) : (
        <button className='btn btn-info' onClick={() => signin()}>
          {
            loading === true ?
            <span>Loading</span> :
            <span>Sign In</span>
          }
        </button>
      )}
    </>
  );
}

export default SignIn;
