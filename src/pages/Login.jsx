import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Ai_icon from "/Icons/Form icons/Ai - powered icon.svg";
import Built_in_plagiarism from "/Icons/Form icons/Built-In plagiarism icon.svg";
import Distraction_Free from "/Icons/Form icons/DistractionFree icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { signUpSchema } from "../schema/validation.jsx";

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
  };

  // Track the selected role (either "student" or "admin")
  const [role, setRole] = useState("student");

  // Track whether the user is signed in (true => show login form)
  const [signedIn, setSignedIn] = useState(true);

  // Controlled input state for signup and login
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [institute, setInstitute] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // UI state
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Simple password rules (same as validation file)
  const passwordRules = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  const resetMessages = () => {
    setErrors("");
    setSuccess("");
  };

  const getUsers = () => {
    try {
      return JSON.parse(localStorage.getItem("users") || "[]");
    } catch (e) {
      return [];
    }
  };

  const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    resetMessages();

    // Basic validation using signUpSchema for names and institute
    try {
      await signUpSchema.validate({
        firstName,
        lastName,
        schoolOrInstituteName: institute,
      });
    } catch (err) {
      setErrors(err.message);
      return;
    }

    if (!passwordRules.test(password)) {
      setErrors(
        "Password must be 8+ chars, contain 1 uppercase letter, 1 number and 1 special character"
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrors("Passwords do not match");
      return;
    }

    // Prevent duplicate emails for same role
    const users = getUsers();
    const exists = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.role === role
    );

    if (exists) {
      setErrors("An account with this email and role already exists");
      return;
    }

    const newUser = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      institute,
      password,
      role,
    };

    users.push(newUser);
    saveUsers(users);

    setSuccess("Account created successfully. Redirecting...");

    // Auto-login: save current user and navigate
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setTimeout(() => {
      if (role === "admin") navigate("/admin");
      else navigate("/student-view");
    }, 800);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    resetMessages();

    const users = getUsers();
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.role === role
    );

    if (!user) {
      setErrors("No account found for this email/role");
      return;
    }

    if (user.password !== password) {
      setErrors("Incorrect password");
      return;
    }

    // Successful login
    localStorage.setItem("currentUser", JSON.stringify(user));
    setSuccess("Signed in. Redirecting...");

    setTimeout(() => {
      if (role === "admin") navigate("/admin");
      else navigate("/student-view");
    }, 500);
  };

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
            <div className="flex flex-col w-[360px]">
              {/* Form title */}
              <h1 className="text-center font-[650] text-3xl text-[#282373] mb-3">
                {signedIn ? "Login Account" : "Create Account"}
              </h1>
              <p className="text-center mb-2">
                Join SOAFT to start your secure assessment journey
              </p>

              {/* Role switcher: Student or Admin */}
              <p className="mt-2 mb-3 font-medium">I am a/an:</p>
              <div className="border border-[#5046e5] rounded-full h-8 flex mb-3">
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

              {/* Feedback messages */}
              {errors && <div className="text-[#DC3545] mb-2">{errors}</div>}
              {success && <div className="text-[#198754] mb-2">{success}</div>}

              {/* Form Section */}
              {!signedIn ? (
                // ========== Create Account Form ==========
                <form onSubmit={handleSignUp} className="my-3">
                  {/* Name fields */}
                  <div className="flex gap-x-6 w-full">
                    <div className="w-full">
                      <label className="font-medium">First Name</label>
                      <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        className="bg-[#E2E3E5] block h-8 w-full"
                      />
                    </div>
                    <div className="w-full">
                      <label className="font-medium">Last Name</label>
                      <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        className="bg-[#E2E3E5] block h-8 w-full"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="my-2">
                    <label className="font-medium">Email Address</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="block bg-[#E2E3E5] h-8 w-full"
                      required
                    />
                  </div>

                  {/* School field */}
                  <div className="my-2">
                    <label className="font-medium">School/Institute Name</label>
                    <input
                      value={institute}
                      onChange={(e) => setInstitute(e.target.value)}
                      type="text"
                      className="block bg-[#E2E3E5] h-8 w-full"
                    />
                  </div>

                  {/* Password field */}
                  <div className="relative">
                    <label className="font-medium">Password</label>
                    <div>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={show ? "text" : "password"}
                        className="block bg-[#E2E3E5] h-8 w-full"
                        required
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
                  </div>

                  {/* Confirm password */}
                  <div className="relative mt-4 mb-4">
                    <label className="font-medium">Confirm Password</label>
                    <div>
                      <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type={show1 ? "text" : "password"}
                        className="block bg-[#E2E3E5] h-8 w-full"
                        required
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
                    <input type="checkbox" id="myCheckbox" required /> I agree to the{" "}
                    <a href="#" className="text-[#5046E5]">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#5046E5]">
                      Privacy Policy
                    </a>
                  </p>

                  {/* Submit button */}
                  <button type="submit" className="w-full bg-[#5046e5] h-8 rounded text-[#ffffff] font-medium">
                    Create Account
                  </button>
                </form>
              ) : (
                // ========== Login Form ==========
                <form onSubmit={handleLogin}>
                  {/* Email field */}
                  <div className="my-3">
                    <label className="font-normal">Email Address</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="block bg-[#E2E3E5] h-8 w-full"
                      required
                    />
                  </div>

                  {/* Password field with "Forget Password" */}
                  <div className="my-3">
                    <label className="flex justify-between">
                      <span>Password</span>
                      <span className="text-sm text-[#5046E5] hover:cursor-pointer">Forget Password</span>
                    </label>
                    <div className="relative">
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={show2 ? "text" : "password"}
                        className="block bg-[#E2E3E5] h-8 w-full"
                        required
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
                  <button type="submit" className="w-full bg-[#5046e5] h-8 my-3 rounded text-[#ffffff] font-medium">
                    Sign in
                  </button>
                </form>
              )}

              {/* Toggle between login and create account */}
              {signedIn ? (
                <p className="text-center font-medium">
                  Don't have an account?{" "}
                  <a
                    onClick={() => {
                      setSignedIn(false);
                      resetMessages();
                    }}
                    className="text-[#5046e5] hover:cursor-pointer"
                  >
                    Create account
                  </a>
                </p>
              ) : (
                <p className="text-center font-medium">
                  Already have an account?{" "}
                  <a
                    onClick={() => {
                      setSignedIn(true);
                      resetMessages();
                    }}
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
