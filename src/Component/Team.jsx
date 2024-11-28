import React from "react";
import TeamCart from "./TeamCart";
import TeamOne from "../assets/images/teamone.png";
import TeamTwo from "../assets/images/teamtwo.png";
import TeamThree from "../assets/images/teamthree.png";
import TeamFour from "../assets/images/teamfour.png";
const Team = () => {
  return (
    <section className="lg:pt-[100px] pt-7 lg:pb-[74px] pb-6">
      <div className="container">
        <h2 className="head lg:after:w-[100px] after:w-0 after:h-[2px] after:bottom-[15px] after:right-[18%] lg:w-[40%] w-3/4 text-right ml-auto ">
          meet our professional elite team
        </h2>
        <div className="lg:grid flex flex-col grid-cols-teamGrid gap-5 mt-[50px]">
          <TeamCart
            image={TeamTwo}
            title="Paladins"
            extra="Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Ut elit tellus, luctus nec ullamcorper"
          />
          <TeamCart
            image={TeamOne}
            title="CS:GO"
            extra="Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Ut elit tellus, luctus nec ullamcorper"
          />
          <TeamCart
            image={TeamThree}
            title="DOTA 2"
            extra="Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Ut elit tellus, luctus nec ullamcorper"
          />
          <TeamCart
            image={TeamFour}
            title="VALORANT"
            extra="Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Ut elit tellus, luctus nec ullamcorper"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
