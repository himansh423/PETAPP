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
        <div
          className={`${bowlby.className} mb-10 flex flex-col items-center gap-5`}
        >
          <h1 className="text-[20px]">Choose Location</h1>
          <div>
            <select
              className="max-w-[280px] border border-black h-12 pl-5 rounded-md pt-1"
              name=""
              id=""
            >
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadra and Nagar Haveli">
                Dadra and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Pondicherry">Pondicherry</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
            </select>
          </div>
        </div>
        <h1 className={`${bowlby.className} text-center`}>
          Find Your Forever Friend Today!
        </h1>
      </div>

      <div className="ProductContainer flex flex-col items-center">
        <div className="h-full shadow-xl rounded-md flex flex-col items-center mb-7 w-72 bg-yellow-300">
          <div className="h-[300px] rounded-md rounded-b-none w-full flex  justify-center overflow-hidden relative">
            <Image
              src={dog}
              priority
              layout="fill"
              objectFit="cover"
              alt="Cute puppy"
            />
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
