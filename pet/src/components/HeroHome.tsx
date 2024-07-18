import Image from "next/image";
import dogImg from "../../public/dogimg.png";
import catImg from "../../public/catimg.png";
import { GrNext } from "react-icons/gr";

import styles from "./HeroHome.module.css";
import Link from "next/link";
const HeroHome = () => {
  return (
    <main>
      <div className="containerMain flex flex-col items-center">
        <div
          className={`DogContainer relative flex justify-center items-center h-[45vh] w-[90vw]`}
        >
          <div
            className={`backgroundOfDog bg-gray-200 h-48 w-48 rounded-[50%]`}
          ></div>
          <h1 className="absolute left-5 top-14 font-bold text-4xl text-[#303135]">
            Dog
          </h1>
          <div className="img absolute left-[25%] drop-shadow-xl">
            <Image src={dogImg} height={170} width={170} alt="logo" />
          </div>
          <Link href={"/dogoptions"}
            className={`${styles.button} absolute bottom-10 flex justify-center items-center text-2xl right-4 h-12 w-12 rounded-[50%]  text-white`}
          >
            <GrNext />
          </Link>
        </div>
        <div
          className={`CatContainer relative flex justify-center items-center h-[45vh] w-[90vw]`}
        >
          <div
            className={`backgroundOfDog bg-gray-200 h-48 w-48 rounded-[50%]`}
          ></div>
          <h1 className="absolute left-5 top-14 font-bold text-4xl text-[#303135]">
            Cat
          </h1>
          <div className="img absolute left-[25%] drop-shadow-xl">
            <Image src={catImg} height={170} width={170} alt="logo" />
          </div>
          <button
            className={`${styles.button} absolute bottom-10 flex justify-center items-center text-2xl right-4 h-12 w-12 rounded-[50%]  text-white`}
          >
            <GrNext />
          </button>
        </div>
      </div>
    </main>
  );
};

export default HeroHome;
