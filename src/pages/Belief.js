import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6';

const Belief = () => {
const [openIndex, setOpenIndex] = React.useState(null);

const accordionData = [
    {
        title: "Restoration of Destinies",
        content:
            "We believe in divine restoration and the fulfillment of God-ordained purposes. (1 Samuel 30:8, Joel 2:25)",
    },
    {
        title: "Deliverance and Freedom",
        content:
            "We believe in the power of God to set the captives free from all bondage. (Isaiah 61:1)",
    },
    {
        title: "Fruitfulness",
        content:
            "We believe that God's blessing empowers believers to be fruitful and multiply in every area of life. (Genesis 1:28)",
    },
    {
        title: "Royal Priesthood",
        content:
            "We believe that every believer is chosen, set apart, and called to walk in spiritual authority and holiness. (1 Peter 2:9)",
    },
];

const handleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
};

return (
    <main className="bg-black w-full min-h-screen pt-10">
        <div className="md:flex grid-cols-1 w-full p-4">
            <h1 className="text-white md:hidden font-bold text-3xl"> CORE BELIEFS </h1>
            <div className="text-white w-full justify-center items-center flex md:pt-10">
                <img
                    src="/images/image.png"
                    alt="Goshen Logo"
                    className="w-60 h-60 md:w-80 md:h-80 object-cover"
                />
            </div>
            <div className="text-white w-full md:pt-12">
                <h1 className="text-white font-bold text-3xl mb-8 hidden md:flex">
                    CORE BELIEFS
                </h1>
                 <div className="w-full mx-auto mt-10">
            {accordionData.map((item, idx) => (
                <div key={idx} className="mb-4 border border-blue-700 rounded">
                    <button
                        className="w-full text-left px-4 py-3 bg-blue-900 text-white font-semibold focus:outline-none flex justify-between items-center"
                        onClick={() => handleAccordion(idx)}
                    >
                        {item.title}
                        <span>{openIndex === idx ? <FaMinus /> : <FaPlus />}</span>
                    </button>
                    {openIndex === idx && (
                        <div className="px-4 py-3 bg-blue-950 text-white">
                            {item.content}
                        </div> 
                    )}
                </div>
            ))}
        </div>
            </div>
        </div>
    </main>
);
}

export default Belief