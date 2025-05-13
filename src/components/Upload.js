import React from 'react'
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa'

const Upload = ({onClose}) => {
  return (
    <div className='w-full h-screen bg-gray-600 bg-opacity-70 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'>
        <div className='w-1/3 h-fit p-8 bg-black rounded-lg shadow-lg'>
            <div className='text-white text-center p-4 flex justify-between '>
                <h1 className='text-2xl font-bold text-white'>Upload Audio</h1>
                <div onClick={onClose} className='hover:cursor-pointer'>
                    <FaTimes />
                </div>
            </div>

            <form className='flex flex-col p-6'>
                <label htmlFor='Title' className='text-white mb-2'>Title:</label>
                <input type='text' placeholder='Title' className='w-full h-10 p-2 mb-4 rounded-md text-white bg-gray-800' />
                <label htmlFor='author' className='text-white mb-2'>Author:</label>
                <input type='text' placeholder='Author' className='w-full h-10 p-2 mb-4 rounded-md text-white bg-gray-800' />

                <label htmlFor='Audio' className='text-white mb-2'>Audio:</label>
                <button className='bg-gray-800 text-white py-2 px-4 rounded-md mb-4 justify-center items-center flex flex-col'>
                    <FaCloudUploadAlt className='text-2xl mb-2' />
                <label htmlFor='audio' className='text-white mb-2'>Upload file</label>
                <input 
                 type='file'
                 accept='audio/*'
                 id='audio' className='w-full h-10 p-2 mb-4 rounded-md hidden text-white bg-gray-800' />
                </button>

                <button type='submit' className='bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-600'>Upload</button>
            </form>
        </div>
    </div>
  )
}

export default Upload