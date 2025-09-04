import React from 'react'
import { Link } from 'react-router-dom';
import logo from "/Icons/landing page icons/LOGO.png";
import dashboardIcon from "/Icons/Admin page icons/sidebar/DahboardIcon.svg";
import AssesmentIcon from "/Icons/Admin page icons/sidebar/AssessmentIcon.svg";
import ResultIcon from "/Icons/Admin page icons/sidebar/ResultIcon.svg";
import questionBank from "/Icons/Admin page icons/sidebar/questionBank.svg";
import settingsIcon from "/Icons/Admin page icons/sidebar/settingsIcon.svg";

const AdminSidebar = () => {
    const sidebarItems = [
        { label: "Dashboard", icon: dashboardIcon, link: "/admin/" }, // ✅ Fixed: removed {}
        { label: "Assessment", icon: AssesmentIcon, link: "/admin/assessment" }, // ✅ Fixed: removed {}
        { label: "Result", icon: ResultIcon, link: "/admin/result" }, // ✅ Fixed: removed {}
        { label: "Question Bank", icon: questionBank, link: "/admin/question-bank" }, // ✅ Fixed: removed {}
        { label: "Settings", icon: settingsIcon, link: "/admin/settings" }, // ✅ Fixed: removed {}
    ];

    return (
        <div className="w-full h-screen bg-[#ffffff] flex flex-col items-center border-r border-r-[#f0f1f2] justify-between box-border">
            {/* Logo and Sidebar Items */}
            <div className='w-full'>
                {/* Logo */}
                <div className="flex items-center h-17 border-b border-b-[#f0f1f2]">
                    <div className="w-[80%] mx-auto">
                        <Link to='/'><img src={logo} alt="Logo" className="h-[43px] w-[48px]" /></Link>
                    </div>
                </div>
                {/* Sidebar Items */}
                <div className='font-semibold text-[16px] text-[#2e2e2e] mt-5 flex flex-col w-[80%] mx-auto'>
                {sidebarItems.map((item) => (
                    // Each sidebar item as a link
                        <Link to={item.link} className='px-2 hover:bg-[#f4f4f7] rounded-4xl w-[90%] h-[50px] flex items-center' key={item.label}>
                            <div className='flex items-center'>
                            {/* ✅ Fixed: Now properly rendering the imported icons */}
                            <img src={item.icon} alt={item.label} className="w-5 h-5 mr-2" />
                            <span className='ml-2'>{item.label}</span>
                            </div>
                        </Link>
                ))}
                </div>
            </div>
            {/* Help Center */}
            <div className='flex flex-col justify-center bg-[#f4f4f7] rounded-xl p-5 gap-5 mb-5 w-[90%]'>
                <h1 className='text-[22px] font-semibold mt-2'>Need Help</h1>
                <p className='text-[14px] text-[#6b6b6b]'>Check our documentation or contact support for Assistance</p>
                <button className="font-semibool text-[#5046E5] px-4 py-2 rounded-lg border border-[#e5e5e5]">View help center</button>
            </div>
        </div>
    );
};

export default AdminSidebar;