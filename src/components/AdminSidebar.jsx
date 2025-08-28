import React from 'react'
import { Link } from 'react-router-dom';
import logo from "/Icons/landing page icons/LOGO.png";

const AdminSidebar = () => {
    const sidebarItems = [
        { label: "Dashboard", icon: "🏠", link: "/admin/" },
        { label: "Assessment", icon: "👥", link: "/admin/assessment" },
        { label: "Result", icon: "👤", link: "/admin/result" },
        { label: "Question Bank", icon: "👥", link: "/admin/question-bank" },
        { label: "Settings", icon: "⚙️", link: "/admin/settings" },
    ];

    return (
        <div className="w-full h-screen bg-[#ffffff] flex flex-col items-center border-r border-r-[#f0f1f2] justify-between box-border">
            {/* Logo and Sidebar Items */}
            <div className='w-full'>
                {/* Logo */}
                <div className="flex items-center h-17 border-b border-b-[#f0f1f2]">
                    <div className="w-[80%] mx-auto">
                        <img src={logo} alt="Logo" className="h-[43px] w-[48px]" />
                    </div>
                </div>
                {/* Sidebar Items */}
                <div className='font-semibold text-[16px] text-[#2e2e2e] mt-5 flex flex-col w-[80%] mx-auto'>
                {sidebarItems.map((item) => (
                    // Each sidebar item as a link
                        <Link to={item.link} className='px-2 hover:bg-[#f4f4f7] rounded-4xl w-[90%] h-[50px] flex items-center' key={item.label}>
                            <div className='flex items-center'>
                            {item.icon}
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
                <button className="font-semibold text-[#5046E5] px-4 py-2 rounded-lg border border-[#e5e5e5]">View help center</button>
            </div>
        </div>
    );
};

export default AdminSidebar;