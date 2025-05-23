import { Link } from 'react-router-dom';
import supabase from '../supabaseClient';
import {useState} from 'react'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleSignup = async (e) => {
    e.preventDefault()
    setMessage('')

    const { data, error} = await supabase.auth.signUp({
      email: email,
      password: password,
      
    })

    if (error) {
        setMessage(error.message);
        return;
    }

    if (data) {
        setMessage('User Account Created ')

    }
  }

  return (
    <main className='w-full h-screen bg-gray-800 flex justify-center items-center'>
        <div className='bg-blue-800 p-8 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Sign Up</h2>
            {message && <p className='text-red-500 mb-4'>{message}</p>}
            <form onSubmit={handleSignup} className='flex flex-col'>
                <input type='email'
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
                <button type='submit' className='bg-gray-500 text-white py-2 rounded-md hover:bg-blue-600'>SignUp</button>
            </form>

            <p className='text-sm text-gray-400 py-5'>Already have an Account? <Link to='/login' className='p-2 underline text-white'>Sign In</Link></p>
        </div>
    </main>
  )
}

export default SignUp