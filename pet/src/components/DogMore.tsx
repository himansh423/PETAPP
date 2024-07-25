import Carousel from "./Carousel";
import { Bowlby_One } from "next/font/google";
import  styles from "./DogMore.module.css";
import { LuDog } from "react-icons/lu";
const bowlby = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const DogMore = () => {
  return (
    <main className={`${styles.background}`}>
      <div className="flex flex-col items-center">
        <div className="flex pt-4 flex-col gap-5 items-center mb-3">
          <h1 className={`${bowlby.className} text-2xl`}>Adopt Jerry</h1>
          <h1 className="font-light">Posted On 01/01/25</h1>
        </div>
        <div>
          <Carousel />
        </div>

        <div className="AboutContainer w-full max-w-[800px] flex flex-col items-center px-6 gap-2 mb-6 mt-3">
          <h1 className={`${bowlby.className} flex justify-center items-center gap-2 text-center w-full text-[25px]`}>
          <LuDog/>About Me!
          </h1>
          <div className=" w-full flex justify-between px-5 text-[20px]">
            <h1 className="font-bold">Breed:</h1>
            <p>Labra</p>
          </div>
          <div className=" w-full flex justify-between px-5 text-[20px]">
            <h1 className="font-bold">Vaccinated:</h1>
            <p>Yes</p>
          </div>
          <div className=" w-full flex justify-between px-5 text-[20px]">
            <h1 className="font-bold">Age:</h1>
            <p>12 months</p>
          </div>
          <div className=" w-full flex justify-between px-5 text-[20px]">
            <h1 className="font-bold">Gender</h1>
            <p>Male</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full max-w-[800px] mt-4 mb-7 px-5">
          <h1 className={`${bowlby.className} text-[20px]`}>
            More Facts About me
          </h1>
          <p className="text-center mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est alias
            dignissimos temporibus tenetur ipsum commodi illum inventore, porro
            necessitatibus, molestias odio sed, ullam at repellendus neque
            ducimus quo repudiandae veritatis?
          </p>
        </div>
        <div className="contactContainer w-full max-w-[800px] flex flex-col items-center px-1 gap-2 mb-6 mt-3">
          <h1 className={`${bowlby.className} text-[22px]`}>Contact Info</h1>
          <div className=" w-full flex justify-between px-5 text-[15px]">
            <h1 className="font-bold">Name:</h1>
            <p>Himanshu Chauhan</p>
          </div>
          <div className=" w-full flex justify-between px-5 text-[15px]">
            <h1 className="font-bold">Phone:</h1>
            <p>+91-8123456789</p>
          </div>
          <div className=" w-full flex justify-between px-5 text-[15px]">
            <h1 className="font-bold">Email:</h1>
            <p>himanshtest@gmail.com</p>
          </div>
        </div>


        <div className="locationContainer gap-4 mt-6 mb-7 flex flex-col items-center px-5">
          <h1 className={`${bowlby.className} text-[22px] `}>Location</h1>
         <p className="text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores maiores accusantium illo laudantium, nihil sapiente dignissimos id ullam vel hic enim, natus incidunt minus quos culpa. Nobis, provident nulla.</p>
        </div>
      </div>
    </main>
  );
};

export default DogMore;
