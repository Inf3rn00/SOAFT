import React from "react";
import { BiCalendar } from "react-icons/bi";
import { PiPlus } from "react-icons/pi";
import AdminStatisticsCard from "../components/AdminStatisticsCard";
import TestPerformanceChart from "../components/TestPerformanceChart";
import ActiveTest from "../components/ActiveTest";
import RecentSubmissions from "../components/RecentSubmissions";
import UpcomingTest from "../components/UpcomingTest";
import PlagiarismOverview from "../components/PlagiarismOverview";
import SecurityAlert from "../components/SecurityAlert";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="bg-background-offwhite w-full h-full overflow-y-auto font-sans">
      <div className="p-5 flex justify-between items-center">
        <div>
          <h1 className="text-[2rem] font-semibold cursor-pointer">Dashboard</h1>
          <p className="text-[#6c757d] mt-2">Welcome back, professor Ogunleye</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="border border-[#e5e5e5] rounded-lg px-4 py-2 flex items-center gap-2 w-fit">
            <BiCalendar size={20} className="text-gray-500" />
            <span className="text-gray-700 font-medium">June 10, 2025</span>
          </div>
          <button className="flex items-center bg-[#5046e5] text-[#ffffff] font-bold px-4 py-2 rounded-lg gap-2 cursor-pointer" onClick={() => alert("Button clicked")}>
            <PiPlus size={18} /> Create test
          </button>
        </div>
      </div>
      <AdminStatisticsCard />
      <div className="p-5 flex gap-x-6">
        <div className="w-[70%]">
          <TestPerformanceChart />
          <ActiveTest />
          <RecentSubmissions />
        </div>
        <div className="flex flex-col w-[30%] gap-y-6">
          <UpcomingTest />
          <PlagiarismOverview />
          <SecurityAlert />
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
