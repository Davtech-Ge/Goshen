import { Link } from 'react-router-dom';
import  supabase  from '../supabaseClient'
import {useState, useEffect} from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    const { error, data } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
      username: username
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('');
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    }
  };
  
  useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session);
  });

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });

  return () => subscription.unsubscribe();
}, []);

  return (
    <main className='w-full h-screen bg-gray-800 flex justify-center items-center'>
      <div className='bg-blue-800 p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold text-white mb-4'>Login</h2>
        {message && <p className='text-red-500 mb-4'>{message}</p>}
        <form onSubmit={handleLogin} className='flex flex-col'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='mb-4 p-2 rounded-md'
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='mb-4 p-2 rounded-md'
          />
          <button
            type='submit'
            className='bg-gray-500 text-white py-2 rounded-md hover:bg-blue-600 flex items-center justify-center'
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : null}
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p>Don't have an Account yet? <Link to='/signup'>Sign UP</Link></p>
      </div>
    </main>
  )
}

export default Login