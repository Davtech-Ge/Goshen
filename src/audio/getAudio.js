export const getAudioUrl = async (filePath) => {
  const { data, error } = await supabase.storage
    .from('audio')
    .getPublicUrl(filePath); // or use createSignedUrl for private files

  if (error) {
    console.error('Get URL error:', error.message);
    return null;
  }

  return data.publicUrl;
};
