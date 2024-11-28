import React from "react";
import AbImage from "../assets/images/aboutimage.png";
import Correct from "../assets/svg/correct.svg";
import { MdDoubleArrow } from "react-icons/md";
import Count from "./Counter";
const About = () => {
  return (
    <section className="pt-8 lg:pb-20 pb-7">
      <div className="container">
        <h2 className="head max-w-[518px] lg:after:w-[100px] after:w-0 after:bottom-[10px] lg:after:bottom-[15px] after:right-[120px] lg:after:right-[225px]">
          about the biggest hancok community
        </h2>
        <div className="lg:flex block lg:mt-16 mt-5 gap-x-[82px]">
          <div className="relative after:content-[''] after:w-[163px] after:h-[4px] after:bg-brand after:absolute after:top-[-4px] after:left-0 before:w-[4px] before:h-[163px] before:bg-brand before:absolute before:top-[-4px] before:left-[-4px] ">
            <img
              src={AbImage}
              alt="AbImage"
              className="rounded-ee-[65px] h-full"
            />
          </div>
          <div>
            <h3 className="font-oswald text-base mt-3 lg:mt-0 lg:text-[27px] font-semibold text-primary uppercase">
              most popular gaming platform.
            </h3>
            <ul className="mt-2 flex flex-col lg:gap-y-[10px] gap-y-[5] ">
              <li className="flex gap-x-[10px] abtlist">
                <img src={Correct} alt="Correct" />
                <span>World Bigghest Community & Gaming Server</span>
              </li>
              <li className="flex gap-x-[10px] abtlist">
                <img src={Correct} alt="Correct" />
                <span>Friendly Clan & Mates</span>
              </li>
              <li className="flex gap-x-[10px] abtlist">
                <img src={Correct} alt="Correct" />
                <span>We Provide Gaming Accesories</span>
              </li>
              <li className="flex gap-x-[10px] abtlist">
                <img src={Correct} alt="Correct" />
                <span>Largest Online Gaming Community & Shop</span>
              </li>
              <li className="flex gap-x-[10px] abtlist">
                <img src={Correct} alt="Correct" />
                <span>Hancok reaches more than 150 million monthly users</span>
              </li>
              <li className="flex gap-x-[10px] abtlist">
                <img src={Correct} alt="Correct" />
                <span>We are leading global media brand for games</span>
              </li>
            </ul>
            <p className="abtlist font-oswald mt-3 max-w-[468px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo
              sed odio temporibus magni quia eveniet odit placeat repellat quod
              ipsum modi necessitatibus, dolorum officia!
            </p>
            <button
              type="button"
              className="mt-[30px] w-[128px] h-[50px] bg-bgsecondery font-oswald text-base text-primary capitalize flex gap-x-2 justify-center items-center"
            >
              view more <MdDoubleArrow className="mt-[2px]" />
            </button>
          </div>
        </div>
        <div className="lg:mt-[50px] mt-5 lg:flex grid grid-cols-teamGrid gap-5">
          <div className="w-full bg-bgsecondery lg:rounded-tr-[50px] rounded-tr-[30px] lg:rounded-bl-[50px] rounded-bl-[30px] overflow-hidden">
            <Count countNumber="112" unit="K" title="Community Earning" />
          </div>
          <div className="w-full bg-bgsecondery lg:rounded-tr-[50px] rounded-tr-[30px] lg:rounded-bl-[50px] rounded-bl-[30px] overflow-hidden">
            <Count countNumber="12" unit="M" title="Total Member" />
          </div>
          <div className="w-full bg-bgsecondery lg:rounded-tr-[50px] rounded-tr-[30px] lg:rounded-bl-[50px] rounded-bl-[30px] overflow-hidden">
            <Count countNumber="100" unit="K" title="Streams Complete" />
          </div>
          <div className="w-full bg-bgsecondery lg:rounded-tr-[50px] rounded-tr-[30px] lg:rounded-bl-[50px] rounded-bl-[30px] overflow-hidden">
            <Count countNumber="844" title="Total Sponsers" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
