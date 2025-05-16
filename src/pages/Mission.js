import React from 'react'

const Mission = () => {
  return (
     <main className='bg-black w-full min-h-screen pt-10'>
        <div className='md:flex grid-cols-1 w-full p-4'>
            <h1 className='text-white md:hidden font-bold text-3xl'>MISSION AND VISION </h1>
            <div className='text-white w-full justify-center items-center flex md:pt-10'>
                <img src='/images/image.png' alt='Goshen Logo' className='w-60 h-60 md:w-80 md:h-80 object-cover' />
            </div>
            <div className='text-white w-fit md:pt-12'>
                <h1 className='text-white font-bold text-3xl mb-8 hidden md:flex'>MISSION AND VISION </h1>
                <h2 className=' border-b-blue-700 text-2xl font-bold text-blue-600 mb-4'>Mission Statement</h2>
                    <p className='text-lg mb-6'>
                        To passionately lead souls into the Kingdom of God through a life of humility and holiness, empowering men and women to reflect the light of Christ, stand firm in truth and integrity, and live purposefully in alignment with God’s divine will.
                    </p>
                <h2 className='border-b-blue-700 border-black text-xl font-bold text-blue-600 mb-4'>Vision Statement</h2>
                <h3 className='border-b-blue-700 border border-black text-lg font-bold text-blue-600 mb-4'>We envision a global assembly dedicated to:</h3>
                <ul className='list-disc pl-6'>
                    <li>
                        Winning souls into God's Kingdom (Mark 16:15-16)``
                    </li>
                    <li>
                       Empowering men and women to shine as the light of God (Matthew 5:14)
                    </li>
                    <li>
                        Living in holiness and righteousness (1 Peter 1:16)
                    </li>
                    <li>
                        Preparing believers for eternity in Heaven (Revelation 21:4)
                    </li>
                    <li>
                        Upholding truth and integrity in all things (Proverbs 12:22)
                    </li>
                </ul>
    
            </div>
        </div>
    </main>
  )
}

export default Mission