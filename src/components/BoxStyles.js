import React from 'react'
import FirstFruit from './FirstFruit'

const BoxStyles = () => {
return (
    <section className="w-full min-h-screen pt-16 flex bg-black mb-12">
        <div className="w-full min-h-screen p-4 flex flex-col">
            <div className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-1/3 h-fit bg-blue-800 rounded-lg p-6 md:p-10 mx-0 md:mx-5 my-5">
                    <h1 className="text-2xl md:text-4xl text-white">
                        Apostle Glory Helen<br /> Ikeleji's Sermons
                    </h1>
                    <p className="text-lg md:text-2xl text-white mt-4 md:mt-6">
                        Click here to Listen to Apostle Glory's sermon on all our platform and be blessed in Jesus name.
                    </p>
                    <button className="mt-6 md:mt-10 border-teal-600 border rounded-md py-3 md:py-4 px-6 md:px-8 text-white hover:bg-teal-600 hover:text-white transition-colors duration-500">
                        Listen
                    </button>
                </div>

                <div className="w-full md:w-1/3 h-fit md:bg-blue-800 bg-black rounded-lg p-6 md:p-10 mx-0 md:mx-5 my-5">
                    <h1 className="text-2xl md:text-4xl text-blue-600 font-semibold md:text-white">
                        Find a Homecell <br />Near You
                    </h1>
                    <p className="text-base md:text-xl text-white mt-4 md:mt-6">
                        Join a vibrant community of believers in your area and experience spiritual growth together. Click the button below to get started.
                    </p>
                    <button className="mt-5 md:mt-7 border-teal-600 border rounded-md py-3 md:py-4 px-6 md:px-8 text-white hover:bg-teal-600 hover:text-white transition-colors duration-500">
                        Join Now
                    </button>
                </div>

                <div className="w-full md:w-1/3 h-fit bg-blue-800 rounded-lg p-6 md:p-10 mx-0 md:mx-5 my-5">
                    <h1 className="text-2xl md:text-4xl text-white">Online Giving</h1>
                    <p className="text-base md:text-xl text-white mt-4 md:mt-6">
                        kindly click the button below to make a secure payment of your Seed, Tithe, Offering, or contribution towards the Church Building Project. We appreciate your generosity and commitment to the work of God
                    </p>
                    <button className="mt-5 md:mt-7 border-teal-600 border rounded-md py-3 md:py-4 px-6 md:px-8 text-white hover:bg-teal-600 hover:text-white transition-colors duration-500">
                        Pay Now
                    </button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full h-full">
                <div className="w-full md:w-1/3 h-fit md:bg-blue-800 bg-black rounded-lg p-6 md:p-10 mx-0 md:mx-5 my-5">
                    <h1 className="text-2xl md:text-4xl text-blue-600 font-semibold md:text-white">Testimony</h1>
                    <p className="text-base md:text-xl text-white mt-4 md:mt-6">
                        Have you been blessed through any of our services? We will love to hear your story! Your testimony can inspire and encourage others in their walk of faith. <br />Click below to share how God has touched your life
                    </p>
                    <button className="mt-5 md:mt-7 border-teal-600 border rounded-md py-3 md:py-4 px-6 md:px-8 text-white hover:bg-teal-600 hover:text-white transition-colors duration-500">
                        Share
                    </button>
                </div>
                {/* <div className="sm:hidden w-full md:w-1/3 h-40 md:h-[50vh] bg-black p-6 md:p-10 mx-0 md:mx-5 my-5 flex items-center justify-center">
                    <h1 className="text-black">hello</h1>
                </div>
                <div className="sm:hidden w-full md:w-1/3 h-40 md:h-[50vh] bg-black p-6 md:p-10 mx-0 md:mx-5 my-5 flex items-center justify-center">
                    <h1 className="text-black">hello</h1>
                </div> */}
            </div>
            <div className="w-full">
                <FirstFruit />
            </div>
        </div>
    </section>
)
}

export default BoxStyles