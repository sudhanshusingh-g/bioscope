import React from 'react'

function Logo({source,name,className="",...props}) {
  return (
    <div className={`flex items-center justify-center ${className}`} {...props}>
        <img src={source} alt={name} 
        className='w-full h-full object-cover'
        />
    </div>
  )
}

export default Logo