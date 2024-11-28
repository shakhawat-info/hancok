import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
const TeamCart = (props) => {
  return (
    <div className="relative group overflow-hidden">
      <img src={props.image} alt="teamimage" />
      <div className="absolute lg:bottom-[-38%] bottom-[-40%] left-0 backdrop-sepia-0 bg-bdybg/30 p-[30px]  w-full flex items-end group-hover:bottom-0 duration-[.4s]" >
        <div className="  w-1/2 ">
          <h3 className=" font-Barlow lg:text-[30px] text-[20px] font-semibold text-primary pb-4 ">
            {props.title}
          </h3>
          <p className=" font-oswald text-base lg:block hidden text-secondery max-w-[300px] ">
            {props.extra}
          </p>
          <button
            type="button"
            className="font-oswald text-base text-primary py-2 px-5 bg-brand mt-5"
          >
            Know more
          </button>
        </div>
        <div className=" w-1/2 flex justify-around ">
            <ul className="flex gap-x-5">
                <li className=" w-[35px] h-[35px] rounded-full grid place-items-center bg-brand text-primary "><FaFacebookF /></li>
                <li className=" w-[35px] h-[35px] rounded-full grid place-items-center bg-brand text-primary "><FaLinkedinIn /></li>
                <li className=" w-[35px] h-[35px] rounded-full grid place-items-center bg-brand text-primary "><IoLogoTwitter /></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamCart;
