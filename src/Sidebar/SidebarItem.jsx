import React from 'react'

const SidebarItem = ({Icon,ItemName}) => {
  return (
   <div className='bg-white rounded-lg flex items-center gap-2 relative z-10 border border-gray-300 w-auto py-1 my-1'>
    {Icon}
    <h1>{ItemName}</h1>
   </div>
  )
}

export default SidebarItem