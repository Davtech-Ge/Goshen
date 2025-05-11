import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full z-10 flex items-center justify-between h-20 px-32 text-white'>
      <div className='mt-6'>
        <img src='/image.png' alt='Christ Goshen City' className='w-28 h-28 p-4 object-cover rounded-full' />
      </div>
      <ul className='flex items-center font-semibold space-x-6'>
        <li className='px-7 py-3 hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#'>Home</a></li>
        <li className='px-7 py-3 hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#'>Explore</a></li>
        <li className='px-7 py-3 hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#'>About</a></li>
        <li className='px-7 py-3 bg-white text-black transition-colors duration-500 rounded-full'><a href='#'>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar