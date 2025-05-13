// Uploads an audio file to Supabase Storage
import supabase from './supabaseClient';

export const uploadAudio = async (file) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { data, error } = await supabase.storage
    .from('audio') // your bucket name
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.error('Upload error:', error.message);
    return null;
  }

  return filePath; // You’ll use this to retrieve it
};


// Usage example. use it when u have charge
import React, { useState } from 'react';
import { uploadAudio, getAudioUrl } from './audioService';

const AudioUploader = () => {
  const [file, setFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState('');

  const handleUpload = async () => {
    if (!file) return;
    const filePath = await uploadAudio(file);
    if (filePath) {
      const url = await getAudioUrl(filePath);
      setAudioUrl(url);
    }
  };

  return (
    <div>
      <input type="file" accept="audio/*" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      {audioUrl && (
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default AudioUploader;
