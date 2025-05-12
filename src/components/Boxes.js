import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const Boxes = () => {
    const [current, setCurrent] = useState(0);

    const boxes = [
        <Messages background={'messages'} heading={"Listen & download Sermons"} action={"AUDIO"} link={"/messages"}/>,
        <Messages background={'seed'} heading={"Watch Live"} action={"LIVESTREAM"} link={"/messages"}/>,
        <Messages background={'seed'} heading={"Seed, Tithes and Offering"} action={"GIVE"} link={"/messages"}/>,
        <Messages background={'fellowship'} heading={"Join our Fellowship"} action={"JOIN"} link={"/messages"}/>,
        <Messages background={'event'} heading={"External Ministration"} action={"EVENT"} link={"/messages"}/>,
        <Messages background={'seed'} heading={"Gallery"} action={"PHOTOS"} link={"/messages"}/>,
        <Messages background={'about'} heading={"About Goshen City"} action={"INFO"} link={"/messages"}/>,
        <Messages background={'school'} heading={"School of Ministry"} action={"COMING SOON"} link={""}/>,
        <Messages background={'contact'} heading={"Reach Out"} action={"CONTACT"} link={"/messages"}/>,
    ];

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1 >= boxes.length ? 0 : prev + 1));
    };

    return (
        <div className='w-screen mx-auto overflow-x-auto bg-black'>
            <div className='flex space-x-4 min-w-[800px] p-4'>
                {boxes.map((box, index) => (
                  <AnimatePresence>
                    <motion.div 
                        initial={{ scale: 1.02}}
                        whileHover={{ scale: 1.06}}
                        key={index}
                        className={`flex-shrink-0 w-72 h-96 bg-teal-200 text-black flex items-center justify-center text-2xl font-bold rounded-lg shadow-lg shadow-black ${
                            index === current
                                ? 'scale-105 transition-transform duration-300'
                                : 'scale-100 transition-transform duration-300'
                        }`}
                    >
                        {box}
                    </motion.div>
                  </AnimatePresence>
                ))}
            </div>
            <button 
                onClick={nextSlide} 
                className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-700"
            >
                Next Slide
            </button>
        </div>
    );
};

const Messages = ({heading, action, link, background}) => {
    return (
        <Link to={link} className={`${background} messages flex relative flex-col rounded-xl`}>
            <AnimatePresence>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <h1 className='absolute bottom-10 p-2 font-bold text-white text-sm flex'>{heading}</h1>
                    <button className='absolute bottom-3 font-light text-xs flex p-2 shadow-lg text-white'>
                        {action}
                    </button>
                </motion.div>
            </AnimatePresence>
        </Link>
    );
};

export default Boxes;