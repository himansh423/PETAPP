import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="h-[270px] gap-4 pt-[30px] w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-[15px] gap-2 text-gray-500 ">
          <h1>Terms of Use</h1>
          <h1>Privacy Policy</h1>
          <h1>Contact</h1>
          <h1>About</h1>
        </div>
        <div className="flex gap-5 mt-4 text-3xl">
          <div><FaInstagram/></div>
          <div><FaFacebookF/></div>
        </div>

        <h1 className="mt-4 text-gray-500">Adopets 2024-25. All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
