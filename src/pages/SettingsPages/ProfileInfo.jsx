import { useFormik } from "formik";
import { useState } from "react";
import { basicSchema } from "../../schema/validation";

// Ogunleye
// Olabisi
// Example@yahoo.com
// 09012345678
// Professor
// Educationalist specialist with over 10 years of experience in curriculum development and assessment design. Passionate about creating learning experiences and meaningful assessment.

const ProfileInfo = () => {
  const onSubmit = () => {
    alert(
      `Form submitted by ${formik.values.jobTitle} ${formik.values.firstName} `
    );
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      jobTitle: "",
      bio: "",
    },

    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(formik.errors);

  return (
    <div className="p-5 min-h-screen overflow-y-auto">
      <form className="h-auto" onSubmit={formik.handleSubmit}>
        <section className="rounded-lg shadow-md p-5 bg-white mb-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold ">Profile Information</h1>
            <button
              className="flex items-center bg-[#5046e5] text-white font-bold px-4 py-2 rounded-lg gap-2 cursor-pointer"
              type="submit"
            >
              Save Changes
            </button>
          </div>

          <hr className="text-gray-500 my-10 w-full " />
          <div className="flex">
            <div className="flex flex-col items-center gap-4 pt-10 w-1/4  ">
              <img
                src="/images/Testimonialface.jpg"
                className="w-20 h-20 rounded-[50%]"
                alt=""
              />
              <p className="text-background-blue">Change Photo</p>
            </div>
            <div className="w-3/4 ">
              <div className="flex justify-between items-center p-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className={` ${
                      formik.errors.firstName && formik.touched.firstName
                        ? "border-red-600 border-solid border-1 p-2 w-80"
                        : "border-1 border-solid border-gray-400 p-2 w-80"
                    }`}
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.firstName && formik.touched.firstName && (
                    <small className="text-red-600 text-sm mt-1">
                      {formik.errors.firstName}
                    </small>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className={` ${
                      formik.errors.lastName && formik.touched.lastName
                        ? "border-red-600 border-solid border-1 p-2 w-80"
                        : "border-1 border-solid border-gray-400 p-2 w-80"
                    }`}
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.lastName &&
                    formik.touched.lastName &&
                    (
                      <small className="text-red-600 text-sm mt-1">
                        {formik.errors.lastName}
                      </small>
                    )}
                </div>
              </div>
              <div className="flex justify-between items-center p-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="Email"
                    className={` ${
                      formik.errors.email && formik.touched.email
                        ? "border-red-600 border-solid border-1 p-2 w-80"
                        : "border-1 border-solid border-gray-400 p-2 w-80"
                    }`}
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && formik.touched.email && (
                     <small className="text-red-600 text-sm mt-1">
                        {formik.errors.email}
                      </small>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    className={` ${
                      formik.errors.phoneNumber && formik.touched.phoneNumber
                        ? "border-red-600 border-solid border-1 p-2 w-80"
                        : "border-1 border-solid border-gray-400 p-2 w-80"
                    }`}
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                     <small className="text-red-600 text-sm mt-1">
                        {formik.errors.phoneNumber}
                      </small>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2 p-5">
                <label htmlFor="jobTitle">Job Title</label>
                <input
                  type="text"
                  className={` ${
                    formik.errors.jobTitle && formik.touched.jobTitle
                      ? "border-red-600 border-solid border-1 p-2 w-80"
                      : "border-1 border-solid border-gray-400 p-2 w-80"
                  }`}
                  name="jobTitle"
                  value={formik.values.jobTitle}
                  onChange={formik.handleChange}
                />
                {formik.errors.jobTitle && formik.touched.jobTitle && (
                     <small className="text-red-600 text-sm mt-1">
                        {formik.errors.jobTitle}
                      </small>
                  )}
              </div>
            </div>
          </div>

          <hr className="text-gray-500 my-5 w-full " />
          <div>
            <div className="flex flex-col gap-2 p-5">
              <label htmlFor="bio">Bio</label>
              <textarea
                className={` ${
                  formik.errors.bio && formik.touched.bio
                    ? "border-red-600 border-solid border-1 p-2"
                    : "border-1 border-solid border-gray-400 p-2"
                }`}
                name="bio"
                value={formik.values.bio}
                onChange={formik.handleChange}
              />
              {formik.errors.bio && formik.touched.bio && (
                     <small className="text-red-600 text-sm mt-1">
                        {formik.errors.bio}
                      </small>
                  )}
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default ProfileInfo;
