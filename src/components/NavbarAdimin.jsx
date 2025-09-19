import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from 'react-icons/io';

const NavbarAdimin = () => {
    return (
        // Navbar for Admin
        <div className='w-full h-17 bg-[#ffffff] flex flex-row items-center justify-between border-b border-[#f0f1f2]'>
            <div className='flex items-center justify-between w-full h-full mx-5'>
                {/* Search Bar */}
                <div className='flex items-center border border-[#f0f1f2] rounded-full text-[#a7acb1] w-[550px] h-[50px]'>
                    
                    <div className='flex justify-end items-center h-full w-[10%] bg-[#f0f1f2] rounded-l-full'>
                        {/* Search Icon */}
                        <FaSearch size={20}/>
                    </div>
                    {/* Search Input */}
                    <input type="text" placeholder= " Search for test, student, or question" className="focus-within: bg-[#f0f1f2] border-[#f0f1f2] p-2 w-[90%] h-full rounded-r-full focus: border-0 "  />
                </div>
                {/* Notification and Profile */}
                <div className='flex items-center justify-between gap-2'>
                    {/* Notification Icon */}
                    <div className='h-[40px] w-[40px] flex items-center justify-center rounded-full bg-[#fcfcfc] relative'>
                        <IoIosNotificationsOutline size={30}/>
                        {/* Notification Badge */}
                        <span className='bg-[#dc3545] absolute top-0 right-0 rounded-full h-[8px] w-[8px]'></span>
                    </div>
                    {/* Profile Picture */}
                    <img src="/images/Testimonialface.jpg" alt="" className='h-[40px] w-[40px] rounded-full'/>
                </div>
            </div>
        </div>
    );
}

export default NavbarAdimin