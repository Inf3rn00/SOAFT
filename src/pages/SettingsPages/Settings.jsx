import React from "react";
import { FaDownload } from "react-icons/fa";
import ProfileInfo from "./ProfileInfo";

const Settings = () => {
  return (
    <div className="bg-background-offwhite w-full  ">
      <section className="p-5 flex justify-between items-center w-full">
        <div>
          <h1 className="text-[32px] font-semibold">Settings</h1>
          <p className="text-[#6c757d] mt-2">
            Configure your application preferences, account settings, and
            integrations
          </p>
        </div>
      </section>
      <ProfileInfo />
    </div>
  );
};

export default Settings;
