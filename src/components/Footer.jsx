import curvyEdge from "/Icons/landing page icons/wavesNegative.svg";
import telephone from "/Icons/landing page icons/Telephone.svg";
import mail from "/Icons/landing page icons/Mail.svg";
import logo from "/Icons/landing page icons/LOGO.png";
import location from "/Icons/landing page icons/Location.svg";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="h-[550px] bg-background-blue relative">
      <img src={curvyEdge} alt="" className="w-screen  absolute top-[-140px]" />
      <div className="flex flex-col gap-4 justify-center items-center h-full">
        <div className="flex justify-between items-center h-full px-10 text-white">
          <section className="w-1/2 mt-[-150px]">
            <p className="font-bold">
              AI Powered online assessment - smarter <br />
              and safer way to improve your performance
            </p>
          </section>
          <section className="w-1/2 flex justify-center items-center gap-30">
            <div className="flex flex-col gap-5">

              <h1 className="font-bold text-xl">Navigation</h1>
              <a href="#">Home</a>
              <p>How it works</p>
              <p>Pricing</p>
              <p>Contact Us</p>
            </div>

            <div className="flex flex-col gap-7 items-start">
              <h1 className="font-bold text-xl">Contact Us</h1>
              <p className="flex justify-center items-center gap-4">
                <img src={telephone} alt="" />
                +810-045-352
              </p>
              <p className="flex justify-center items-center gap-4">
                <img src={mail} alt="" />
                info@soaftgmail.com
              </p>
              <p className="flex justify-center items-center gap-4">
                <img src={location} alt="" />
                8th Floor, ChurchgateTowers Central business district
              </p>
            </div>
          </section>
        </div>
        <div className=" bg-background-offwhite w-[1000px] rounded-3xl my-10 p-6">
          <div className=" flex justify-between items-center p-4  w-full rounded-3xl">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-[40px]" />
              <h1 className="text-2xl text-black font-Sonsie-One">SOAFT</h1>
            </div>
            <nav className="flex gap-12 text-md font-Monteserrat decoration-none text-black">
              <a href="">Home</a>
              <a href="">How it works</a>
              <a href="">Pricing</a>
              <a href="">Contact Us</a>
            </nav>
          </div>

          <hr className=" border-1 border-solid border-gray-400" />
          <div className="flex justify-between items-center p-4 mt-5">
            <p>Copyright@2025 soaft.</p>
            <p>www. downloadsoaft.com</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
