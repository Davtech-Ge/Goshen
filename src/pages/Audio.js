import React, { useState } from 'react'

const Audio = () => {
    const [audio, setAudio] = useState([])
  return (
    <div className='mt-3 bg-black text-white py-2 px-8 '>
        <div>
            <h1 className='text-2xl font-bold text-white'>Audio</h1>
        </div>

        <div>
            <ul>
                <li><audio src='' controls/></li>
            </ul>
        </div>
    </div>
  )
}

export default Audio