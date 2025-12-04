import { IoIosNotificationsOutline } from 'react-icons/io';
import logo from "/Icons/landing page icons/LOGO.png"
import { Link } from 'react-router-dom';


const StudentNavbar = () => {
  return (
    <div className="w-full h-17 bg-white flex flex-row items-center justify-between border-b border-[#f0f1f2]">
      <div className="flex items-center justify-between w-full mx-5">
        <div>
           <Link to="/">
           <img src={logo} className='w-16 mx-auto p-2' alt="" />
           </Link> 
        </div>
      
        {/* Notification and Profile */}
        <div className="flex items-center justify-between gap-2">
            <p className='font-semibold'>Welcome back Joseph Ayodeji</p>
          {/* Notification Icon */}
          <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-[#fcfcfc] relative">
            <IoIosNotificationsOutline size={30} />
            {/* Notification Badge */}
            <span className="bg-[#dc3545] absolute top-0 right-0 rounded-full h-[8px] w-[8px]"></span>
          </div>
          {/* Profile Picture */}
          <img
            src="/images/joseph.png"
            alt=""
            className="h-[40px] w-[40px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentNavbar;
