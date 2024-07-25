import React from "react";
import { Bowlby_One } from "next/font/google";
import Image from "next/image";
import dog from "../../public/puppy.jpeg";
import Link from "next/link";
import { LuDog } from "react-icons/lu";
import { PiGenderIntersexDuotone } from "react-icons/pi";
import { VscLocation } from "react-icons/vsc";
const bowlby = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const DogAdoptPage = () => {
  return (
    <div>
      <div className="px-3 py-6">
        <h1 className={`${bowlby.className} text-center`}>
          Find Your Forever Friend Today!
        </h1>
      </div>

      <div className="ProductContainer flex flex-col items-center">
        <div className="h-full shadow-xl rounded-md flex flex-col items-center mb-7 w-72 bg-yellow-300">
          <div className="h-[300px] rounded-md rounded-b-none w-full flex  justify-center overflow-hidden relative">
            <Image src={dog} priority  layout="fill" objectFit="cover" alt="Cute puppy" />
          </div>
          <div className="detailContainer h-[150px] flex-col gap-2 flex bg-white w-full px-3 py-5 ">
            <div className="flex items-center gap-1 text-2xl ">
              <div className="pt-[2px]">
                <LuDog />
              </div>
              <h1 className="font-bold text-2xl ">Jerry</h1>
            </div>
            <div className="flex items-center gap-2 ">
              <div className="pt-[2px]">
                <PiGenderIntersexDuotone />
              </div>
              <p>Male, Puppy</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="pt-[2px]">
                <VscLocation />
              </div>
              <p>New Delhi, India</p>
            </div>
          </div>
          <div className="w-full h-12 text-white text-[13px]">
            <button className="w-1/2 h-full bg-blue-600">Contact</button>
            <button className="text-white bg-orange-500 h-12 w-1/2">
             <Link href={"/adoptdog/1"}>See More Details...</Link> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogAdoptPage;
