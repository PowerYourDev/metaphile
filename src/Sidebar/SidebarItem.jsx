import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const SidebarItem = ({Icon,ItemName}) => {
  return (
   <div className='bg-white rounded-lg flex items-center justify-between shadow-lg border border-gray-300 w-auto py-1 my-1 px-1'>
    <div className='flex gap-2 items-center'>
    <Icon size={20}/>
    <h1>{ItemName}</h1>
    </div>
    <RiArrowDropDownLine size={20}/>
   </div>
  )
}

export default SidebarItem