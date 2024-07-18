import Image from "next/image";
import React from "react";
import dogImgAdopt from "../../public/dogAdopt.png";
import dogImgBuy from "../../public/dogbuy.png";
import { Kanit } from "next/font/google";
import styles from "./DogOptionScreen.module.css";
import Link from "next/link";

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const DogOptionScreen = () => {
  return (
    <main>
      <div className="flex flex-col gap-16 w-screen h-screen items-center pt-8">
        <Link href={"/adoptdog"} className="h-36 w-36  flex flex-col gap-3 items-center ">
          <div className={`${styles.head}`}>
            <Image src={dogImgAdopt} height={90} width={90} alt="dog" />
          </div>
          <h1
            className={`${kanit.className}  text-3xl text-nowrap text-center pl-2 text-gray-700`}
          >
            Adopt a Dog
          </h1>
        </Link>
        <Link href={"/"} className="h-36 w-36  flex flex-col gap-3 items-center ">
          <div className={`${styles.head}`}>
            <Image src={dogImgBuy} height={120} width={120} alt="dog" />
          </div>
          <h1
            className={`${kanit.className}  text-3xl text-nowrap text-center pl-2 text-gray-700`}
          >
            Buy a Dog
          </h1>
        </Link>
      </div>
    </main>
  );
};

export default DogOptionScreen;
