import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Login = () => {
  // The logic reference
    const [role, setRole] = useState("student");
    const [signedIn, setSignedIn] = useState(false);

    return (
        <div className="flex justify-center items-center">
            <div className="flex items-center h-[686px] w-[1000px]">
                {/* The left panel */}
                <div
                className="bg-[rgba(80,70,229,1)]  opacity-95 rounded-l-xl
                        p-7 text-[#ffffff] w-[60%]"
                >
                <div>
                    <h1 className="font-bold text-3xl mb-2">SOAFT</h1>
                    <p className="font-light text-m">Secure Online Assessment Platform</p>
                    <h2 className="font-medium text-2xl my-5">Empower Your Educational Assessment</h2>
                    <p className="text-sm font-sans my-5">
                    Create, deliver and grade test with minimal effort while ensuring
                    academic integrity through our comprehensive anti-cheating
                    measures.
                    </p>

                    <ul className="my-8">
                    <li className="my-5">🤖 AI-Powered Grading & Instant Feedback</li>
                    <li className="my-5">🍱 Built-In Plagiarism Dectection</li>
                    <li className="my-5">💻 Distraction-Free, Secure Test Enviroment</li>
                    </ul>

                    <p>&copy; 2025 SOAFT. All right reserved.</p>
                </div>
                </div>

                {/* Right panel */}
                <div className="bg-[#F0F1F2] w-[610px] p-5">
                    <div>
                        <h1 className="text-center font-[650] text-3xl text-[#282373] mb-3">{signedIn ?'Login Account' : 'Create Account'}</h1>
                        <p className="text-center ">Join SOAFT to start your secure assessment journey</p>
                        <p className="mt-5 mb-3 font-medium">I am a:</p>
                        {/* toggle between student and admin login page */}
                        <div className="border border-[#5046e5] rounded-full h-8">
                            {/* Student tab */}
                        <button
                            className={`text-[#5046E5] font-medium h-full rounded-full w-1/2 ${
                            role === "student"
                                ? "bg-[#5046e5] font-[500] text-[#ffffff]"
                                : " "
                            }`}
                            onClick={() => setRole("student")}
                        >
                            Student
                        </button>
                        {/* Admin tab */}
                        <button
                            className={`text-[#5046E5] font-medium  h-full rounded-full w-1/2 ${
                            role === "admin"
                                ? "bg-[#5046e5] font-[500] text-[#ffffff]"
                                : " "
                            }`}
                            onClick={() => setRole("admin")}
                        >
                            Administrator
                        </button>
                        </div>
                        {/* form field */}
                        {!signedIn ? 
                            <form action="" className="my-3">
                                {/* Name filed */}
                                <div className="flex gap-x-6 w-full">
                                    {/* First name */}
                                    <div className="w-full">
                                        <label className="font-medium">First Name</label>
                                        <input type="text" className="bg-[#E2E3E5] block h-8 w-full"/>
                                    </div>
                                    {/* last name */}
                                    <div className="w-full">
                                        <label className="font-medium">Last Name</label>
                                        <input type="text" className="bg-[#E2E3E5] block h-8 w-full"/>
                                    </div>
                                </div>
                                <div className="my-2">
                                    <label className="font-medium">Email Address</label>
                                    <input type="email" className="block bg-[#E2E3E5] h-8 w-full"/>
                                </div>
                                <div>
                                    <label className="font-medium">Password</label>
                                    <input type="password" className="block bg-[#E2E3E5] h-8 w-full"/>
                                    <div className="h-1.5 w-full bg-gray-200 rounded-full">
                                        <div className="w-20 bg-amber-400 h-full rounded-full mt-2"></div>
                                        <small className="text-[#343A40]">Password Strength: Too Weak</small>
                                    </div>
                                </div>
                                <div className="mt-10 mb-4">
                                    <label className="font-medium">Confirm Password</label>
                                    <input type="password" className="block bg-[#E2E3E5] h-8 w-full"/>
                                </div>
                                

                                <p className="my-3"><input type="checkbox" id="myCheckbox"/> I agree to the <a href="#" className="text-[#5046E5]">Terms of Service</a> and <a href="#" className="text-[#5046E5]"> Privacy Policy</a></p>

                                <button className="w-full bg-[#5046e5] h-8 rounded text-[#ffffff] font-medium">Create Account</button>
                            </form>: 
                            <form action="">
                                <div className="my-3">
                                    <label className="font-normal">Email Address</label>
                                    <input type="email" className="block bg-[#E2E3E5] h-8 w-full"/>
                                </div>
                                <div className="my-3">
                                    <label className="flex justify-between"><span>Password</span><span>Forget Password</span></label>
                                    <input type="text" className="block bg-[#E2E3E5] h-8 w-full"/>
                                    <p className="text-sm mt-2"><input type="checkbox" /> Remember Password for 30 days</p>
                                </div>

                                <button type="submit" className="w-full bg-[#5046e5] h-8 my-3 rounded text-[#ffffff] font-medium">Sign in</button>
                            </form>
                        }
                        {signedIn ? <p className="text-center font-medium">Don't have an account ? <a onClick={() => setSignedIn(false)} className="text-[#5046e5] hover:cursor-pointer">Create account</a></p>: <p className="text-center font-medium">Already have an account ? <a onClick={() => setSignedIn(true)} className="text-[#5046e5] hover:cursor-pointer">sign in</a></p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
