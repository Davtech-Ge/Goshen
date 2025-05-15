import React from 'react'
import { motion } from "framer-motion";

const Loading = () => {
return (
    <div className="flex flex-col items-center justify-center min-h-[100px]">
        <motion.div
            className="w-10 h-10 border-4 border-t-blue-500 border-gray-200 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <span className="mt-2 text-gray-600">Loading...</span>
    </div>
)
}

export default Loading