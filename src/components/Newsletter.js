import React, { useRef, useState } from 'react'
import supabase from '../supabaseClient'
import { useMutation } from '@tanstack/react-query'
import emailjs from '@emailjs/browser'

const Newsletter = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [message, setMessage] = useState('')
  const form = useRef();

  // Save newsletter to DB
  const saveNewsletter = async () => {
    const { error } = await supabase.from('newsletter').insert([
      { title, content }
    ]);
    if (error) throw new Error(error.message);
  };

  // Send emails to all subscribers
  const sendEmailsToSubscribers = async () => {
    const { data, error } = await supabase.from('suscriber').select('email');
    if (error) throw new Error(error.message);

    // Send email to each subscriber
    const sendPromises = data.map(subscriber =>
      emailjs.send(
        'service_ecfwthl',
        'template_r7ayad1',
        {
          email: subscriber.email,
          title: title,
          message: content,
        },
        'rMnlvQr9iwBk3fKKe'
      )
    );
    await Promise.all(sendPromises);
  };

  // React Query mutation for saving newsletter
  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      await saveNewsletter();
      await sendEmailsToSubscribers();
    },
    onSuccess: () => {
      setMessage('Newsletter sent and saved!');
      setTitle('');
      setContent('');
    },
    onError: (err) => setMessage(err.message)
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    mutate();
  };

  return (
    <main className='flex w-full h-fit'>
      <form onSubmit={handleSubmit} ref={form} className='flex flex-col p-6 bg-gray-800 rounded-lg w-2/3 mx-auto mt-10'>
        {message && <p className="mb-4 text-white">{message}</p>}
        <div className='mb-4'>
          <label className='text-white text-xl' htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full bg-gray-950 rounded-md p-2 text-gray-200'
            placeholder='Title'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='text-white text-xl mb-1' htmlFor='content'>Content</label>
          <textarea
            id='content'
            name='message'
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            placeholder='Write Content..'
            className='w-full overflow-y-hidden bg-gray-950 rounded-md p-2 text-gray-200'
          />
        </div>
        <button
          className='border border-blue-700 w-full rounded-lg hover:bg-gray-600 bg-blue-700 mt-1 py-2'
          type='submit'
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Post Letter'}
        </button>
      </form>
    </main>
  )
}

export default Newsletter