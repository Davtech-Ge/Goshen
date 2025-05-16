import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="bg-black w-full min-h-screen flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-lg px-4">
        <img
          src="/images/broken.png"
          alt="Not Found"
          className="w-40 h-auto object-contain rounded-lg shadow-lg"
        />
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center mt-6">404 - Page Not Found</h1>
        <div className='flex'>
          <p className="text-gray-300 text-center mt-2">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link to='/' className='bg-blue-600 text-white text-lg px-2 py-1 border rounded-3xl border-blue-600 hover:bg-blue-800' >
            Go Back
          </Link>

        </div>
        </div>
    </main>
  )
}

export default NotFound