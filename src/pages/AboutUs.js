import React from 'react'

const AboutUs = () => {
return (
    <main className='bg-black w-full min-h-screen pt-10'>
        <div className='md:flex grid-cols-1 w-full p-4'>
            <div className='text-white w-full justify-center items-center flex md:pt-10'>
                <img src='/images/image.png' alt='Goshen Logo' className='w-60 h-60 md:w-80 md:h-80 object-cover' />
            </div>
            <div className='text-white w-fit md:pt-12'>
                <h2 className=' border-b-blue-700 text-2xl font-bold text-blue-600 mb-4'>ABOUT CHRIST GOSHEN CITY </h2>
                    <p className='text-lg mb-6'>
                        Apostolic. Prophetic. Transformational.
                    Celebrating 11 years of Kingdom impact.

                    Christ Goshen City Worldwide is a vibrant, Spirit-led apostolic and prophetic ministry founded in divine obedience by Apostle Glory Helen Ikeleji. Established in June 2014, the ministry was birthed out of a vision to raise a generation of believers who are rooted in the Word, empowered by the Holy Spirit, and equipped to represent Christ in every sphere of influence.

                    Now in its 11th year, Christ Goshen City Worldwide has become a spiritual hub of revival, deliverance, and destiny restoration. With a strong emphasis on prophetic worship, revelatory teaching, and intensive prayer, the church continues to be a place where lives are transformed, families are restored, and people are launched into their Kingdom purpose.
                    </p>

                     <h2 className=' border-b-blue-700 text-xl font-bold text-blue-600 mb-4'>A Growing Vision with Global Impact</h2>
                    <p className='text-lg mb-6'>

                        A Growing Vision with Global Impact
                        By the leading of the Holy Spirit, the ministry has grown to include two thriving branches, both committed to advancing the Kingdom through sound doctrine, apostolic leadership, and prophetic activation. Each branch is a wellspring of healing, hope, and empowerment—raising disciples who walk in dominion and influence their communities with the love and power of Jesus Christ.
                    </p>

                    <h2 className='text-xl font-bold text-blue-600 mb-4'>Our Core Mandates:</h2>
                    <ul className='list-disc pl-6'>
                        <li>
                            Word – To teach and preach the undiluted truth of the Gospel with power and clarity.
                        </li>
                        <li>
                            Worship – To cultivate a dwelling place for God through prophetic, Spirit-filled worship.
                        </li>
                        <li>
                           Warfare & Deliverance – To liberate the oppressed through intercession and spiritual warfare.
                        </li>
                        <li>
                            Discipleship – To raise a Godly army prepared to transform culture and fulfill divine purpose.
                        </li>
                        <li>
                           Empowerment – To equip believers through leadership training, prophetic impartation, and educational initiatives.
                        </li>
                    </ul>

                    <h2 className=' border-b-blue-700 text-xl font-bold text-blue-600 mb-4'>A Church Where God Dwells</h2>
                    <p className='text-lg mb-9'>
                        Christ Goshen City is not just a church, it is a movement of revival and reformation, calling men and women into deeper intimacy with God and active Kingdom assignment. Every service, conference, and gathering is an atmosphere of divine encounters, where the Holy Spirit moves powerfully, confirming His Word with signs, miracles, and transformed lives.
                    </p>

                    <h2 className=' border-b-blue-700 text-xl font-bold text-blue-600 mb-4'>Join Us</h2>
                    <p className='text-lg mb-9'>
                        Whether you're seeking spiritual growth, healing, purpose, or a family of believers to grow with, Christ Goshen City Worldwide welcomes you. Come and experience the Word, Worship, and Wonders of God in an atmosphere where Jesus is glorified and destinies are shaped for eternity.
                    </p>
    
            </div>
        </div>
    </main>
)
}

export default AboutUs