import React, { useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Cluster = () => {
    const tabs = [
        {title: 'WATCH US LIVE', icon: '📺', message: 'Watch Now'},
        {title: 'LISTEN TO OUR SERMONS', icon: '📺', message: 'Listen and Download Now'},
        {title: 'GIVING', icon: '💰', message: 'Seed, Tithe and Offering'},
    ]
    const [selectedTab, setSelectedTab] = useState()
  return (
    <div className='flex w-full h-screen bg-blue-950'>
        <nav className='flex flex-col items-center justify-center w-34 h-40 bg-gray-600 rounded-lg shadow-lg'>
            <ul className='m-10 p-0 text-lg font-semibold text-white'>
                {tabs.map((tab, index) => {
                    return (
                        <motion.li
                            key={index}
                            className='flex items-center justify-between w-40 h-10 p-2 bg-blue-400'
                            initial={false}
                            animate={{
                                backgroundColor: tab === selectedTab ? "#eee" : "#eee0",
                            }}
                            onClick={() => setSelectedTab(tab)}
                            >
                                {`${tab.icon} ${tab.title} ${tab.message}`}
                                {tab === selectedTab ? (
                                    <motion.div
                                        className='absolute bottom-0 left-0 right-0 h-2 bg-blue-500'
                                        whileHover={{scale: 1.2}}
                                        whileTap={{scale: 0.8}}
                                        transition={{duration: 0.2}}
                                        />
                                ): null}
                            </motion.li>
                    )
                })}
            </ul>
        </nav>
    </div>
  )
}

export default Cluster


<section className='w-full h-1/2 p-24'>
        <div className='h-fit p-6 bg-blue-950 flex justify-between'>
            <ul className='flex flex-col justify-between px-14 py-2 text-xl font-semibold text-white'>
                <li className='bg-gray-800 px-8 py-7 m-2 w-fit rounded-lg flex flex-col items-center'>
                    <span className='text-3xl opacity-75'>▶️</span>
                    WATCH US LIVE
                </li>
                <li className='bg-gray-800 px-8 py-6 m-2 w-fit rounded-lg flex flex-col items-center'>
                    <span className='text-3xl opacity-75'>🎵</span>
                    LISTEN TO OUR <br /> SERMONS
                </li>
                <li className='bg-gray-800 py-8 px-16 m-2 w-fit rounded-lg flex flex-col items-center'>
                    <span className='text-3xl opacity-75'>✉</span>
                    GIVING
                </li>
            </ul>
            <div className='w-full h-1/3 flex items-center justify-center'>
                {/* Right side box */}
                <div className='w-full h-1/3 rounded-lg shadow-lg relative'>
                    <img src='/image.png' alt='image' className='w-full h-full object-cover' />
                    <div className='absolute inset-0'>
                        <h1 className='text-white'>Welcome to Goshen Live</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    // const MessageIcon = ({picture, pTag, HTag, Buttontag}) => {
    //     return (
    //     <div>
    //         <div className='relative rounded-lg overflow-hidden w-full h-3/4 lg:h-screen shadow-lg mb-6'>
    //         <div className='w-full h-1/2'>
    //         <img src={picture} alt='livestream' className='w-full h-full object-cover' />
    //         </div>
    //         <div className='absolute bottom-0 left-0 w-full bg-opacity-50 p-4'></div>
    //             <h3 className='text-xl font-semibold text-white'>{HTag}</h3>
    //         </div>
    //         <div className=' absolute bottom-0  p-4'>
    //             <h3 className='text-xl font-semibold'>{HTag}</h3>
    //             <p className='text-gray-400 mt-2'>
    //                 {pTag}
    //             </p>


    s we reflect on the importance of generosity, may we be guided by 
    Scripture: 'Each one must give as he has decided in his heart, not reluctantly 
    or under compulsion, for God loves a cheerful giver.' — 2 Corinthians 9:7. May our giving be done in faith and joy.