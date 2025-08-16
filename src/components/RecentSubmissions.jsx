import React from 'react'
import { FcNext } from 'react-icons/fc'
import { Link } from 'react-router-dom';

const RecentSubmissions = () => {
    const submissions = [
        {id : 1, name: "Elizabeth Lizzy", title: "'Final project submission - software Engineering'", time: "2 hours ago", profile: '👤'},
        {id : 2, name: "John Doe", title: "'Midterm exam submission - Mathematics'", time: "3 hours ago", profile: '👤'},
        {id : 3, name: "Jane Smith", title: "'Project proposal submission - Computer Science'", time: "5 hours ago", profile: '👤'},
        {id : 4, name: "Michael Brown", title: "'Research paper submission - Physics'", time: "1 day ago", profile: '👤'},
        {id : 5, name: "Emily Davis", title: "'Thesis submission - Chemistry'", time: "2 days ago", profile: '👤'}
    ]
    return (
        <div className='bg-[#ffffff] p-5 rounded-[16px] shadow-md mt-8'>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[24px] font-semibold mb-4">Recent Submissions</h2>
                <div className="cursor-pointer text-[#5046e5] font-semibold text-[18px]">
                    <Link to="/tests" className="flex items-center gap-x-1">
                        <p>View All</p> <FcNext />
                    </Link>
                </div>
            </div>
            <div className='flex flex-col gap-y-5'>
                {
                    submissions.map((submission) => (
                        <div key={submission.id} className='flex items-center bg-[#f4f4f7] rounded-[12px] p-3 gap-x-5'>
                            <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full'>
                                {submission.profile}
                            </div>
                            <div className='flex-1'>
                                <p className='font-medium text-[18px] mb-1'>{submission.name}</p>
                                <p className='text-[14px] font-medium text-[#6c757d]'>{submission.title}</p>
                            </div>
                            <div className='text-sm text-[#6c757d]'>{submission.time}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default RecentSubmissions