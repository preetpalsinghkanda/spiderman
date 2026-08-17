import React from "react";
import spiderLogo from "../assets/spiderlogo.png";

const Navbar = () => {
  return (
    <div className=" my-4 z-500 fixed  justify-between -top-4 w-full flex items-center px-10">
      <span className="text-[#EE3335] text-sm font-medium cursor-pointer">ABOUT</span>
      <span className="text-[#EE3335] text-sm font-medium cursor-pointer">CAST</span>
      <span className="h-20 ">
        <img className="h-full w-full" src={spiderLogo} alt="" />
      </span>
      <span className="text-[#EE3335] text-sm font-medium cursor-pointer">PILLAR</span>
      <span className="text-[#EE3335] text-sm font-medium cursor-pointer">BOOK</span>
    </div>
  );
};

export default Navbar;
