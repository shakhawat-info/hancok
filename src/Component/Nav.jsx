import React from 'react';
import { TbWorld } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
const Nav = () => {
  return (
    <nav className=' py-3 lg:py-[25px] items-center fixed top-0 left-0 w-full bg-[#0c0c0e] z-[999]'>
        <div className="container">
            <div className="flex gap-x-[60px]">
                <img src="svg/logo.svg" alt="logo" />
                <div className="w-full flex items-center justify-between">
                <FaBarsStaggered className='text-primary text-2xl ml-auto lg:hidden'/>
                  <ul className='lg:flex hidden gap-x-[30px]'>
                    <li><a href="#" className='navlink'>Home</a></li>
                    <li><a href="#" className='navlink'>About us</a></li>
                    <li><a href="#" className='navlink'>Tornament</a></li>
                    <li><a href="#" className='navlink'>Store</a></li>
                    <li><a href="#" className='navlink'>Team</a></li>
                    <li><a href="#" className='navlink'>FAQ</a></li>
                    <li><a href="#" className='navlink'>Contact us</a></li>
                  </ul>
                  <ul className='lg:flex hidden items-center gap-x-[25px]'>
                    <li><a href="#" className='signin'><TbWorld className='w-[25px]'/></a></li>
                    <li><a href="#" className='signin inline-flex mt-[5px] gap-x-[7px]'><img src="svg/signin.svg" alt="signin" /> <span>Sign In</span></a></li>
                    <li><a href="#" className='signin'><FaSearch /></a></li>
                  </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav