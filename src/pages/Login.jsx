import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Navbar from "../components/Navbar";
import Ai_icon from "/Icons/Form icons/Ai - powered icon.svg";
import Built_in_plagiarism from "/Icons/Form icons/Built-In plagiarism icon.svg";
import Distraction_Free from "/Icons/Form icons/DistractionFree icon.svg";
import { Link } from "react-router-dom";

// Define Zod schemas for validation
const createAccountSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name cannot exceed 50 characters")
      .regex(/^[A-Za-z\s]+$/, "First name can only contain letters and spaces"),

    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name cannot exceed 50 characters")
      .regex(/^[A-Za-z\s]+$/, "Last name can only contain letters and spaces"),

    email: z
      .string()
      .email("Invalid email address")
      .refine((email) => {
        if (email.includes("@")) {
          const [localPart] = email.split("@");
          return localPart.length >= 3;
        }
        return false;
      }, "Email must be valid and contain your name"),

    schoolName: z
      .string()
      .min(3, "School name must be at least 3 characters")
      .max(100, "School name cannot exceed 100 characters"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),

    confirmPassword: z.string(),

    agreeToTerms: z
      .boolean()
      .refine(
        (val) => val === true,
        "You must agree to the terms and conditions"
      ),

    role: z.enum(["student", "admin"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),

  password: z.string().min(1, "Password is required"),

  rememberMe: z.boolean().optional(),

  role: z.enum(["student", "admin"]),
});

// Calculate password strength
const calculatePasswordStrength = (password) => {
  if (!password) return { score: 0, label: "None" };

  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const strengthLabels = ["None", "Too Weak", "Weak", "Fair", "Good", "Strong"];
  const colors = [
    "bg-gray-300",
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-green-500",
  ];

  return {
    score,
    label: strengthLabels[score],
    color: colors[score],
    width: `${(score / 5) * 100}%`,
  };
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [role, setRole] = useState("admin");
  const [signedIn, setSignedIn] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: "None",
    color: "bg-gray-300",
    width: "0%",
  });

  // Initial values for forms
  const createAccountInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    schoolName: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    role: "student",
  };

  const loginInitialValues = {
    email: "",
    password: "",
    rememberMe: false,
    role: "student",
  };

  const handleCreateAccountSubmit = (values, { setSubmitting }) => {
    console.log("Create Account Values:", values);
    // Here you would typically make an API call
    setTimeout(() => {
      setSubmitting(false);
      alert("Account created successfully!");
    }, 1000);
  };

  const handleLoginSubmit = (values, { setSubmitting }) => {
    console.log("Login Values:", values);
    // Here you would typically make an API call
    setTimeout(() => {
      setSubmitting(false);
      alert("Login successful!");
    }, 1000);
  };

  const handlePasswordChange = (e, setFieldValue) => {
    const password = e.target.value;
    setFieldValue("password", password);
    setPasswordStrength(calculatePasswordStrength(password));
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex justify-center items-start py-8">
        {/* Main container - removed fixed height */}
        <div className="flex items-stretch w-[1000px] min-h-[500px]">
          {/* ========== Left Panel ========== */}
          <div className="bg-[rgba(80,70,229,1)] opacity-95 rounded-l-xl p-7 text-[#ffffff] w-[50%] flex items-center">
            <div className="w-full">
              <div>
                <h1 className="font-bold text-3xl mb-2">SOAFT</h1>
                <p className="font-light text-m">
                  Secure Online Assessment Platform
                </p>
              </div>

              <div>
                <h2 className="font-medium text-2xl my-5">
                  Empower Your Educational Assessment
                </h2>
                <p className="text-sm font-sans my-5">
                  Create, deliver and grade test with minimal effort while
                  ensuring academic integrity through our comprehensive
                  anti-cheating measures.
                </p>

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

              <p>&copy; 2025 SOAFT. All rights reserved.</p>
            </div>
          </div>

          {/* ========== Right Panel ========== */}
          <div className="bg-[#F0F1F2] rounded-r-xl flex items-stretch min-h-full">
            <div className="p-5 flex flex-col justify-center w-full">
              <h1 className="text-center font-[650] text-3xl text-[#282373] mb-3">
                {signedIn ? "Login Account" : "Create Account"}
              </h1>
              <p className="text-center mb-6">
                Join SOAFT to start your secure assessment journey
              </p>

              <p className="mb-3 font-medium">I am a/an:</p>
              <div className="border border-[#5046e5] rounded-full h-8 flex mb-6">
                <button
                  type="button"
                  className={`text-[#5046E5] font-medium h-full rounded-full w-1/2 ${
                    role === "student"
                      ? "bg-[#5046e5] font-[500] text-[#ffffff]"
                      : ""
                  }`}
                  onClick={() => setRole("student")}
                >
                  Student
                </button>
                <button
                  type="button"
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

              {!signedIn ? (
                /* Create Account Form */
                <Formik
                  initialValues={createAccountInitialValues}
                  validationSchema={toFormikValidationSchema(
                    createAccountSchema
                  )}
                  onSubmit={handleCreateAccountSubmit}
                >
                  {({ errors, touched, isSubmitting, setFieldValue }) => (
                    <Form className="space-y-3">
                      {/* Name fields */}
                      <div className="flex gap-x-6 w-full">
                        <div className="w-full">
                          <label className="font-medium block mb-1">
                            First Name
                          </label>
                          <Field
                            type="text"
                            name="firstName"
                            className={`bg-[#E2E3E5] block h-10 w-full px-3 rounded ${
                              touched.firstName && errors.firstName
                                ? "border border-red-500"
                                : ""
                            }`}
                          />
                          <ErrorMessage name="firstName">
                            {(msg) => (
                              <small className="text-red-500 text-sm block mt-1">
                                {msg}
                              </small>
                            )}
                          </ErrorMessage>
                        </div>
                        <div className="w-full">
                          <label className="font-medium block mb-1">
                            Last Name
                          </label>
                          <Field
                            type="text"
                            name="lastName"
                            className={`bg-[#E2E3E5] block h-10 w-full px-3 rounded ${
                              touched.lastName && errors.lastName
                                ? "border border-red-500"
                                : ""
                            }`}
                          />
                          <ErrorMessage name="lastName">
                            {(msg) => (
                              <small className="text-red-500 text-sm block mt-1">
                                {msg}
                              </small>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>

                      {/* Email field */}
                      <div>
                        <label className="font-medium block mb-1">
                          Email Address
                        </label>
                        <Field
                          type="email"
                          name="email"
                          className={`bg-[#E2E3E5] block h-10 w-full px-3 rounded ${
                            touched.email && errors.email
                              ? "border border-red-500"
                              : ""
                          }`}
                        />
                        <ErrorMessage name="email">
                          {(msg) => (
                            <small className="text-red-500 text-sm block mt-1">
                              {msg}
                            </small>
                          )}
                        </ErrorMessage>
                      </div>

                      {/* School field */}
                      <div>
                        <label className="font-medium block mb-1">
                          School/Institute Name
                        </label>
                        <Field
                          type="text"
                          name="schoolName"
                          className={`bg-[#E2E3E5] block h-10 w-full px-3 rounded ${
                            touched.schoolName && errors.schoolName
                              ? "border border-red-500"
                              : ""
                          }`}
                        />
                        <ErrorMessage name="schoolName">
                          {(msg) => (
                            <small className="text-red-500 text-sm block mt-1">
                              {msg}
                            </small>
                          )}
                        </ErrorMessage>
                        <p className="text-sm font-thin text-[#DC3545] mt-1">
                          Email must consist of your full name
                        </p>
                      </div>

                      {/* Password field */}
                      <div>
                        <label className="font-medium block mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <Field
                            type={showPassword ? "text" : "password"}
                            name="password"
                            onChange={(e) =>
                              handlePasswordChange(e, setFieldValue)
                            }
                            className={`bg-[#E2E3E5] block h-10 w-full px-3 rounded pr-10 ${
                              touched.password && errors.password
                                ? "border border-red-500"
                                : ""
                            }`}
                          />
                          <button
                            type="button"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <img
                              src={
                                showPassword
                                  ? "/images/hidePassword.svg"
                                  : "/images/showPassword.svg"
                              }
                              className="w-6 h-6"
                              alt={
                                showPassword ? "Hide password" : "Show password"
                              }
                            />
                          </button>
                        </div>
                        <ErrorMessage name="password">
                          {(msg) => (
                            <small className="text-red-500 text-sm block mt-1">
                              {msg}
                            </small>
                          )}
                        </ErrorMessage>

                        {/* Password strength indicator */}
                        <div className="mt-2">
                          <div className="h-1.5 w-full bg-gray-200 rounded-full">
                            <div
                              className={`h-full rounded-full transition-all duration-300 ${passwordStrength.color}`}
                              style={{ width: passwordStrength.width }}
                            ></div>
                          </div>
                          <small className="text-[#343A40] block mt-1">
                            Password Strength: {passwordStrength.label}
                          </small>
                        </div>
                      </div>

                      {/* Confirm password */}
                      <div>
                        <label className="font-medium block mb-1">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <Field
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            className={`bg-[#E2E3E5] block h-10 w-full px-3 rounded pr-10 ${
                              touched.confirmPassword && errors.confirmPassword
                                ? "border border-red-500"
                                : ""
                            }`}
                          />
                          <button
                            type="button"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            <img
                              src={
                                showConfirmPassword
                                  ? "/images/hidePassword.svg"
                                  : "/images/showPassword.svg"
                              }
                              className="w-6 h-6"
                              alt={
                                showConfirmPassword
                                  ? "Hide password"
                                  : "Show password"
                              }
                            />
                          </button>
                        </div>
                        <ErrorMessage name="confirmPassword">
                          {(msg) => (
                            <small className="text-red-500 text-sm block mt-1">
                              {msg}
                            </small>
                          )}
                        </ErrorMessage>
                      </div>

                      {/* Terms agreement */}
                      <div className="my-3">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <Field
                            type="checkbox"
                            name="agreeToTerms"
                            className="w-4 h-4"
                          />
                          <span>
                            I agree to the{" "}
                            <a href="#" className="text-[#5046E5]">
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-[#5046E5]">
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                        <ErrorMessage name="agreeToTerms">
                          {(msg) => (
                            <small className="text-red-500 text-sm block mt-1">
                              {msg}
                            </small>
                          )}
                        </ErrorMessage>
                      </div>

                      {/* Hidden role field */}
                      <Field type="hidden" name="role" value={role} />

                      {/* Submit button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#5046e5] h-10 rounded text-[#ffffff] font-medium disabled:opacity-50 mt-2"
                      >
                        {isSubmitting
                          ? "Creating Account..."
                          : "Create Account"}
                      </button>
                    </Form>
                  )}
                </Formik>
              ) : (
                /* Login Form */
                <Formik
                  initialValues={loginInitialValues}
                  validationSchema={toFormikValidationSchema(loginSchema)}
                  onSubmit={handleLoginSubmit}
                >
                  {({ errors, touched, isSubmitting }) => (
                    <Form className="space-y-4">
                      {/* Email field */}
                      <div>
                        <label className="font-normal block mb-1">
                          Email Address
                        </label>
                        <Field
                          type="email"
                          name="email"
                          className={`bg-[#E2E3E5] block h-10 w-full px-3 rounded ${
                            touched.email && errors.email
                              ? "border border-red-500"
                              : ""
                          }`}
                        />
                        <ErrorMessage name="email">
                          {(msg) => (
                            <small className="text-red-500 text-sm block mt-1">
                              {msg}
                            </small>
                          )}
                        </ErrorMessage>
                      </div>

                      {/* Password field */}
                      <div>
                        <label className="flex justify-between mb-1">
                          <span>Password</span>
                          <span className="text-[#5046E5] cursor-pointer">
                            Forgot Password
                          </span>
                        </label>
                        <div className="relative">
                          <Field
                            type={showLoginPassword ? "text" : "password"}
                            name="password"
                            className={`bg-[#E2E3E5] block h-10 w-full px-3 rounded pr-10 ${
                              touched.password && errors.password
                                ? "border border-red-500"
                                : ""
                            }`}
                          />
                          <button
                            type="button"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            onClick={() =>
                              setShowLoginPassword(!showLoginPassword)
                            }
                          >
                            <img
                              src={
                                showLoginPassword
                                  ? "/images/hidePassword.svg"
                                  : "/images/showPassword.svg"
                              }
                              className="w-6 h-6"
                              alt={
                                showLoginPassword
                                  ? "Hide password"
                                  : "Show password"
                              }
                            />
                          </button>
                        </div>
                        <ErrorMessage name="password">
                          {(msg) => (
                            <small className="text-red-500 text-sm block mt-1">
                              {msg}
                            </small>
                          )}
                        </ErrorMessage>

                        {/* Remember me checkbox */}
                        <label className="flex items-center space-x-2 mt-3 cursor-pointer">
                          <Field
                            type="checkbox"
                            name="rememberMe"
                            className="w-4 h-4"
                          />
                          <span className="text-sm">
                            Remember Password for 30 days
                          </span>
                        </label>
                      </div>

                      {/* Hidden role field */}
                      <Field type="hidden" name="role" value={role} />

                      {/* Login button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#5046e5] h-10 rounded text-[#ffffff] font-medium disabled:opacity-50 mt-2"
                      >
                        {isSubmitting ? "Signing in..." : "Sign in"}
                      </button>
                    </Form>
                  )}
                </Formik>
              )}

              {/* Toggle between login and create account */}
              {signedIn ? (
                <p className="text-center font-medium mt-6">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setSignedIn(false)}
                    className="text-[#5046e5] hover:cursor-pointer bg-transparent border-none"
                  >
                    Create account
                  </button>
                </p>
              ) : (
                <p className="text-center font-medium mt-6">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setSignedIn(true)}
                    className="text-[#5046e5] hover:cursor-pointer bg-transparent border-none"
                  >
                    Sign in
                  </button>
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
