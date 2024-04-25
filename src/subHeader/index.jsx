import React from 'react'

import SubHeaderItems from './SubHeaderItems'
import { schoolData } from '../constants'


const SubHeader = () => {
  return (
    <div className='mt-1 mr-1 border-4 border-[#4c8fb8] py-1'>
    
    <div className='flex gap-x-4'>
    {
        schoolData.map((SchoolItem)=>{
          return  <SubHeaderItems   Icon={SchoolItem?.Icon}
          ItemName={SchoolItem?.ItemName}
          NumberOfQuantity={SchoolItem?.NumberOfQuantity}/>
        })
     }
    </div>

     
    </div>
  )
}

export default SubHeader