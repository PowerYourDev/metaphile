import React from 'react'

import { CgProfile } from "react-icons/cg";

const SubHeaderItems = ({Icon,ItemName,NumberOfQuantity}) => {
  return (
    <div className='bg-gradient-to-r from-teal-300 to-teal-100 flex items-center gap-x-3  rounded-lg px-3 flex-1' >
    <Icon size={30}/>
    <div>
    <h2>{ItemName}</h2>
    <p> {ItemName==="Earnings" ?"Rs "+NumberOfQuantity : NumberOfQuantity}</p>
    </div>
</div>
  )
}

export default SubHeaderItems