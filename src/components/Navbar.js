import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full z-10 flex items-center justify-between h-20 px-32 text-white'>
      <div className='mt-6'>
        <img src='/image.png' alt='Christ Goshen City' className='w-28 h-28 p-4 object-cover rounded-full' />
      </div>
      <ul className='flex items-center font-semibold space-x-6'>
        <li className='px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#'>HOME</a></li>
        <li className='px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#'>WHO WE ARE</a></li>
        <li className='px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#'>WHAT WE DO</a></li>
        <li className='px-7 py-3 text-sm bg-white text-black transition-colors duration-500 rounded-full'><a href='#'>ONLINE GIVING</a></li>
        <li className='px-7 py-3 text-sm bg-white text-black transition-colors duration-500 rounded-full'><a href='#'>MEDIA RESOURCES</a></li>
      </ul>
    </nav>
  )
}

export default Navbar