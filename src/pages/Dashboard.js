import React, { useState } from 'react'
import Upload from '../components/Upload'

const Dashboard = () => {
    const [openUpload, setOpenUpload] = useState(false)
return (
    <main className='flex w-full h-screen bg-black'>
            <aside className='w-1/4 h-full bg-gray-900'>
                    <div className='flex flex-col items-center justify-center h-full'>
                            <h1 className='text-2xl font-bold text-white'>Dashboard</h1>
                            <nav className='mt-4'>
                                    <ul className='space-y-4'>
                                            <li><a href='/users' className='text-white'>Users</a></li>
                                            <li><a href='/audio' className='text-white'>Audio</a></li>
                                            <li><a href='/logout' className='text-white'>Logout</a></li>
                                    </ul>
                            </nav>
                    </div>
            </aside>

            <section className='w-3/4 h-full p-8 mt-14'>
                    <div className='flex justify-between w-full p-8'>
                            <h2 className='text-2xl font-bold text-white'>Welcome to the Dashboard</h2>
                            <button onClick={() => setOpenUpload(true)} className='bg-blue-800 text-white py-2 px-4 rounded-full'>Upload</button>
                    </div>
            </section>
            {openUpload && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-80">
                            <Upload onClose={() => setOpenUpload(false)} />
                    </div>
            )}
    </main>
)
}

export default Dashboard