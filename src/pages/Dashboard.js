import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Upload from '../components/Upload';
import supabase from '../supabaseClient';

const Dashboard = () => {
  const [openUpload, setOpenUpload] = useState(false);
  const [openLink, setOpenLink] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('');
  
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (session) {
        setUser(session.user);

        // Fetch user role from a custom table (if applicable)
        // const { data, error } = await supabase
        //   .from('users') // Replace 'profiles' with your table name
        //   .select('role')
        //   .eq('id', session.user.id)
        //   .single();

        // if (data) {
        //   setRole(data.role);
        // } else if (error) {
        //   console.error('Error fetching role:', error.message);
        // }
      }
    };

//     fetchUser();
  }, []);
  console.log()
  return (
    <main className='flex w-full h-screen bg-black'>
      {/* Sidebar */}
      <aside className='w-1/4 h-full bg-gray-900'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-2xl font-bold text-white'>Dashboard</h1>
          <nav className='mt-4'>
            <ul className='space-y-4'>
              <li>
                <Link 
                onClick={() => setOpenLink(true)}
                to='users' className='text-white'>
                  Users
                </Link>
              </li>
              <li>
                <Link
                 onClick={() => setOpenLink(true)}
                to='audio' className='text-white'>
                  Audio
                </Link>
              </li>
              <li>
                <Link to='/logout' className='text-white'>
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <section className='w-3/4 h-full p-8 mt-14'>
        { openLink === false ? (
                <div className='flex justify-between w-full p-8'>
          <h2 className='text-2xl font-bold text-white'>Welcome to the Dashboard</h2>
          <button
            onClick={() => setOpenUpload(true)}
            className='bg-blue-800 text-white py-2 px-4 rounded-full'
          >
            Upload
          </button>
        </div>
        ) : (
         <Outlet /> // outlets
        )}

        
      </section>

      {/* Upload Modal */}
      {openUpload && (
        <div className='fixed inset-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-80'>
          <Upload onClose={() => setOpenUpload(false)} />
        </div>
      )}
    </main>
  );
};

export default Dashboard;