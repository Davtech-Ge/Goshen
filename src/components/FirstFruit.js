import React from 'react'
import { Link } from 'react-router-dom'

const FirstFruit = () => {
  return (
    <div className="flex flex-col md:flex-row background">
      <div className="bg-blue-800 w-full md:w-fit flex flex-col p-2 h-auto md:h-[30vh] rounded shadow items-center justify-center mb-4 md:mb-0">
        <h1 className="text-2xl md:text-3xl text-white font-semibold mb-5 text-center">
          Payment of your First Fruit unlock God's overflowing blessings in your life.
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-40 w-full items-center">
            <button className="mt-5 md:mt-7 border-teal-600 border rounded-md py-3 md:py-4 px-6 md:px-8 text-white hover:bg-teal-600 hover:text-white transition-colors duration-500">
          <Link
            to='/giving'
          >
            Pay Now
          </Link>
          </button>
          <button className="mt-5 md:mt-7 border-teal-600 border rounded-md py-3 md:py-4 px-6 md:px-8 text-white hover:bg-teal-600 hover:text-white transition-colors duration-500">
          <Link
            to='/giving'
          >
            Learn More
          </Link>
          </button>
        </div>
      </div>
      <div className="bg-opacity-70 w-full md:w-[50%] h-auto md:h-[50vh] mb-4 rounded shadow flex items-center justify-center">
        <div>
          <p className="text-white px-2 text-sm md:text-base text-center md:text-left">
            Beloved, the principle of the first fruit is not just a ritual—it is a powerful act of faith and honor toward God. When we offer the first and best of our increase, we acknowledge that everything we have comes from Him. Proverbs 3:9-10 promises that honoring the Lord with our first fruits will cause our barns to be filled with plenty and our vats to overflow. It is a declaration that God is first in our lives—not just in words, but in action. The first fruit offering unlocks divine favor, supernatural provision, and sets the tone for the rest of your harvest. Don’t withhold what belongs to God; sow it in faith, and watch Him multiply it beyond your expectation. Trust God with your first, and He will bless the rest.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FirstFruit