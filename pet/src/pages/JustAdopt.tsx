import { Bowlby_One } from "next/font/google";
import Link from "next/link";
const bowlby = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const JustAdopt = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-screen h-[90vh]">
      <h1 className={`${bowlby.className} text-2xl text-red-700`}>Warning!</h1>
      <h1>Just Adopt a Dog not Buy them please.</h1>
      <div className="flex gap-1">
        <Link href={"/adoptdog"} className="text-blue-600 font-bold">click here</Link>
        <span>to Adopt a Dog.</span>
      </div>
    </div>
  );
};

export default JustAdopt;
