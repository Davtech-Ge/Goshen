import React from 'react'

const AboutUS = () => {
  return (
    <section className='bg-black h-[80vh] text-white mt-7 py-6 px-4'>
        <div className=' relative w-5xl mx-auto flex flex-col md:h-[70vh] h-4/6 md:flex-row items-center'>
            <img src='/images/aboutGosh.jpg' alt='Apostle glory helen'  className='rounded-lg w-full object-cover h-full ' />
            <div className='absolute top-0 md:w-[50%] w-[80%] mt-24 md:mt-32 md:pl-16'>
                <h2 className='text-sm md:text-2xl font-semibold mb-2'>Christ Goshen city Assembly</h2>
                <p className='text-gray-300 text-xs md:text-xl'>
                  Is a dynamic weekly platform  which is more than just a gathering, It is a divine appointment. Each session is infused with powerful Apostolic and Prophetic ministry, designed to usher you into deep encounters with God through the Word, Worship, Miracles, and Love. Here the atmosphere is charged with the presence of the Holy Spirit, as revelatory teachings unlock deeper truths and transform lives
                </p>
                <button className='border border-blue-400 text-white bg-blue-700 md:px-3 md:py-2 px-2 py-1 sm:text-xs mt-3 md:mt-8 ml-3 rounded-full hover:bg-blue-800'>
                    Learn More
                </button>
            </div>
        </div>
    </section>
  )
}

export default AboutUS