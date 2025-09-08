import { useState } from "react";

const ProfileInfo = () => {
  return (
    <div className="p-5 min-h-screen overflow-y-auto">
      <form className="h-auto">
        <section className="rounded-lg shadow-md p-5 bg-white mb-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold ">Profile Information</h1>
            <button className="flex items-center bg-[#5046e5] text-white font-bold px-4 py-2 rounded-lg gap-2 cursor-pointer">
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
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    className=" border-1 border-solid border-gray-400 p-2 w-80"
                    name="firstname"
                    placeholder="Ogunleye"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    className=" border-1 border-solid border-gray-400 p-2 w-80"
                    name="lastname"
                    placeholder="Olabisi"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between items-center p-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="Email"
                    className=" border-1 border-solid border-gray-400 p-2 w-80"
                    name="email"
                    placeholder="Example@gmail.com"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="number">Phone Number</label>
                  <input
                    type="text"
                    className=" border-1 border-solid border-gray-400 p-2 w-80"
                    name="number"
                    placeholder="+2349087654320"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 p-5">
                <label htmlFor="job-title">Job Title</label>
                <input
                  type="text"
                  className=" border-1 border-solid border-gray-400 p-2"
                  name="job-title"
                  placeholder="Professor"
                  required
                />
              </div>
            </div>
          </div>

          <hr className="text-gray-500 my-5 w-full " />
          <div>
            <div className="flex flex-col gap-2 p-5">
                <label htmlFor="bio">Bio</label>
                <textarea
                  className="border-1 border-solid border-gray-400 p-2 h-24 "
                  name="bio"
                  placeholder="Educationalist specialist with over 10 years of experience in curriculum development and assessment design. Passionate about creating learning experiences and meaningful assessment."
                  required
                />
              </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default ProfileInfo;