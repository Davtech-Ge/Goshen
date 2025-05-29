import { useEffect, useState } from 'react'
import image1 from '../assets/first.png'
import image2 from '../assets/second.png'
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
      className="h-screen relative flex items-center pt-20 px-4 sm:px-8 md:px-16 lg:px-32"
    >
      <div className="absolute inset-0 bg-blue-950 opacity-30"></div>
      <div className="z-10 grid gap-8 sm:gap-10 md:gap-14 w-full max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroData[slideIndex]?.text}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold break-words"
          >
            {heroData[slideIndex]?.text}
          </motion.div>
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
              className="bg-white inline-flex justify-center items-center p-2 rounded-full gap-4 sm:gap-6 md:gap-10 pl-2 sm:pl-4"
            >
              <span className="text-base sm:text-lg md:text-xl font-semibold">Learn More</span>
              <span className="bg-teal-600 p-3 sm:p-4 text-white rounded-full">
                <FaArrowRight />
              </span>
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 sm:mt-10 md:mt-12 flex gap-2">
          {heroData.map((data, index) => {
            return (
              <span
                key={index}
                onClick={() => setSlideIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer bg-gray-600 hover:bg-white ${
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