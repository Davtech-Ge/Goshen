import React, { useState } from 'react'
import supabase from '../supabaseClient'
import { useMutation } from '@tanstack/react-query'


const Newsletter = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    const letter = async () => {
    const { data, error} = await supabase.from('newsletter').insert([
        { title: title, content: content }
    ]);

     if(error) {
            throw new error(error.message);
        }

        return data;
}

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({ title, content})
    }

    const { mutate } = useMutation({
            mutationFn: letter
    })

  return (
    <main className='flex w-full h-[60vh]'>
      <form onSubmit={handleSubmit} className='flex flex-col p-6 bg-gray-800 rounded-lg w-2/3 mx-auto mt-10'>
        {""}
        <div className='mb-4'>
            {" "}
            <label className='text-white text-xl' htmlFor='title'>Title</label>
            <input type='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)} className='w-full bg-gray-950 rounded-md p-2 text-gray-200 ' placeholder='Title' required />
        </div>
        <div className='mb-4'>
            {" "}
            <label className='text-white text-xl' htmlFor='content'>Content</label>
            <textarea id='content' required value={content} onChange={(e) => setContent(e.target.value)} rows={5}
            placeholder='Write Content..' className='w-full   bg-gray-950 rounded-md p-2 text-gray-200' />
        </div>

        <button className='border border-blue-700 w-full rounded-lg hover:bg-gray-600 bg-blue-700 mt-1 py-2' type='submit'>Post Letter</button>
      </form>  
    </main>
  )
}

export default Newsletter