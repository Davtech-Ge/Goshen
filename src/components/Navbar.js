import { useScroll } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const { scrollY } = useScroll();
  const [navBg, setNavBg] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between h-fit px-32 text-white transition-colors duration-500 ${navBg ? 'bg-blue-800 shadow-black shadow-md rounded-sm' : ''}`}
    >
      <div className='mt-6'>
        <img src='/image.png' alt='Christ Goshen City' className='w-28 h-28 p-4 object-cover rounded-full' />
      </div>
      <ul className='flex items-center font-semibold space-x-6'>
        <li className='px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><Link to={'/'}>HOME</Link></li>
        <li className='px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#'>WHO WE ARE</a></li>
        <li className='px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#'>WHAT WE DO</a></li>
        <li className='px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#'>ONLINE GIVING</a></li>
        <li className='px-7 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full'><a href='#'>MEDIA RESOURCES</a></li>
      </ul>
    </nav>
  )
}

export default Navbar