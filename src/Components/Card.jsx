import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react"

const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference}className='relative w-60 h-60 rounded-[20px] p-[20px] bg-black overflow-hidden flex-shrink-0'>
        <FaFileAlt color='white'/>
        <p className='mt-5 leading-7 text-green-600'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full  left-0  text-white   '>
            <div className='flex justify-between px-4 py-2 mb-2 '>
                <h5>{data.filesize}</h5>
                {data.close ? <FaDownload/>:<IoMdClose/> }
                
                
            </div>
            {data.tag.isopen ? <div className='tag w-full py-2 bg-green-500 text-center'>
                <h4>{data.tag.tagtitle}</h4>
            </div> :null }
            
        </div>

       </motion.div>
  )
}

export default Card