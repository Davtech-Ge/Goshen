import React from 'react';

const AboutUS = () => {
  return (
    <section className='bg-black h-auto text-white mt-7 py-6 px-4'>
      <div className='w-full mx-auto flex flex-col md:flex-row items-center'>
        {/* Image */}
        <div className='w-full md:w-1/2'>
          <img
            src='/images/aboutGosh.jpg'
            alt='Apostle glory helen'
            className='rounded-lg w-full object-cover h-full'
          />
        </div>

        {/* Text Content */}
        <div className='w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 flex flex-col items-start text-left'>
          <h2 className='text-lg md:text-2xl font-semibold mb-4'>
            Christ Goshen City Assembly
          </h2>
          <p className='text-gray-300 text-sm md:text-lg'>
            Is a dynamic weekly platform which is more than just a gathering, It is a divine appointment. Each session is infused with powerful Apostolic and Prophetic ministry, designed to usher you into deep encounters with God through the Word, Worship, Miracles, and Love. Here the atmosphere is charged with the presence of the Holy Spirit, as revelatory teachings unlock deeper truths and transform lives.
          </p>
          <button className='border border-blue-400 text-white bg-blue-700 px-4 py-2 text-sm md:text-lg mt-4 rounded-full hover:bg-blue-800'>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;