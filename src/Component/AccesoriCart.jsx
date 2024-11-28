import React from "react";

const AccesoriCart = (props) => {
  return (
    <div className="text-center py-[22px] px-9 bg-bgsecondery mx-[10px]">
      <h4 className="font-oswald font-medium text-primary text-[40px] tracking-[0.4px] ">{props.price}</h4>
      <img src={props.product} alt="product" className="w-[207px] mx-auto"/>
      <h3 className=" font-oswald font-semibold text-primary text-[20px] mt-[45px] ">{props.pdcName}</h3>
      <button type="button" className=" uppercase text-center font-oswald font-semibold text-base text-brand ">add to cart</button>
    </div>
  );
};

export default AccesoriCart;
