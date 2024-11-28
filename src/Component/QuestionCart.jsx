import React from 'react'

const QuestionCart = (props) => {
  return (
    <div className='flex lg:gap-x-[42px] gap-x-5 group'>
        <h3 className='Qnumber'>{props.Qnumber}</h3>
        <div className="">
            <h4 className='Qtitle group-hover:text-brand duration-[.4s] '>{props.Qtitle}</h4>
            <p className="mainQ">{props.mainQ}</p>
        </div>
    </div>
  )
}

export default QuestionCart