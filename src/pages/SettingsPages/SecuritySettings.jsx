import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const SecuritySettings = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => setChecked(e.target.checked);

  return (
    <div className="p-5 ">
      <section className="rounded-lg shadow-md p-5 bg-white mb-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold mt-2">Security Settings</h1>
        </div>

        <hr className="text-gray-500 my-10 w-full " />

        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-medium">Two Factor Authentication</h1>
            <p className="font-light">
              Add an extra layer of security to your account
            </p>
          </div>
          <div>
            <Switch
              checked={checked}
              onChange={handleChange}
              slotProps={{ input: { "aria-label": "controlled" } }}
              className="scale-120"
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#5046e5", // thumb color when checked
                  "&:hover": {
                    backgroundColor: "rgba(105, 100, 53, 0.08)", // hover effect
                  },
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#5046e5", // track color when checked
                },
                "& .MuiSwitch-track": {
                  backgroundColor: "#ccc", // track color when unchecked
                },
              }}
            />
          </div>
        </div>

        <hr className="text-gray-500 my-10 w-full" />

        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-medium">Session Management</h1>
            <p className="font-light">Manage your active sessions</p>
          </div>
          <div>
            <p className="text-background-blue text-md hover: cursor-pointer">
              View Active session(s)
            </p>
          </div>
        </div>
        <hr className="text-gray-500 my-10 w-full" />

        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-medium">Login History</h1>
            <p className="font-light">View your recent login activity</p>
          </div>
          <div>
            <p className="text-background-blue text-md hover: cursor-pointer">View Login History</p>
          </div>
        </div>
        <hr className="text-gray-500 my-10 w-full" />
       


        <div className="flex justify-between items-center ">
            <p className="text-red-600 text-lg font-bold hover: cursor-pointer ">Log Out</p>

          <button
            className="flex items-center bg-[#5046e5] text-white font-bold px-4 py-2 rounded-lg gap-2 cursor-pointer"
            onClick={() => alert("Security Settings saved!")}
          >
            Save Security Settings
          </button>
        </div>
      </section>
    </div>
  );
};

export default SecuritySettings;
