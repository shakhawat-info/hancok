import React from "react";
import delta from "../assets/images/teamdelta.png";
import streamOne from "../assets/images/streamOne.png";
import streamTwo from "../assets/images/streamTwo.png";
import streamThree from "../assets/images/streamThree.png";
import { GoPlay } from "react-icons/go";
import Slider from "react-slick";
const Stream = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="lg:py-[90px] py-7">
      <div className="container">
        <h2 className="head max-w-[446px] lg:after:w-[75px] after:w-0 after:bottom-[12%] after:left-[32%]">
          live stream video by hancok
        </h2>
        <div className="lg:mt-[78px] mt-4">
          <Slider {...settings}>
            <div className="relative mx-[12px]">
              <GoPlay className="absolute top-[43%] left-[45%] w-[50px] h-[50px] text-primary translate-2/4 z-[1]" />
              <img src={streamOne} alt="streamOne" className=" grayscale w-full" />
              <div className="absolute bottom-[23px] left-[25px] flex justify-between items-center w-full z-10 ">
                <h5 className=" font-Barlow text-primary text-[22px] font-semibold ">
                  HORIZON ZERO | DAWN <br />
                  <span className=" font-oswald text-base text-primary tracking-[0.96px] font-thin ">
                    Guerrilla Games
                  </span>
                </h5>
                <h6 className=" uppercase relative font-oswald text-base text-primary after:content-['] after:w-2 after:h-2 after:bg-brand after:rounded-full after:absolute after:bottom-[5px] after:left-[-14px] mr-[50px] ">
                  live
                </h6>
              </div>
            </div>
            <div className="relative mx-[12px]">
              <GoPlay className="absolute top-[43%] left-[45%] w-[50px] h-[50px] text-primary translate-2/4 z-[1]" />
              <img src={streamTwo} alt="streamTwo" className=" w-full" />
              <div className="absolute bottom-[23px] left-[25px] flex justify-between items-center w-[90%] ">
                <h5 className=" font-Barlow text-primary text-[22px] font-semibold ">
                  LEAGUE OF | LEGENDS <br />
                  <span className=" font-oswald text-base text-primary tracking-[0.96px] font-thin ">
                    Guerrilla Games
                  </span>
                </h5>
                <h6 className=" uppercase relative font-oswald text-base text-primary after:content-['] after:w-2 after:h-2 after:bg-brand after:rounded-full after:absolute after:bottom-[5px] after:left-[-14px] ">
                  live
                </h6>
              </div>
            </div>
            <div className="relative mx-[12px]">
              <GoPlay className="absolute top-[43%] left-[45%] w-[50px] h-[50px] text-primary translate-2/4 z-[1]" />
              <img src={streamThree} alt="streamThree" className=" grayscale w-full" />
              <div className="absolute bottom-[23px] left-[25px] flex justify-between items-center w-[90%] ">
                <h5 className=" font-Barlow text-primary text-[22px] font-semibold ">
                  POLANDINS <br />
                  <span className=" font-oswald text-base text-primary tracking-[0.96px] font-thin ">
                    Guerrilla Games
                  </span>
                </h5>
                <h6 className=" uppercase relative font-oswald text-base text-primary after:content-['] after:w-2 after:h-2 after:bg-brand after:rounded-full after:absolute after:bottom-[5px] after:left-[-14px] ">
                  live
                </h6>
              </div>
            </div>
          </Slider>
        </div>
        <div>
          <h3 className="text-primary font-Barlow font-medium text-[25px] tracking-[2.25px] uppercase text-center ">
            previous matches
          </h3>
          <div className="grid grid-cols-StreamGrid lg:gap-y-[60px] gap-y-5 lg:mt-[50px] mt-5">
            <div className=" bg-bgsecondery StreamShapOne flex justify-between items-center">
              <img src={delta} alt="delta" className="ml-[2px] py-[10px]" />
              <h4 className="font-Barlow text-[32px] hidden lg:block font-medium text-primary trackink-[0.96px] uppercase mr-[62px] ">
                team delta
              </h4>
            </div>
            <div className="flex items-center justify-center">
              <h4 className="font-oswald text-primary font-medium tracking-[6px] lg:text-[40px] text-[20px]  ">
                9:12
              </h4>
            </div>
            <div className="StreamShapTwo bg-bgsecondery flex justify-between items-center">
              <h4 className="font-Barlow text-[32px] hidden lg:block font-medium text-primary trackink-[0.96px] uppercase ml-[62px] ">
                team alpha
              </h4>
              <img src={delta} alt="delta" className="mr-[2px] ml-auto lg:ml-0 py-[10px]" />
            </div>
            <div className=" bg-bgsecondery StreamShapOne flex justify-between items-center">
              <img src={delta} alt="delta" className="ml-[2px] py-[10px]" />
              <h4 className="font-Barlow text-[32px] hidden lg:block font-medium text-primary trackink-[0.96px] uppercase mr-[62px] ">
                team devils
              </h4>
            </div>
            <div className="flex items-center justify-center">
              <h4 className="font-oswald text-primary font-medium tracking-[6px] lg:text-[40px] text-[20px]  ">
                17:8
              </h4>
            </div>
            <div className="StreamShapTwo bg-bgsecondery flex justify-between items-center">
              <h4 className="font-Barlow text-[32px] hidden lg:block font-medium text-primary trackink-[0.96px] uppercase ml-[62px] ">
                team ninja
              </h4>
              <img src={delta} alt="delta" className="mr-[2px] ml-auto lg:ml-0  py-[10px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stream;
