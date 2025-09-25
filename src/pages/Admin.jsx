import React from "react";
import Assessment from "../pages/Assessment";
import Result from "./ResultPages/Result";
import QuestionBank from "../pages/QuestionBank";
import Settings from "../pages/SettingsPages/Settings";
import AdminSidebar from "../components/AdminSidebar";
import NavbarAdimin from "../components/NavbarAdimin";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import AdvancedResultStats from "./ResultPages/AdvancedResultStats";

const Admin = () => {
  return (
    <div className=" flex flex-row w-full h-screen">
      <div className="fixed w-[19%] h-full z-40">
        <AdminSidebar />
      </div>

      <div className="ml-[19%] w-[81%] flex flex-col h-screen">
        <div className="fixed top-0 left-[19%] w-[81%] z-50 bg-white">
          <NavbarAdimin />
        </div>
        <div className="flex-1 overflow-y-auto pt-[68px]">
          <Routes>
            <Route index element={<AdminDashboard />} />
            <Route path="assessment" element={<Assessment />} />
            <Route path="result" element={<Result />} />
            <Route
              path="result/advancedStat/:id"
              element={<AdvancedResultStats />}
            />
            <Route path="question-bank" element={<QuestionBank />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
