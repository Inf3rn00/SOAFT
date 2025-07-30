import { useEffect, useState } from "react";
import logo from "/Icons/landing page icons/LOGO.png";
import Login from "../pages/Login";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()
  const isBlue = location.pathname === "/login";

  return (
    <div>
      <div className="bg-background-white flex justify-between items-center p-4 mx-14">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="h-[60px]" />
          <Link to="/"><h1 className="text-4xl text-logo-blue font-Sonsie-One">SOAFT</h1></Link>
          
        </div>
        <nav className={`flex gap-8 text-md font-Monteserrat decoration-none text-background-blue ${isBlue ? "text-black": ""}`}>
            <Link to="/">Home</Link><a href="">How it works</a><a href="">Pricing</a><a href="">Contact Us</a>
        </nav>
        <Link to = "/login" >
        <button className="bg-background-blue text-white w-28 h-[48px] rounded-lg h  hover: cursor-pointer">
          Login
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
