import Image from "next/image";
import React from "react";
import imglogo from "../../public/logodog.svg";
import { CiUser } from "react-icons/ci";
const Header = () => {
  return (
    <div>
      <div className="h-20  flex items-center justify-between px-4 ">
        <div>
          <Image src={imglogo} height={50} width={50} alt="logo" />
        </div>
        <div className="flex items-center gap-3">
          <div className="text-gray-400 font-bold text-[22px]">
            <CiUser />
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-5 h-[2px] bg-gray-400 "></div>
            <div className="w-5 h-[2px] bg-gray-400 "></div>
            <div className="w-5 h-[2px] bg-gray-400 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
