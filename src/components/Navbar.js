import { useScroll } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [navBg, setNavBg] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null); // State to track which dropdown is open
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu); // Toggle dropdown visibility
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center md:gap-10 justify-between h-fit px-4 md:px-16 text-white transition-colors duration-500 ${
        navBg ? 'bg-blue-800 shadow-black shadow-md rounded-sm' : ''
      }`}
    >
      {/* Logo */}
      <div className='mt-3 md:mt-6'>
        <img
          src='/image.png'
          alt='Christ Goshen City'
          className='w-16 h-16 md:w-28 md:h-28 p-2 md:p-4 object-cover rounded-full'
        />
      </div>

      {/* Desktop menu */}
      <div className='md:flex hidden flex-1 justify-center'>
        <ul className='flex items-center font-semibold space-x-6'>
          {/* Home button */}
          <li className='px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'>
            <Link to={'/'}>HOME</Link>
          </li>
          {/* Dropdown for Our About Us */}
          <li
            className='relative px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full cursor-pointer'
            onMouseEnter={() => toggleDropdown('about')}
            onMouseLeave={() => toggleDropdown(null)}
          >
            ABOUT US
            {dropdown === 'about' && (
              <ul className='absolute top-full left-0 bg-blue-800 text-white rounded shadow-md mt-2 py-2 w-48'>
                <li className='px-4 py-2 hover:bg-blue-600'>
                  <Link to='/about/history'>OUR HISTORY</Link>
                </li>
                <li className='px-4 py-2 hover:bg-blue-600'>
                  <Link to='/about/mission'>MISSION & VISION</Link>
                </li>
                <li className='px-4 py-2 hover:bg-blue-600'>
                  <Link to='/about/belief'>OUR BELIEFS</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Dropdown for Our Mission */}
          <li
            className='relative px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full cursor-pointer'
            onMouseEnter={() => toggleDropdown('mission')}
            onMouseLeave={() => toggleDropdown(null)}
          >
            OUR MISSION
            {dropdown === 'mission' && (
              <ul className='absolute top-full left-0 bg-blue-800 text-white rounded shadow-md mt-2 py-2 w-48'>
                <li className='px-4 py-2 hover:bg-blue-600'>
                  <Link to='/mission/vision'>Vision</Link>
                </li>
                <li className='px-4 py-2 hover:bg-blue-600'>
                  <Link to='/mission/goals'>Goals</Link>
                </li>
                <li className='px-4 py-2 hover:bg-blue-600'>
                  <Link to='/mission/values'>Core Values</Link>
                </li>
              </ul>
            )}
          </li>
          {/* Dropdown for Online Giving */}
          <li
            className='relative px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full cursor-pointer'
            onMouseEnter={() => toggleDropdown('giving')}
            onMouseLeave={() => toggleDropdown(null)}
          >
            ONLINE GIVING
            {dropdown === 'giving' && (
              <ul className='absolute top-full left-0 bg-blue-800 text-white rounded shadow-md mt-2 py-2 w-48'>
                <li className='px-4 py-2 hover:bg-blue-600'>
                  <Link to='/giving/tithes'>Tithes</Link>
                </li>
                <li className='px-4 py-2 hover:bg-blue-600'>
                  <Link to='/giving/offering'>Offering</Link>
                </li>
                <li className='px-4 py-2 hover:bg-blue-600'>
                  <Link to='/giving/first-fruit'>First Fruit</Link>
                </li>
              </ul>
            )}
          </li>
          {/* Dropdown for Media Resources */}
          <li
            className='relative px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full cursor-pointer'
            onMouseEnter={() => toggleDropdown('media')}
            onMouseLeave={() => toggleDropdown(null)}
          >
            MEDIA RESOURCES
            {dropdown === 'media' && (
              <ul className='absolute top-full left-0 bg-blue-800 text-white rounded shadow-md mt-2 py-2 w-48'>
                <li className='px-4 py-2 hover:bg-blue-600'>
                  <Link to='/media/gallery'>Gallery</Link>
                </li>
                <li className='px-4 py-2 hover:bg-blue-600'>
                  <Link to='/media/videos'>Videos</Link>
                </li>
                <li className='px-4 py-2 hover:bg-blue-600'>
                  <Link to='/media/live'>Live Streams</Link>
                </li>
              </ul>
            )}
          </li>
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
               <li className='w-full text-center px-7 py-3 text-sm hover:text-black transition-colors duration-500 rounded-full'>
                <button
                  className='w-full text-left'
                >
                 <Link to={'/'}  onClick={() => setIsMenuOpen(false)}>
                  HOME
                </Link>
                </button>
              </li>

              {/* <li className='w-full text-center px-7 py-3 text-sm hover:text-black transition-colors duration-500 rounded-full'>
                <button
                  className='w-full text-left'
                >
                 <Link to={'/about'}  onClick={() => setIsMenuOpen(false)}>
                  ABOUT US
                </Link>
                </button>
              </li> */}
              {/* Accordion for Our About us */}
              <li className='w-full text-center px-7 py-3 text-sm hover:text-black transition-colors duration-500 rounded-full'>
                <button
                  onClick={() => toggleDropdown('about')}
                  className='w-full text-left'
                >
                  ABOUT US
                </button>
                {dropdown === 'about' && (
                  <ul className='bg-blue-700 text-white rounded shadow-md mt-2 py-2 w-full'>
                    <li className='px-4 py-2 hover:bg-blue-600'>
                      <Link to='/about/history'>OUR HISTORY</Link>
                    </li>
                    <li className='px-4 py-2 hover:bg-blue-600'>
                      <Link to='/about/mission'>MISSION & VISION</Link>
                    </li>
                    <li className='px-4 py-2 hover:bg-blue-600'>
                      <Link to='/about/belief'>OUR BELIEFS</Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Accordion for Our Mission */}
              <li className='w-full text-center px-7 py-3 text-sm hover:text-black transition-colors duration-500 rounded-full'>
                <button
                  onClick={() => toggleDropdown('mission')}
                  className='w-full text-left'
                >
                  OUR MISSION
                </button>
                {dropdown === 'mission' && (
                  <ul className='bg-blue-700 text-white rounded shadow-md mt-2 py-2 w-full'>
                    <li className='px-4 py-2 hover:bg-blue-600'>
                      <Link to='/mission/vision'>Vision</Link>
                    </li>
                    <li className='px-4 py-2 hover:bg-blue-600'>
                      <Link to='/mission/goals'>Goals</Link>
                    </li>
                    <li className='px-4 py-2 hover:bg-blue-600'>
                      <Link to='/mission/values'>Core Values</Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Accordion for Online Giving */}
              <li className='w-full text-center px-7 py-3 text-sm hover:text-black transition-colors duration-500 rounded-full'>
                <button
                  onClick={() => toggleDropdown('giving')}
                  className='w-full text-left'
                >
                  ONLINE GIVING
                </button>
                {dropdown === 'giving' && (
                  <ul className='bg-blue-700 text-white rounded shadow-md mt-2 py-2 w-full'>
                    <li className='px-4 py-2 hover:bg-blue-600'>
                      <Link to='/giving/tithes'>Tithes</Link>
                    </li>
                    <li className='px-4 py-2 hover:bg-blue-600'>
                      <Link to='/giving/offering'>Offering</Link>
                    </li>
                    <li className='px-4 py-2 hover:bg-blue-600'>
                      <Link to='/giving/first-fruit'>First Fruit</Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Accordion for Media Resources */}
              <li className='w-full text-center px-7 py-3 text-sm hover:text-black transition-colors duration-500 rounded-full'>
                <button
                  onClick={() => toggleDropdown('media')}
                  className='w-full text-left'
                >
                  MEDIA RESOURCES
                </button>
                {dropdown === 'media' && (
                  <ul className='bg-blue-700 text-white rounded shadow-md mt-2 py-2 w-full'>
                    <li className='px-4 py-2 hover:bg-blue-600'>
                      <Link to='/media/gallery'>Gallery</Link>
                    </li>
                    <li className='px-4 py-2 hover:bg-blue-600'>
                      <Link to='/media/videos'>Videos</Link>
                    </li>
                    <li className='px-4 py-2 hover:bg-blue-600'>
                      <Link to='/media/live'>Live Streams</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;