import React from "react";
const Gamecart = (props) => {
  return (
    <div>
      <img src={props.image} alt="gameOne" className="w-full"/>
      <h4 className="gmtitle">{props.gmtitle}</h4>
      <h5 className="gmName">{props.gmName}</h5>
      <h6 className="mt-5 lg:text-left text-center ">
        <span className="dpersent">{props.dpersent}</span>
        <del className="delprice px-[10px]">{props.delprice}</del>
        <span className="delprice text-primary correntp">{props.correntp}</span>
      </h6>
    </div>
  );
};

export default Gamecart;
