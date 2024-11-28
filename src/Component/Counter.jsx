import React from 'react'

const Counter = (props) => {
  return (
    <div className='lg:py-[26px] py-3 w-full grid place-items-center'>
        <h3 className="inline-block text-center tracking-[1.8px] font-Barlow text-[25px] lg:text-[60px] text-primary font-semibold relative after:content-[''] lg:after:w-[10px] after:w-[6px] lg:after:h-[10px] after:h-[6px] after:bg-brand after:absolute lg:after:bottom-[21px] after:bottom-[10px] lg:after:right-[-15px] after:right-[-7px] after:rounded-full"><span className="count">{props.countNumber}</span>{props.unit}</h3>
        <h5 className='lg:text-[18px] text-[14px] font-oswald text-primary font-light tracking-[0.36px]'>{props.title}</h5> 
    </div>
  )
}

export default Counter