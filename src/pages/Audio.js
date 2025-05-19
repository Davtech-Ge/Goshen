import React, { useState } from 'react'
import Upload from '../components/Upload'

const Audio = () => {
    const [audio, setAudio] = useState([])
    const [openUpload, setOpenUpload] = useState(false)
  return (
    <div className='mt-3 bg-black text-white py-2 px-8 '>
        <div className='flex items-center justify-between mb-6'>
            <h1 className='text-2xl font-bold text-white'>Audio</h1>
            <button onClick={() => setOpenUpload(true)} className='bg-blue-500 text-white px-4 py-2 rounded'>
                Upload Audio
            </button>
        </div>

        <div>
            <ul>
                <li><audio src={audio || null} controls/></li>
            </ul>
        </div>

         {openUpload && (
        <div className='fixed inset-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-80'>
          <Upload onClose={() => setOpenUpload(false)} />
        </div>
      )}
    </div>
  )
}

export default Audio