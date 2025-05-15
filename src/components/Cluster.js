import React, {useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const Cluster = () => {
     const [selectedButton, setSelectedButton] = useState(null);
const handleClick = (buttonId) => {
    setSelectedButton(buttonId);
};

return (
    <section className='bg-black h-fit text-white py-4 px-4 sm:gap-4 relative'>
        <h1 className='md:text-2xl text-lg'>Latest Feature</h1>
        <div className='w-full rounded-md max-w-4xl md:h-[70vh] sm:h-[30vh] sm:mt-16 md:mt-28 mx-auto'>
            <AnimatePresence>
                <motion.div 
                    whileHover={{ scale: 1.05}}
                    whileTap={{ scale: 0.8}}
                className='border border-gray-900 rounded-lg shadow-lg shadow-slate-900  '>
                    <MessageIcon
                        picture={
                            selectedButton === 2
                                ? '/images/externalminis.jpg'
                                : selectedButton === 3
                                ? '/images/giving.jpg'
                                : '/images/watchLive.jpg'
                        }
                        pTag={
                            selectedButton === 2
                                ? 'Keys to the Supernatural by Apostle Glory Helen Ikeleji during the Goshen Sunday Service'
                                : selectedButton === 3
                                ? 'Sow your seeds, tithes and Offering'
                                : 'Keys to The Supernatural'
                        }
                        HTag={
                            selectedButton === 2
                                ? 'Watch us Live'
                                : selectedButton === 3
                                ? 'Giving'
                                : 'Keys to the Supernatural by Apostle Glory Helen Ikeleji during the Goshen Sunday Service'
                        }
                        Buttontag={
                            selectedButton === 3 ? 'See Details' : 'Watch Now'
                        }
                    />
                </motion.div>
            </AnimatePresence>
        </div>
        <AnimatePresence>
        <div className='lg:absolute lg:top-1/4 sm:bg-black lg:left-3 grid lg:grid-cols-1 grid-cols-3 md:gap-4 text-center md:mx-6'>
                <motion.button
                    whileHover={{ scale: 1.2}}
                    whileTap={{ scale: 0.8}}
                onClick={() => handleClick(1)} className='bg-gray-800 lg:py-4 py-2 lg:px-4 px-3 md:mr-6 mr-2 shadow-lg rounded'>
                    <div className='text-2xl mb-2'><span className='text-3xl opacity-75'>▶️</span></div>
                    <h4 className='text-lg font-semibold'>Featured Sermon</h4>
                    <p className='text-gray-400 text-sm'>APOSTLE GLORY HELEN IKELEJI</p>
                </motion.button>

                <motion.button 
                    whileHover={{ scale: 1.2}}
                    whileTap={{ scale: 0.8}}
                onClick={() => handleClick(2)} className='bg-gray-800 lg:py-4 shadow-lg py-2 lg:px-4 md:mr-6 mr-3 px-3 rounded'>
                    <div className='text-2xl mb-2'><span className='text-3xl opacity-75'>▶️</span></div>
                    <h4 className='text-lg font-semibold'>Watch us LIVE</h4>
                    <p className='text-gray-400 text-sm'>CHRIST GOSHEN EXPERIENCE</p>
                </motion.button>

                <motion.button 
                    whileHover={{ scale: 1.2}}
                    whileTap={{ scale: 0.8}}
                onClick={() => handleClick(3)} className='bg-gray-800 py-3 shadow-lg px-4 md:mr-6 mr-3 rounded'>
                    <div className='text-2xl mb-2'><span className='text-3xl opacity-75'>✉</span></div>
                    <h4 className='text-lg font-semibold'>Give</h4>
                    <p className='text-gray-400'>SEED, TITHES, OFFERINGS</p>
                </motion.button>
            </div>
        </AnimatePresence>
    </section>
)
}
const MessageIcon = React.memo(({ picture, pTag, HTag, Buttontag }) => {
    return (
            <div className='relative rounded-lg overflow-hidden w-full my-auto h-[60vh] shadow-lg'>
                <div className='w-full'>
                    <img src={picture} alt='livestream' className='w-full opacity-75 object-cover' />
                </div>
                <div className='absolute bottom-0 right-5 p-4'>
                    <h3 className='text-lg font-semibold'>{HTag}</h3>
                    <p className='text-gray-300  mt-2'>{pTag}</p>
                    <button className='mt-4 border border-yellow-500 text-yello-500 px-3 py-1 rounded-full hover:text-yellow-600'>
                        {Buttontag}
                    </button>
                </div>
            </div>
    );
}); 


export default Cluster




