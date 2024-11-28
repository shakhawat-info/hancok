import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import PopuOne from "../assets/images/popularone.png";
import PopuTwo from "../assets/images/populartwo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Popular = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          color: "#fff",
          border: "1px solid #fff",
          display: "grid",
          placeItems: "center",
          position: "absolute",
          bottom: "20px",
          right: "0px",
          zIndex: "2",
        }}
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          color: "#fff",
          border: "1px solid #fff",
          display: "grid",
          placeItems: "center",
          position: "absolute",
          bottom: "80px",
          right: "0px",
          zIndex: "2",
        }}
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowLeft />
      </div>
    );
  }

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="lg:pt-[115px] pt-[50px] pb-[80px] bg-bgsecondery">
      <div className="container">
        <h2 className="head text-right ml-auto  max-w-[460px] lg:after:right-[125px] after:right-[75px] after:w-[100px] lg:after:bottom-[15px] after:bottom-[10px] ">
          popular games around the world
        </h2>
        <div className="lg:mt-[-120px] mt-[-450px]">
          <Slider {...settings}>
            <div>
              <div className="flex relative h-[600px]">
                <img
                  src={PopuOne}
                  alt="PopuOne"
                  className="w-1/2 absolute bottom-0 left-0 "
                />
                <img
                  src={PopuTwo}
                  alt="PopuTwo"
                  className="w-1/2 absolute bottom-0 right-0"
                />
              </div>
            </div>
            <div>
              <div className="flex relative h-[600px]">
                <img
                  src={PopuOne}
                  alt="PopuOne"
                  className="w-1/2 absolute bottom-0 left-0 "
                />
                <img
                  src={PopuTwo}
                  alt="PopuTwo"
                  className="w-1/2 absolute bottom-0 right-0"
                />
              </div>
            </div>
            <div>
              <div className="flex relative h-[600px]">
                <img
                  src={PopuOne}
                  alt="PopuOne"
                  className="w-1/2 absolute bottom-0 left-0 "
                />
                <img
                  src={PopuTwo}
                  alt="PopuTwo"
                  className="w-1/2 absolute bottom-0 right-0"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Popular;
