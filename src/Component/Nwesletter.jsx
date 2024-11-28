import React from 'react'

const Nwesletter = () => {
  return (
    <section>
        <div className="container">
            <div className="relative w-full">
                <div className="absolute top-[-100px] left-0 w-full bg-brand py-[35px] px-[30px] flex lg:flex-row flex-col gap-y-4 justify-between items-center ">
                    <h2 className="head max-w-[725px] lg:text-[40px] text-[20px] tracking-normal ">subscribe us to get latest news in your inbox from hancok community</h2>
                    <form action="#" className='h-[40px] max-w-[410px] bg-primary rounded-3xl overflow-hidden relative '>
                      <input type="email" placeholder='YOUR EMAIL' className=' h-full pr-[117px] pl-5 text-[#666] font-medium font-Barlow outline-none ' required="required"/>
                      <button type='submit' className=' uppercase w-[117px] h-full bg-bdybg absolute top-0 right-0 text-primary font-medium font-Barlow ' >subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Nwesletter