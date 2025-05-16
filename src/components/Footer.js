import { FaYoutube, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import React from 'react';
import LogoIcon from '../logo/image.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='bg-black text-gray-400 text-sm mt-10'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Contacts section */}
        <div>
          <div className='mb-4'>
            <img src={LogoIcon} alt='Goshen logo' className='h-10 mb-2' />
          </div>

          <div className='mb-4'>
            <p className='font-semibold text-white'>MAIGERO BRANCH</p>
            <p>
              Goshen Avenue
              <br />
              Ungwan-Maigero, Kaduna, Nigeria
            </p>
          </div>

          <div className='mb-4'>
            <p className='font-semibold text-white'>NARAYI BRANCH</p>
            <p>
              Perry Plaza
              <br />
              Cinema Road, Narayi Kaduna, Nigeria
            </p>
            <p className='mt-2'>+2348036155180</p>
          </div>
          <a
            href='mailto:christgoshencitybethel@gmail.com?subject=Information Request&body=Hello Goshen City, I am will like to get an information concerning...'
            className='text-yellow-400 border p-2 border-yellow-400 rounded-full font-semibold mt-2 inline-block'
          >
            Contact Us
          </a>
        </div>

        {/* Link sections */}
        <div className='grid grid-col-2 gap-6'>
          <div>
            <h3 className='font-semibold mb-2 text-white'>GOSHEN-CITY</h3>
            <ul className='space-y-2'>
              <li>
                <Link to={'/about'}>About Goshen</Link>
              </li>
              <li>
                <Link to={'/'}>Goshen Youtube</Link>
              </li>
              <li>
                <Link to={'/'}>Giving</Link>
              </li>
              <li>
                <Link to={'/'}>Sermons</Link>
              </li>
              <li>
                <Link to={'/'}>Prayer Request</Link>
              </li>
              <li>
                <Link to={'/'}>Further Enquiries</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Resources and Centers */}
        <div className='flex flex-col justify-between'>
          <div>
            <h3 className='font-semibold text-white mb-2'>RESOURCES</h3>
            <ul className='space-y-2'>
              <li>
                <Link to={'/'}>Gallery</Link>
              </li>
              <li>
                <Link to={'/'}>Live</Link>
              </li>
              <li>
                <Link to={'/'}>Videos</Link>
              </li>
              <li>
                <Link to={'/'}>External Ministrations</Link>
              </li>
            </ul>

            <h3 className='font-semibold text-white mb-6'>CENTERS</h3>
            <ul className='space-y-2'>
              <li>
                <Link to={'/'}>Maigero Campus</Link>
              </li>
              <li>
                <Link to={'/'}>Narayi Campus</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className='flex flex-col items-center justify-center mt-8'>
        <div className='flex space-x-4 mb-4'>
          <a
            href='https://youtube.com/@apostlegloryhelenikeleji3559?si=DDicRgBTUCcPFA5s'
            className='text-2xl text-red-600'
          >
            <FaYoutube />
          </a>
          <a
            href='https://www.facebook.com/christ.goshen.7'
            className='text-2xl text-blue-600'
          >
            <FaFacebook />
          </a>
          <a
            href='mailto:christgoshencitybethel@gmail.com?subject=Information Request&body=Hello Goshen City, I am will like to get an information concerning...'
            className='text-2xl text-blue-600'
          >
            <MdEmail />
          </a>
        </div>
        <p>&copy; {date} Christ Goshen Assembly Worldwide. All rights reserved.</p>
        <div className='flex flex-wrap gap-2 justify-center mb-2 mt-2'>
          <Link to={'/login'} className='underline'>
            Privacy Policy
          </Link>
          <span>|</span>
          <a href='#' className='underline'>
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;