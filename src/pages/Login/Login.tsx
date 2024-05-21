import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constants';
import { useAppContext } from '../../store/app_context';

const LogIn = () => {
  const [error, setError] = React.useState<string | null>(null);
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });
  const { signIn } = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signIn(user.email, user.password);
      navigate(ROUTES.HOME.path);
    } catch (error) {
      setError(`Failed to sign up ${error}`);
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-md w-full mx-auto p-6 bg-white shadow rounded-md'>
        <h2 className='text-2xl font-bold mb-4'>Log in</h2>
        {
          error && (
            <p className='text-red-500 mb-4 text-sm font-medium'>{error}</p>
          )
        }
        <form onSubmit={handleSubmit} >
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
              Email
            </label>
            <input type='email' id='email' name='email' placeholder='email@test.com'
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
              onChange={handleChange} />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>
              Password
            </label>
            <input type='password' id='password' name='password' placeholder='password'
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
              onChange={handleChange} />
          </div>
          <button type='submit'
            className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 transition-colors duration-300 rounded focus:outline-none focus:shadow-outline'>
            Log in
          </button>
          <Link to={ROUTES.SIGN_UP.path} className='block text-center mt-4 text-blue-500 hover:text-blue-700'>
            Do not have an account? Sign up
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LogIn