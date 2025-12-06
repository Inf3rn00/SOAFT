import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Ai_icon from "/Icons/Form icons/Ai - powered icon.svg";
import Built_in_plagiarism from "/Icons/Form icons/Built-In plagiarism icon.svg";
import Distraction_Free from "/Icons/Form icons/DistractionFree icon.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handlClick = () => {
    setShow(!show);
  };

  const handlClick1 = () => {
    setShow1(!show1);
  };

  const handlClick2 = () => {
    setShow2(!show2);
  }

  // Track the selected role (either "student" or "admin")
  const [role, setRole] = useState("student");

  // Track whether the user is signed in or creating an account
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div>
      {/* Top navigation bar */}
      <Navbar />

      {/* Wrapper: centers the login/create account panel */}
      <div className="flex justify-center items-center mt-15">
        <div
          className={`flex items-center w-[1000px] ${
            signedIn ? "h-[500px]" : "h-[750px]"
          }`}
        >
          {/* ========== Left Panel: Feature highlights ========== */}
          <div className="bg-[rgba(80,70,229,1)] opacity-95 rounded-l-xl p-7 text-[#ffffff] w-[50%] h-full flex justify-center items-center">
            <div className={`flex flex-col ${!signedIn ? "gap-y-31" : ""}`}>
              {/* Branding */}
              <div>
                <h1 className="font-bold text-3xl mb-2">SOAFT</h1>
                <p className="font-light text-m">
                  Secure Online Assessment Platform
                </p>
              </div>

              {/* Feature descriptions */}
              <div>
                <h2 className="font-medium text-2xl my-5">
                  Empower Your Educational Assessment
                </h2>
                <p className="text-sm font-sans my-5">
                  Create, deliver and grade test with minimal effort while
                  ensuring academic integrity through our comprehensive
                  anti-cheating measures.
                </p>

                {/* Feature list */}
                <ul className="my-8">
                  <li className="my-5 flex items-center gap-x-5">
                    <div className="bg-[#FEFCF6] rounded-full inline-flex justify-center items-center p-1.5">
                      <img src={Ai_icon} alt="" />
                    </div>
                    AI-Powered Grading & Instant Feedback
                  </li>
                  <li className="my-5 flex items-center gap-x-5">
                    <div className="bg-[#FEFCF6] rounded-full inline-flex justify-center items-center p-1.5">
                      <img src={Built_in_plagiarism} alt="" />
                    </div>
                    Built-In Plagiarism Detection
                  </li>
                  <li className="my-5 flex items-center gap-x-5">
                    <div className="bg-[#FEFCF6] rounded-full inline-flex justify-center items-center p-1.5">
                      <img src={Distraction_Free} alt="" />
                    </div>
                    Distraction-Free, Secure Test Environment
                  </li>
                </ul>
              </div>

              {/* Footer */}
              <p>&copy; 2025 SOAFT. All rights reserved.</p>
            </div>
          </div>

          {/* ========== Right Panel: Login / Create account form ========== */}
          <div className="bg-[#F0F1F2] p-5 h-full rounded-r-xl flex justify-center items-center">
            <div className="flex flex-col">
              {/* Form title */}
              <h1 className="text-center font-[650] text-3xl text-[#282373] mb-3">
                {signedIn ? "Login Account" : "Create Account"}
              </h1>
              <p className="text-center">
                Join SOAFT to start your secure assessment journey
              </p>

              {/* Role switcher: Student or Admin */}
              <p className="mt-5 mb-3 font-medium">I am a/an:</p>
              <div className="border border-[#5046e5] rounded-full h-8 flex">
                {/* Student tab */}
                <button
                  className={`text-[#5046E5] font-medium h-full rounded-full w-1/2 ${
                    role === "student"
                      ? "bg-[#5046e5] font-[500] text-[#ffffff]"
                      : ""
                  }`}
                  onClick={() => setRole("student")}
                >
                  Student
                </button>

                {/* Admin tab */}
                <button
                  className={`text-[#5046E5] font-medium h-full rounded-full w-1/2 ${
                    role === "admin"
                      ? "bg-[#5046e5] font-[500] text-[#ffffff]"
                      : ""
                  }`}
                  onClick={() => setRole("admin")}
                >
                  Administrator
                </button>
              </div>

              {/* Form Section */}
              {!signedIn ? (
                // ========== Create Account Form ==========
                <form action="" className="my-3">
                  {/* Name fields */}
                  <div className="flex gap-x-6 w-full">
                    <div className="w-full">
                      <label className="font-medium">First Name</label>
                      <input
                        type="text"
                        className="bg-[#E2E3E5] block h-8 w-full"
                      />
                    </div>
                    <div className="w-full">
                      <label className="font-medium">Last Name</label>
                      <input
                        type="text"
                        className="bg-[#E2E3E5] block h-8 w-full"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="my-2">
                    <label className="font-medium">Email Address</label>
                    <input
                      type="email"
                      className="block bg-[#E2E3E5] h-8 w-full"
                    />
                  </div>

                  {/* School field */}
                  <div className="my-2">
                    <label className="font-medium">School/Institute Name</label>
                    <input
                      type="email"
                      className="block bg-[#E2E3E5] h-8 w-full"
                    />
                    <p className="text-sm font-thin text-[#DC3545]">
                      Email must consist of your full name
                    </p>
                  </div>

                  {/* Password field */}
                  <div className="relative">
                    <label className="font-medium">Password</label>
                    <div>
                      <input
                      type={show ? "text" : "password"}
                      className="block bg-[#E2E3E5] h-8 w-full"
                    />
                    <small
                      className="hover: cursor-pointer"
                      onClick={handlClick}
                    >
                      {show ? (
                        <img
                          src="/images/hidePassword.svg"
                          className="w-6 h-6 absolute -translate-y-1 top-1/2  right-2"
                        />
                      ) : (
                        <img
                          src="/images/showPassword.svg"
                          className="w-6 h-6 absolute -translate-y-1 top-1/2 right-2"
                        />
                      )}
                    </small>
                    </div>
                    {/* Password strength bar */}
                    <div className="h-1.5 w-full bg-gray-200 rounded-full mt-2">
                      <div className="w-20 bg-amber-400 h-full rounded-full"></div>
                      <small className="text-[#343A40]">
                        Password Strength: Too Weak
                      </small>
                    </div>
                  </div>

                  {/* Confirm password */}
                  <div className="relative mt-10 mb-4">
                    <label className="font-medium">Confirm Password</label>
                    <div>
                      <input
                      type={show1 ? "text" : "password"}
                      className="block bg-[#E2E3E5] h-8 w-full"
                    />
                    <small
                      className="hover: cursor-pointer"
                      onClick={handlClick1}
                    >
                      {show1 ? (
                        <img
                          src="/images/hidePassword.svg"
                          className="w-6 h-6 absolute top-1/2  right-2"
                        />
                      ) : (
                        <img
                          src="/images/showPassword.svg"
                          className="w-6 h-6 absolute top-1/2 right-2"
                        />
                      )}
                    </small>
                    </div>
                    
                  </div>

                  {/* Terms agreement */}
                  <p className="my-3">
                    <input type="checkbox" id="myCheckbox" /> I agree to the{" "}
                    <a href="#" className="text-[#5046E5]">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#5046E5]">
                      Privacy Policy
                    </a>
                  </p>

                  {/* Submit button */}
                  <button className="w-full bg-[#5046e5] h-8 rounded text-[#ffffff] font-medium">
                    Create Account
                  </button>
                </form>
              ) : (
                // ========== Login Form ==========
                <form action="">
                  {/* Email field */}
                  <div className="my-3">
                    <label className="font-normal">Email Address</label>
                    <input
                      type="email"
                      className="block bg-[#E2E3E5] h-8 w-full"
                    />
                  </div>

                  {/* Password field with "Forget Password" */}
                  <div className="my-3">
                    <label className="flex justify-between">
                      <span>Password</span>
                      <span>Forget Password</span>
                    </label>
                    <div className="relative">
                      <input
                        type={show2 ? "text" : "password"}
                        className="block bg-[#E2E3E5] h-8 w-full"
                      />
                      <small
                        className="hover: cursor-pointer"
                        onClick={handlClick2}
                      >
                        {show2 ? (
                          <img
                            src="/images/hidePassword.svg"
                            className="w-6 h-6 absolute top-1/2 -translate-y-1/2 right-2"
                          />
                        ) : (
                          <img
                            src="/images/showPassword.svg"
                            className="w-6 h-6 absolute top-1/2 -translate-y-1/2 right-2"
                          />
                        )}
                      </small>
                    </div>

                    <p className="text-sm mt-2">
                      <input type="checkbox" /> Remember Password for 30 days
                    </p>
                  </div>

                  {/* Login button */}
                  <button className="w-full bg-[#5046e5] h-8 my-3 rounded text-[#ffffff] font-medium">
                    <Link to="/Admin/">Sign in</Link>
                  </button>
                </form>
              )}

              {/* Toggle between login and create account */}
              {signedIn ? (
                <p className="text-center font-medium">
                  Don't have an account?{" "}
                  <a
                    onClick={() => setSignedIn(false)}
                    className="text-[#5046e5] hover:cursor-pointer"
                  >
                    Create account
                  </a>
                </p>
              ) : (
                <p className="text-center font-medium">
                  Already have an account?{" "}
                  <a
                    onClick={() => setSignedIn(true)}
                    className="text-[#5046e5] hover:cursor-pointer"
                  >
                    Sign in
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
