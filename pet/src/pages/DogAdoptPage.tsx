import React from "react";
import { Bowlby_One } from "next/font/google";
import Image from "next/image";
import dog from "../../public/puppy.jpeg";

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
        <div className="h-[550px] rounded-md flex flex-col items-center mb-7 w-72 bg-yellow-300">
          <div className="h-[300px] rounded-md rounded-b-none w-full flex  justify-center overflow-hidden relative">
            <Image
              src={dog}
              layout="fill"
              objectFit="cover"
              alt="Cute puppy"
            />
          </div>
          <div>details</div>
          <div>contact</div>
        </div>
      </div>
    </div>
  );
};

export default DogAdoptPage;
