import React from "react";
import spiderLogo from "../assets/spiderlogo.png";

const Navbar = () => {
  return (
    <div className=" my-4 z-500 fixed  justify-between top-0 w-full flex items-center px-10">
      <span className="text-[#EE3335] text-sm font-medium">ABOUT</span>
      <span className="text-[#EE3335] text-sm font-medium">CAST</span>
      <span className="h-20 ">
        <img className="h-full w-full" src={spiderLogo} alt="" />
      </span>
      <span className="text-[#EE3335] text-sm font-medium">PILLAR</span>
      <span className="text-[#EE3335] text-sm font-medium">BOOK</span>
    </div>
  );
};

export default Navbar;
