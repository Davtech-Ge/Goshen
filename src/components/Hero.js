import React, { useEffect, useState } from 'react'
import image1 from '../assets/homepage.jpg'
import image2 from '../assets/externalminis.jpg'
import image3 from '../assets/third.jpg'
import { FaArrowRight } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'

const HeroMessage = ({Message1, message2, message3, message4}) => {
  return(
    <div>
      <h1>{Message1} <br /> {message2} <br/>{message3} <br /> {message4}</h1>
    </div>
  )
}

const Second = () => {return (<h1>A Place where Gods <br /> Word is Revealed</h1>)}
const heroData = [
  {
    text: <HeroMessage Message1={'Christ Goshen city'} message2={'Assembly worldWide'} message3={'The place of '} message4={'Encountering God.'}/>,
    image: image1
  },
  {
    text: 'Gods Word Personified',
    image: image2
  },
  {
    text: <HeroMessage Message1={'Experience praising God'} message2={'and Encountering God'} message3={'Personally'}/>,
    image: image3
  },
]

const Hero = () => {
     const [slideIndex, setSlideIndex] = useState(0);

     const nextSlide = () => {
      if(slideIndex < heroData.length - 1) {
        setSlideIndex((prevIndex) => (prevIndex + 1) % heroData.length)
      } else {
        setSlideIndex(0)
      }
     };

     useEffect(() => {
      const interval = setInterval(() => {
          nextSlide()
        }, 5000)

        return () => clearInterval(interval) //clean up when the interval unmounts
     }, [])

  return (
    <section
      style={{
        backgroundImage: `url(${heroData[slideIndex]?.image || heroData[0].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="h-screen relative flex items-center pt-20 px-32"
    >
      <div className="absolute inset-0 bg-blue-950 opacity-30"></div>
      <div className="z-10 grid gap-14">
        <AnimatePresence mode="wait">
          <motion.p
            key={heroData[slideIndex]?.text}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-7xl text-white font-bold"
          >
            {heroData[slideIndex]?.text}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={heroData[slideIndex]?.text}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="#"
              className="bg-white inline-flex justify-center items-center p-2 rounded-full gap-10 pl-4"
            >
              <span className="text-xl font-semibold">Learn More</span>
              <span className="bg-teal-600 p-4 text-white rounded-full">
                <FaArrowRight />
              </span>
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex gap-2">
          {heroData.map((data, index) => {
            return (
              <span
                key={index}
                onClick={() => setSlideIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer bg-gray-600 hover:bg-white ${
                  index === slideIndex && 'bg-teal-600'
                }`}
              ></span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero