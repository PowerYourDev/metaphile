import React from 'react'

const NoticeBoard = ({NoticeBoard}) => {
  return (
   <div className='border border-gray-300'>
    <h1 className='text-base font-bold text-center mt-2 mb-10'>Notice Board</h1>

    {
       NoticeBoard.map((item)=>{
             return (
               <div className='pl-4 mt-2'>
                <h1 className='text-base font-medium'>{item?.Heading}</h1>
                <p class="whitespace-normal">{item?.data}</p>
               </div>
             )
       }) 
    }
     
    
   </div>
  )
}

export default NoticeBoard