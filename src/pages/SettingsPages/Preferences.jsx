import * as React from "react";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const preferences = () => {
  const [checked, setChecked] = useState(true);
  const [checkedBox, setCheckedBox] = useState(true);
  const [checkedBox2, setCheckedBox2] = useState(true);
  const [checkedBox3, setCheckedBox3] = useState(true);
  const [checkedBox4, setCheckedBox4] = useState(true);
  const [checkedBox5, setCheckedBox5] = useState(!true);
  const [checkedBox6, setCheckedBox6] = useState(!true);

  const handleChange = (e) => setChecked(e.target.checked);
  const handleChangeBox = (e) => setCheckedBox(e.target.checked);
  const handleChangeBox2 = (e) => setCheckedBox2(e.target.checked);
  const handleChangeBox3 = (e) => setCheckedBox3(e.target.checked);
  const handleChangeBox4 = (e) => setCheckedBox4(e.target.checked);
  const handleChangeBox5 = (e) => setCheckedBox5(e.target.checked);
  const handleChangeBox6 = (e) => setCheckedBox6(e.target.checked);

  return (
    <div className="p-5 ">
      <section className="rounded-lg shadow-md p-5 bg-white mb-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold mt-2">
            Notification Preference
          </h1>
        </div>

        <hr className="text-gray-500 my-10 w-full " />

        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-medium">Email Preference</h1>
            <p className="font-light">
              Receive email notification for important updates
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
            <h1 className="text-xl font-medium">Asessment Notifications</h1>
            <p className="font-light">
              Get notified about assessment activities
            </p>
          </div>
          <div>
            <Switch
              checked={checkedBox2}
              onChange={handleChangeBox2}
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

        <div className="flex items-center mt-5">
          <Checkbox
            checked={checkedBox3}
            onChange={handleChangeBox3}
            inputProps={{ "aria-label": "controlled" }}
            sx={{
              "&.Mui-checked": {
                color: "#5046e5", // checked color
              },
              "&:hover": {
                backgroundColor: "rgba(80, 70, 229, 0.04)", // hover effect
              },
              marginLeft: "-10px",
            }}
          />
          <span className="text-md ">New submission</span>
        </div>

        <div className="flex items-center">
          <Checkbox
            checked={checkedBox4}
            onChange={handleChangeBox4}
            inputProps={{ "aria-label": "controlled" }}
            sx={{
              "&.Mui-checked": {
                color: "#5046e5", // checked color
              },
              "&:hover": {
                backgroundColor: "rgba(80, 70, 229, 0.04)", // hover effect
              },
              marginLeft: "-10px",
            }}
          />
          <span className="text-md ">Assessment submission</span>
        </div>

        <div className="flex items-center">
          <Checkbox
            checked={checkedBox5}
            onChange={handleChangeBox5}
            inputProps={{ "aria-label": "controlled" }}
            sx={{
              "&.Mui-checked": {
                color: "#5046e5", // checked color
              },
              "&:hover": {
                backgroundColor: "rgba(80, 70, 229, 0.04)", // hover effect
              },
              marginLeft: "-10px",
            }}
          />
          <span className="text-md ">Assessment Reminders</span>
        </div>
        <hr className="text-gray-500 my-10 w-full" />

        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-medium">System Notification</h1>
            <p className="font-light">
              Get notified about system updates and maintenance
            </p>
          </div>
          <div>
            <Switch
              checked={checkedBox}
              onChange={handleChangeBox}
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
            <h1 className="text-xl font-medium">Marketing Communication</h1>
            <p className="font-light">
              Receive update about new features and promotion
            </p>
          </div>
          <div>
            <Switch
              checked={checkedBox6}
              onChange={handleChangeBox6}
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
        <div className="flex justify-end items-center ">
          <button className="flex items-center bg-[#5046e5] text-white font-bold px-4 py-2 rounded-lg gap-2 cursor-pointer" onClick={()=> alert("Preferences saved!")  }>
             Save Preferences
          </button>
        </div>
      </section>
    </div>
  );
};
export default preferences;
