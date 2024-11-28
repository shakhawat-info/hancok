import React from "react";
import Slider from "react-slick";
import gameOne from "../assets/images/gameone.png";
import gameTwo from "../assets/images/gametwo.png";
import gameThree from "../assets/images/gamethree.png";
import gameFour from "../assets/images/gamefour.png";
import Gamecart from "./Gamecart";
import gmslideone from '../assets/images/gameslideone.png'
import gmslidetwo from '../assets/images/gameslidetwo.png'
import gmslidethree from '../assets/images/gameslidethree.png'
import gmslidefour from '../assets/images/gameslidefour.png'
import gmslidefive from '../assets/images/gameslidefive.png'
const Games = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
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
    <section className="lg:py-[90px] py-[30px]">
      <div className="container">
        <h2 className="head ml-auto lg:w-[40%] w-[90%] text-right lg:after:w-[110px] after:w-0 after:h-[2px] after:bottom-[15px] after:right-[18%] ">
          top games on black friday sale
        </h2>
        <div className="lg:grid flex flex-col grid-cols-gameGrid gap-[20px] mt-[47px]">
          <Gamecart
            image={gameOne}
            gmtitle="Horizon Zero Dawn™ Complet..."
            gmName="Guerrilla Games"
            dpersent="-40%"
            delprice="$19.99"
            correntp="$7.9"
          />
          <Gamecart
            image={gameTwo}
            gmtitle="Disciples: Liberation"
            gmName="Frima Studio"
            dpersent="-40%"
            delprice="$19.99"
            correntp="$7.9"
          />
          <Gamecart
            image={gameThree}
            gmtitle="Horizon Zero Dawn™ Complet..."
            gmName="Guerrilla Games"
            dpersent="-40%"
            delprice="$19.99"
            correntp="$7.9"
          />
          <Gamecart
            image={gameFour}
            gmtitle="Industries of Titan"
            gmName="Brace Yourself Games"
            dpersent="-40%"
            delprice="$19.99"
            correntp="$7.9"
          />
        </div>
        <h5 className=" font-Barlow text-[20px] text-primary font-medium mt-[60px] lg:text-left text-center ">
          Hancok Games Catalog
        </h5>
        <div className="mt-[30px] p-7 bg-bgsecondery lg:flex items-center">
          <div className="lg:w-1/2 w-full">
            <p className="font-oswald font-medium text-base text-brand tracking-[1.6px] ">
              Choose Your Favourite Game
            </p>
            <h2 className="head lg:text-[35px] text-[20px] mt-[15px]">
              Explore hancok catalog for your next favorite game!
            </h2>
            <p className=" font-oswald text-[#666] font-semibold mt-4 w-[98%] ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              culpa ratione enim maiores nisi cupiditate non nesciunt officia
              labore aut? Et, vero!
            </p>
            <button
              type="button"
              className=" py-[13px] px-[31px] font-oswald font-medium text-base text-primary bg-bdybg mt-6 "
            >
              Browse All
            </button>
          </div>
          <div className="lg:w-1/2 w-full lg:px-[100px] px-0 lg:mt-0 mt-5">
            <Slider  {...settings}>
                <img src={gmslideone} alt="gmslideone" className="w-full h-[330px] " />
                <img src={gmslidetwo} alt="gmslidetwo" className="w-full h-[330px] " />
                <img src={gmslidethree} alt="gmslidethree" className="w-full h-[330px] " />
                <img src={gmslidefour} alt="gmslidefour" className="w-full h-[330px] " />
                <img src={gmslidefive} alt="gmslidefive" className="w-full h-[330px] " />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
