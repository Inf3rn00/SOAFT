import React from "react";
import Assessment from "../pages/Assessment";
import Result from "../pages/Result";
import QuestionBank from "../pages/QuestionBank";
import Settings from "../pages/Settings";
import AdminSidebar from "../components/AdminSidebar";
import NavbarAdimin from "../components/NavbarAdimin";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

const Admin = () => {
    return (
        <div className="flex flex-row w-full">
        <div className="fixed w-[20%]">
            <AdminSidebar />
        </div>
        <div className="fixed h-screen w-[80%] ml-[20%]">
            <NavbarAdimin />
        </div>
        <div className="ml-[20%] mt-17 w-full flex justify-center items-center">
            <Routes>
                <Route index element={<AdminDashboard />} />
                <Route path="assessment" element={<Assessment />} />
                <Route path="result" element={<Result />} />
                <Route path="question-bank" element={<QuestionBank />} />
                <Route path="settings" element={<Settings />} />
            </Routes>
        </div>
        
        </div>
    );
};

export default Admin;
