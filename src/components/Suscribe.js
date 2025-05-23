import React, { useState } from 'react';
import { FaRegNewspaper } from 'react-icons/fa';
import supabase from '../supabaseClient';


const NewsletterIcon = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Floating Icon */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition"
        aria-label="Subscribe to Newsletter"
      >
        <FaRegNewspaper size={28} />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            <Newsletter setOpen={setOpen} />
          </div>
        </div>
      )}
    </>
  );
};

const Newsletter = ({setOpen}) => {
    const [email, setEmail] = useState('')

    const handleSuscribe = async (e) => {
      e.preventDefault();
      setOpen(false)

      const { data, error} = await supabase.from('suscriber').insert({
        email: email
      })
    }
    return (
        <div className='p-4 '>
            <h1 className='text-black text-xl mb-2 '>Suscribe to our Newsletter</h1>
            <form>
                <input type='text' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} className='w-full bg-teal-400 py-2 rounded-lg'/>

                <button
                onClick={handleSuscribe}
                 className='bg-blue-600 hover:bg-blue-700 w-full py-3 text-white mt-3 rounded-lg'>Suscribe</button>
            </form>
        </div>
    )
}

export default NewsletterIcon;

