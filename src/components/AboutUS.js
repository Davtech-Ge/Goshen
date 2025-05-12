import React from 'react'

const AboutUS = () => {
  return (
    <section className='bg-black text-white mt-7 py-6 px-4'>
        <div className=' relative w-5xl mx-auto flex flex-col md:h-[60vh] h-4/6 md:flex-row items-center'>
            <img src='/images/aboutGosh.jpg' alt='Apostle glory helen'  className='rounded-lg w-full object-cover h-full ' />
            <div className='absolute sm:bottom top-0 w-96 mt-20 pl-16'>
                <h2 className='text-sm md:text-2xl font-semibold mb-2'>Christ Goshen city Assembly</h2>
                <p className='text-gray-300 text-xs md:text-xl'>
                Christ Goshen is a weekly Apostolic and prophetic platform where people come to experience the Word, Worship, Miracle and Love. The revelatory teachings help believers to experience true intimacy with the Holy Spirit and learn to be with Him, be like Him and Represent Him
                </p>
                <button className='border border-yellow-500 text-yellow-500 px-3 py-2 mt-3 ml-3 rounded-full hover:text-yellow-700'>
                    Learn More
                </button>
            </div>
        </div>
    </section>
  )
}

export default AboutUS