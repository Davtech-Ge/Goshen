import React from 'react'

const Login = () => {
  return (
    <main className='w-full h-screen bg-gray-800 flex justify-center items-center'>
        <div className='bg-blue-800 p-8 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Login</h2>
            <form className='flex flex-col'>
                <input type='text' placeholder='Username' className='mb-4 p-2 rounded-md' />
                <input type='email' placeholder='Email' className='mb-4 p-2 rounded-md' />
                <input type='password' placeholder='Password' className='mb-4 p-2 rounded-md' />
                <button type='submit' className='bg-gray-500 text-white py-2 rounded-md hover:bg-blue-600'>Login</button>
            </form>
        </div>
    </main>
  )
}

export default Login