import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Login = () => {
  // The logic reference
    const [role, setRole] = useState("student");
    const [signedIn, setSignedIn] = useState(false);

    return (
        <div className="flex justify-center items-center">
        <div className="flex items-center">
            {/* The left panel */}
            <div
            className="bg-[rgba(80,70,229,1)] w-[305px] h-[686px] opacity-79 rounded-l-xl
                    p-5 text-[#ffffff]"
            >
            <div>
                <h1 className="font-bold text-3xl">SOAFT</h1>
                <p>Secure Online Assessment Platform</p>
                <h2>Empower Your Educational Assessment</h2>
                <p>
                Create, deliver and grade test with minimal effort while ensuring
                academic integrity through our comprehensive anti-cheating
                measures.
                </p>

                <ul>
                <li>🤖 AI-Powered Grading & Instant Feedback</li>
                <li>🍱 Built-In Plagiarism Dectection</li>
                <li>💻 Distraction-Free, Secure Test Enviroment</li>
                </ul>

                <p>&copy; 2025 SOAFT. All right reserved.</p>
            </div>
            </div>
            {/* Right panel */}
            <div className="bg-[#F0F1F2] w-[310px] h-[686px] p-5">
            <div>
                <h1>{signedIn ?'Login Account' : 'Create Account'}</h1>
                <p>Join SOAFT to start your secure assessment journey</p>
                <p>i am a:</p>
                {/* toggle between student and admin login page */}
                <div className="border border-[#5046e5] rounded-full">
                    {/* Student tab */}
                <button
                    className={`rounded-full w-1/2 ${
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
                    className={`rounded-full w-1/2 ${
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
                    <form action="">
                        {/* Name filed */}
                        <div>
                            {/* First name */}
                            <div>
                                <label>First Name</label>
                                <input type="text" />
                            </div>
                            {/* last name */}
                            <div>
                                <label>Last Name</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input type="email"/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" />
                            <div className="h-1.5 w-full bg-gray-200 rounded-full">
                                <div className="w-20 bg-amber-400 h-full rounded-full"></div>
                                Password Strength: Too Weak
                            </div>
                        </div>
                        <label>Confirm Password</label>
                        <input type="password"/>

                        <p><input type="checkbox" id="myCheckbox"/> I agree to the <a href="#">Terms of Service</a> and <a href="#"> Privacy Policy</a></p>

                        <button>Create Account</button>
                    </form>: 
                    <form action="">
                        <label>Email Address</label>
                        <input type="email" />
                        <label><span>Password</span><span>Forget Password</span></label>
                        <input type="text" />
                        <p><input type="checkbox" /> Remember Password for 30 days</p>
                        <button>Sign in</button>
                    </form>
                }
                {signedIn ? <p>Don't have an account ? <button onClick={() => setSignedIn(false)}>Create account</button></p>: <p>Already have an account ? <button onClick={() => setSignedIn(true)}>sign in</button></p>}
            </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
