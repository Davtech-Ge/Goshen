// Uploads an audio file to Supabase Storage
import supabase from '../supabaseClient';

const uploadAudio = async (file) => {
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

export default uploadAudio