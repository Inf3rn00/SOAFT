import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";

// Asset Imports
import Ai_icon from "/Icons/Form icons/Ai - powered icon.svg";
import Built_in_plagiarism from "/Icons/Form icons/Built-In plagiarism icon.svg";
import Distraction_Free from "/Icons/Form icons/DistractionFree icon.svg";

/**
 * ZOD VALIDATION SCHEMAS
 * These define the "rules" for our forms. 
 * zod-formik-adapter converts these into a format Formik understands.
 */

// Schema for Registration
const signupSchema = z.object({
    firstName: z.string().min(2, "First name is too short"),
    lastName: z.string().min(2, "Last name is too short"),
    email: z.string().email("Invalid email address"),
    school: z.string().min(3, "School name is required"),
    password: z.string().min(8, "Must be at least 8 characters"),
    confirmPassword: z.string(),
    // z.literal(true) ensures the form cannot be submitted unless this is checked
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms" }),
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // Highlights the confirmPassword field specifically
  });

// Schema for Login
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

/**
 * REUSABLE INPUT COMPONENT
 * Handles the label, the input field (Field), password toggling, and error display.
 */
const FormInput = ({ label, name, type = "text", showPasswordToggle, onToggle, isVisible, helperText }) => (
  <div className="my-3 w-full">
    <div className="flex justify-between items-center mb-1">
      <label className="font-medium text-sm text-slate-700">{label}</label>
    </div>
    <div className="relative">
      <Field
        name={name}
        // If it's a password field, toggle between 'text' and 'password' types
        type={showPasswordToggle ? (isVisible ? "text" : "password") : type}
        className="block bg-[#E2E3E5] h-9 w-full px-3 rounded border border-transparent focus:border-[#5046e5] focus:bg-white transition-all outline-none text-sm"
      />
      {showPasswordToggle && (
        <button type="button" onClick={onToggle} className="absolute right-3 top-1/2 -translate-y-1/2">
          <img 
            src={isVisible ? "/images/hidePassword.svg" : "/images/showPassword.svg"} 
            className="w-5 h-5 opacity-60" 
            alt="toggle visibility" 
          />
        </button>
      )}
    </div>
    {/* Automatically displays validation errors from Zod */}
    <ErrorMessage name={name} component="small" className="text-[#DC3545] text-[11px] mt-1" />
    {helperText && <p className="text-[11px] text-slate-500 mt-1 opacity-70">{helperText}</p>}
  </div>
);

const Login = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation
  
  // COMPONENT STATE
  const [role, setRole] = useState("student"); // Tracks if user is 'student' or 'admin'
  const [signedIn, setSignedIn] = useState(false); // Toggle between Login and Signup view
  
  // Track visibility for three different password fields separately
  const [visibility, setVisibility] = useState({ 
    pass: false, 
    confirm: false, 
    login: false 
  });

  const toggleVisibility = (key) => setVisibility((prev) => ({ ...prev, [key]: !prev[key] }));

  /**
   * FORM SUBMISSION HANDLER
   * This runs only if the form passes all Zod validation rules.
   */
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Submitting Data:", values);
    
    // In a real app, you would perform your API call here
    setTimeout(() => {
      setSubmitting(false);
      
      // LOGIC: Lead user to different dashboards based on the selected Role
      if (role === "admin") {
        navigate("/Admin"); // Navigate to Admin Panel
      } else {
        navigate("/student-view"); // Navigate to Student Dashboard
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <div className="flex justify-center items-start py-12">
        {/* Container for Left (Branding) and Right (Form) panels */}
        <div className="flex items-stretch shadow-2xl rounded-xl overflow-hidden w-[1000px] min-h-[600px]">
          
          {/* ========== LEFT PANEL: BRANDING & FEATURES ========== */}
          <div className="bg-[#5046e5] p-10 text-white w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-3xl tracking-tight mb-1">SOAFT</h1>
              <p className="font-light opacity-80 text-sm">Secure Online Assessment Platform</p>
              <h2 className="font-semibold text-2xl mt-10 mb-4 leading-tight">Empower Your Educational Assessment</h2>
              
              <ul className="space-y-6 mt-8">
                {[{ icon: Ai_icon, text: "AI-Powered Grading & Feedback" }, 
                  { icon: Built_in_plagiarism, text: "Built-In Plagiarism Detection" }, 
                  { icon: Distraction_Free, text: "Secure Test Environment" }].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-medium">
                    <div className="bg-white/10 p-2 rounded-full">
                      <img src={item.icon} className="w-5 h-5 brightness-200" alt="" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs opacity-50">&copy; 2026 SOAFT. All rights reserved.</p>
          </div>

          {/* ========== RIGHT PANEL: THE FORM ========== */}
          <div className="bg-[#F8F9FA] p-10 w-1/2 flex flex-col justify-center">
            <h1 className="text-center font-bold text-3xl text-[#282373] mb-2">
              {signedIn ? "Welcome Back" : "Create Account"}
            </h1>
            
            {/* ROLE SWITCHER */}
            <div className="mb-6 mt-4">
              <div className="bg-slate-200 p-1 rounded-lg flex h-10">
                <button 
                  onClick={() => setRole("student")} 
                  className={`flex-1 rounded-md text-sm font-semibold transition-all ${role === "student" ? "bg-white text-[#5046e5] shadow-sm" : "text-slate-500"}`}
                >Student</button>
                <button 
                  onClick={() => setRole("admin")} 
                  className={`flex-1 rounded-md text-sm font-semibold transition-all ${role === "admin" ? "bg-white text-[#5046e5] shadow-sm" : "text-slate-500"}`}
                >Administrator</button>
              </div>
            </div>

            {/* FORMIK WRAPPER */}
            <Formik
              // Determine initial values based on whether user is logging in or signing up
              initialValues={signedIn 
                ? { email: "", password: "", role } 
                : { firstName: "", lastName: "", email: "", school: "", password: "", confirmPassword: "", terms: false, role }
              }
              // Switch between schemas based on state
              validationSchema={toFormikValidationSchema(signedIn ? loginSchema : signupSchema)}
              enableReinitialize // Important: allows form to reset when switching between Login/Signup
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col">
                  {!signedIn ? (
                    /* SIGN UP FIELDS */
                    <>
                      <div className="flex gap-4">
                        <FormInput label="First Name" name="firstName" />
                        <FormInput label="Last Name" name="lastName" />
                      </div>
                      <FormInput label="Email Address" name="email" type="email" />
                      <FormInput label="School Name" name="school" />
                      <FormInput label="Password" name="password" showPasswordToggle isVisible={visibility.pass} onToggle={() => toggleVisibility("pass")} />
                      <FormInput label="Confirm Password" name="confirmPassword" showPasswordToggle isVisible={visibility.confirm} onToggle={() => toggleVisibility("confirm")} />
                      
                      {/* Terms Checkbox Field */}
                      <div className="my-2">
                        <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                          <Field type="checkbox" name="terms" className="w-4 h-4 accent-[#5046e5]" />
                          I agree to the <span className="text-[#5046e5] underline">Terms & Privacy</span>
                        </label>
                        <ErrorMessage name="terms" component="small" className="text-[#DC3545] text-[11px] block mt-1" />
                      </div>
                    </>
                  ) : (
                    /* LOGIN FIELDS */
                    <>
                      <FormInput label="Email Address" name="email" type="email" />
                      <FormInput label="Password" name="password" showPasswordToggle isVisible={visibility.login} onToggle={() => toggleVisibility("login")} />
                    </>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting} // Prevents double submission
                    className="w-full bg-[#5046e5] text-white py-3 rounded-lg font-bold mt-4 hover:bg-[#3f36b5] active:scale-[0.98] disabled:opacity-50 transition-all"
                  >
                    {signedIn ? (isSubmitting ? "Processing..." : "Sign In") : (isSubmitting ? "Creating..." : "Create Account")}
                  </button>
                </Form>
              )}
            </Formik>

            {/* TOGGLE LINK */}
            <p className="text-center mt-8 text-sm text-slate-600">
              {signedIn ? "Don't have an account? " : "Already have an account? "}
              <span onClick={() => setSignedIn(!signedIn)} className="text-[#5046e5] font-bold cursor-pointer hover:underline">
                {signedIn ? "Create account" : "Sign in"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;