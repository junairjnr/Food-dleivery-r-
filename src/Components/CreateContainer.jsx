import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion"
import {MdFastfood } from 'react-icons/md'
import { categories } from '../utils/data'
import Loader from './Loader'

const CreateContainer = () => {

  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrices] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[90%] md:w-[75%] border border-grey-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === "danger"
              ? "bg-red-400 text-red-800"
              : "bg-emerald-400 text-emerald-800"
              }`}>{message}
          </motion.p>
        )}

        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <MdFastfood className='text-xl text-green-700'/>
          <input
          type="text"
          required
          value={title}
          placeholder="Give me a title...!"
          onChange={(e) => setTitle(e.target.value)} 
          className='w-full h-full text-lg bg-transparent font-semibold 
          outline-none border-none placeholder:text-grey-400 text-textColor'/>
        </div>

        <div className='w-full'>
              <select onChange={(e) => setCategory(e.target.value)}
               className="w-full outline-none text-base border-b-2 border-gey-200 p-2 rounded-md cursor-pointer ">
                <option value="other" className='bg-white'>Select Category</option>
                {categories && categories.map((item) =>(
                  <option key={item.id} className="text-base border-0 outline-none
                  capitalize bg-white text-headingColor"
                  value={item.urlParamName}>
                    {item.name}
                  </option>
                ))}
              </select>
        </div>

        <div className='group flex justify-center items-center flex-col border-2 border-dotted
        border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg '>
          {isLoading ? <Loader/> : <></>}
        </div>
      </div>
    </div>
  )
}

export default CreateContainer
