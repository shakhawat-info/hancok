import React from "react";
import AccesoriCart from "./AccesoriCart";
import Controllar from "../assets/images/controllar.png";
import Keybord from "../assets/images/keyboard.png";
import Pc from "../assets/images/pc.png";
import Slider from "react-slick";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Accesori = () => {
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
          background: "#ff0000",
          position: "absolute",
          zIndex: "1",
          top: "40%",
          right: "-10px"
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
          background: "#ff0000",
          position: "absolute",
          zIndex: "1",
          top: "40%",
          left: "-10px"
        }}
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowLeft />
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <section className="lg:py-[90px] py-[30px] bg-[#0c0c0e]">
      <div className="container">
        <h2 className="head lg:w-[30%] w-full lg:after:w-[105px] after:w-0 after:bottom-[15px] after:left-[49%] ">
          we provide all gaming accesories
        </h2>
        <Slider {...settings} className="lg:mt-[102px] mt-5">
          <AccesoriCart
            price="$95"
            product={Controllar}
            pdcName="Gaming Controller"
          />
          <AccesoriCart
            price="$95"
            product={Keybord}
            pdcName="Gaming Keybord"
          />
          <AccesoriCart price="$95" product={Pc} pdcName="Gaming Monitor" />
        </Slider>
      </div>
    </section>
  );
};

export default Accesori;
