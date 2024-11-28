import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="bg-[#0c0c0e] relative z-[1] overflow-hidden">
      <img
        src="images/bannerimg.png"
        alt="bnrimg"
        className="absolute z-[-1] h-full right-0 opacity-50 lg:opacity-100"
      />
      <div className="container">
        <div className="">
          <div className="lg:pt-[325px] pt-[100px] ">
            <h3 className="text-secondery font-oswald uppercase text-base lg:text-[27px] tracking-[2.7px]">
              life time
            </h3>
            <h1 className=' text-[25px] lg:text-[60px] max-w-[496px] font-oswald text-primary font-semibold uppercase relative after:content-[""] after:w-0 lg:after:w-[90px] after:h-[2px] after:bg-primary after:absolute after:bottom-[21px] after:right-[-115px]'>
              gaming experience
            </h1>
            <p className="font-oswald font-normal text-primary max-w-full lg:max-w-[41%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae alias voluptas optio. Veritatis recusandae pariatur
              qui dignissimos dolore similique ad adipisci eum. Quos aliquid
              fugiat magni illum eius?
            </p>
            <a
              href="#"
              className="bg-primary inline-flex items-center w-[95px] lg:w-[128px] h-[40px] lg:h-[50px] text-[14px] justify-center gap-x-[3px] lg:gap-x-[7px] mt-4 lg:mt-[48px]"
            >
              <span>view more</span>
              <MdOutlineDoubleArrow className=" mt-0 lg:mt-[4px]" />
            </a>
            <ul className="flex mt-[40px] lg:mt-[300px] pb-6 lg:pb-[100px] gap-x-[20px]">
              <li>
                <a href="#" className="social">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" className="social">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#" className="social">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="social">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
