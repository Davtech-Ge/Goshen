import { useScroll } from 'framer-motion'
import React, { useState, useEffect} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const { scrollY } = useScroll();
  const [navBg, setNavBg] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center md:gap-10 justify-between h-fit px-4 md:px-16 text-white transition-colors duration-500 ${navBg ? 'bg-blue-800 shadow-black shadow-md rounded-sm' : ''}`}
    >
      {/* Logo */}
      <div className='mt-3 md:mt-6'>
        <img src='/image.png' alt='Christ Goshen City' className='w-16 h-16 md:w-28 md:h-28 p-2 md:p-4 object-cover rounded-full' />
      </div>

      {/* Desktop menu */}
      <div className='md:flex hidden flex-1 justify-center'>
        <ul className='flex items-center font-semibold space-x-6'>
          <li className='px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><Link to={'/'}>HOME</Link></li>
          <li className='px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#'>WHO WE ARE</a></li>
          <li className='px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#'>WHAT WE DO</a></li>
          <li className='px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#'>ONLINE GIVING</a></li>
          <li className='px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#'>MEDIA RESOURCES</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden flex items-center'>
        <button
          className='text-2xl focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isMenuOpen && (
          <div className='absolute top-full left-0 w-full bg-blue-800 shadow-md rounded-b-sm'>
            <ul className='flex flex-col items-center font-semibold py-4'>
              <li className='w-full text-center px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><Link to={'/'} onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
              <li className='w-full text-center px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#' onClick={() => setIsMenuOpen(false)}>WHO WE ARE</a></li>
              <li className='w-full text-center px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#' onClick={() => setIsMenuOpen(false)}>WHAT WE DO</a></li>
              <li className='w-full text-center px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#' onClick={() => setIsMenuOpen(false)}>ONLINE GIVING</a></li>
              <li className='w-full text-center px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#' onClick={() => setIsMenuOpen(false)}>MEDIA RESOURCES</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar