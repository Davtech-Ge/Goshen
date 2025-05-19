import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Upload from '../components/Upload';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const [openUpload, setOpenUpload] = useState(false);
  const [openLink, setOpenLink] = useState(false);
 const { user, login, logout } = useAuth()

 const handleLogout = () => {
  logout();
  setTimeout(()=> {
    window.location.href ='/'
  }, 2000)
 
 }
  return (
    <main className='flex w-full h-screen justify-between bg-black'>
      {/* Sidebar */}
      <aside className='w-1/4 h-full bg-gray-900'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-2xl font-bold text-white'>Dashboard</h1>
          <nav className='mt-4'>
            <ul className='space-y-4'>
              <li>
                <Link 
                onClick={() => setOpenLink(true)}
                to='/dashboard/users' className='text-white'>
                  Users
                </Link >
              </li>
              <li>
                <Link
                 onClick={() => setOpenLink(true)}
                to='/dashboard/audio' className='text-white'>
                  Audio
                </Link>
              </li>
              <li>
                <Link
                 onClick={() => setOpenLink(true)}
                to='/dashboard/newsletter' className='text-white'>
                 Send Newsletter
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className='text-white'>
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <section className='w-3/4 h-full p-8 mt-14'>
        { openLink === false ? (
                <div className='flex justify-between w-full p-8'>
          <h2 className='text-2xl font-bold text-white'>Welcome {user ? user.email : 'Guest'}</h2>
        </div>
        ) : (
         <section className="w-3/4 h-full p-8 mt-14">
        <h2 className="text-2xl font-bold text-white">
          Welcome, {user ? user.email : "Guest"}
        </h2>
        <Outlet />
      </section> // outlets
        )}

        
      </section>

    </main>
  );
};

export default Dashboard;