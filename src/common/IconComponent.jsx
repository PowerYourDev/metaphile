import React from 'react'

const IconComponent = ({Icon,size,color }) => {
  return (
    <div className={`bg-${color} p-1`}>
        <Icon size={size}/>
    </div>
  )
}

export default IconComponent