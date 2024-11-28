import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import footone from '../assets/images/footone.png';
import foottwo from '../assets/images/foottwo.png';
import footthree from '../assets/images/footthree.png';
import footfour from '../assets/images/footfour.png';
import footfive from '../assets/images/footfive.png';
import footsix from '../assets/images/footsix.png';
const Footer = () => {
  return (
    <footer className="pt-[120px]">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap lg:justify-between justify-around ">
          <div className="text-center lg:text-left w-full">
            <img src="/svg/logo.svg" alt="Logo" className="mx-auto" />
            <p className=" text-[#666] font-oswald text-base uppercase mt-[30px] lg:max-w-[450px] max-w-full ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero
              officiis rem consectetur sunt cupiditate eius obcaecati, culpa,
              aspernatur aperiam id.
            </p>
            <ul className="lg:mt-[60px] mt-5 flex gap-x-[10px] lg:justify-start justify-center   ">
                <li className="footicon"><FaFacebookF /></li>
                <li className="footicon"><FaLinkedinIn /></li>
                <li className="footicon"><FaTwitter /></li>
                <li className="footicon"><FaInstagram /></li>
            </ul>
          </div>
          <div className="lg:mt-0 mt-7 w-1/2">
            <h3 className="foothead lg:text-left text-center">links</h3>
            <ul className="lg:mt-[30px] mt-3 flex flex-col lg:items-start items-center lg:gap-y-[30px] gap-y-3 ">
                <li className="footlist">home</li>
                <li className="footlist">about</li>
                <li className="footlist">tournament</li>
                <li className="footlist">contact</li>
            </ul>
          </div>
          <div className="lg:mt-0 mt-7 w-1/2">
            <h3 className="foothead lg:text-left text-center">teams</h3>
            <ul className="lg:mt-[30px] mt-3 flex flex-col lg:items-start items-center lg:gap-y-[30px] gap-y-3 ">
                <li className="footlist">POLANDINS</li>
                <li className="footlist">CS:GO</li>
                <li className="footlist">DOTA : 2</li>
                <li className="footlist">VALORANT</li>
            </ul>
          </div>
          <div className="lg:mt-0 mt-7 lg:text-left text-center w-full">
            <he className="foothead ">gallery</he>
            <div className="grid grid-cols-footGrid gap-[5px] mt-[30px]">
                <img src={footone} alt="footone"  className="w-full"/>
                <img src={foottwo} alt="foottwo"  className="w-full"/>
                <img src={footthree} alt="footthree"  className="w-full"/>
                <img src={footfour} alt="footfour"  className="w-full"/>
                <img src={footfive} alt="footfive" className="w-full" />
                <img src={footsix} alt="footsix"  className="w-full"/>
            </div>
          </div>
        </div>
        <div className="lg:mt-[95px] mt-10 py-[25px] border-t-[1px] border-[#666] border-solid ">
            <h6 className="text-primary text-[20px] font-Barlow text-center">© 2021 All rights reserved by <a href="#" className="text-brand">Themebea.</a></h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
