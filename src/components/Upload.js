import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import supabase from '../supabaseClient';

const Upload = ({ onClose }) => {
  const [audioFile, setAudioFile] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAudioFile(file);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!audioFile || !title || !author) {
      setMessage('All fields must be filled');
      return;
    }

    setLoading(true);

    const fileExt = audioFile.name.split('.').pop();
    const fileName = `${title.replace(/\s+/g, '_')}.${fileExt}`;
    const filePath = fileName;

    console.log('uploading files', filePath)

    // Upload to Supabase Storage
    const { error: uploadError } = await supabase
      .storage
      .from('audio')
      .upload(filePath, audioFile, { upsert: true});

    if (uploadError) {
      console.error('Upload error:', uploadError);
      setMessage("File upload error" + uploadError.message);
      setLoading(false);
      return;
    }

    // Insert metadata to DB
    const { error: dbError } = await supabase
      .from('audio_files')
      .insert([{
        title,
        author,
        date: new Date().toISOString(), // Add date if required
        audio: filePath
      }]);

    setLoading(false);

    if (dbError) {
      setMessage("Database insert error");
      return;
    }

    setMessage('Upload successful!');
    setTitle('');
    setAuthor('');
    setAudioFile(null);
  };

  return (
    <div className='w-full h-screen bg-gray-900 bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'>
      <div className='w-1/3 h-fit p-8 bg-black rounded-lg shadow-lg'>
        <div className='text-white text-center p-4 flex justify-between'>
          <h1 className='text-2xl font-bold text-white'>Upload Audio</h1>
          <div onClick={onClose} className='hover:cursor-pointer'>
            <FaTimes />
          </div>
        </div>
        <form onSubmit={handleUpload} className='flex flex-col p-6'>
          {message && <p className='text-red-500 mb-4'>{message}</p>}
          <label htmlFor='Title' className='text-white mb-2'>Title:</label>
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full h-10 p-2 mb-4 rounded-md text-white bg-gray-800'
            />
          <label htmlFor='author' className='text-white mb-2'>Author:</label>
          <input
            type='author'
            placeholder='Author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='w-full h-10 p-2 mb-4 rounded-md text-white bg-gray-800'
          />
          <label htmlFor='date' className='text-white mb-2'>Date:</label>
          <input
            type='date'
            placeholder='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='w-full h-10 p-2 mb-4 rounded-md text-white bg-gray-800'
          />
          <label htmlFor='audio' className='text-white mb-2'>Audio:</label>
          <input
            type='file'
            accept='audio/*'
            id='audio'
            onChange={handleFileChange}
            className='w-full h-10 p-2 mb-4 rounded-md text-white bg-gray-800'
          />
          <button
            type='submit'
            className='bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-600 flex items-center justify-center'
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;