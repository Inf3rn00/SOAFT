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
    <div className="flex flex-row w-full">
      <div className="fixed w-[19%]">
        <AdminSidebar />
      </div>
      <div className="fixed w-[80%] ml-[19%] bg-white">
        <NavbarAdimin />
      </div>
      <div className="ml-[19%] mt-17 w-full flex justify-center items-center">
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="result" element={<Result />} />
          <Route path="result/advancedStat/:id" element={<AdvancedResultStats />} />
          <Route path="question-bank" element={<QuestionBank />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
