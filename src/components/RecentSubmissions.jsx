import React from 'react'
import { FcNext } from 'react-icons/fc'
import { Link } from 'react-router-dom';

const RecentSubmissions = () => {
    const submissions = [
        { id: 1, name: "Elizabeth Lizzy", title: "'Final project submission - software Engineering'", time: "2 hours ago", profile: '👤' },
        { id: 2, name: "John Doe", title: "'Midterm exam submission - Mathematics'", time: "3 hours ago", profile: '👤' },
        { id: 3, name: "Jane Smith", title: "'Project proposal submission - Computer Science'", time: "5 hours ago", profile: '👤' },
        { id: 4, name: "Michael Brown", title: "'Research paper submission - Physics'", time: "1 day ago", profile: '👤' },
        { id: 5, name: "Emily Davis", title: "'Thesis submission - Chemistry'", time: "2 days ago", profile: '👤' }
    ]
    return (
        <div className='bg-white p-5 rounded-lg shadow-md mt-8'>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[1.5rem] font-semibold mb-4 text-gray-900">Recent Submissions</h2>
                <div className="cursor-pointer text-indigo-600 font-semibold text-lg hover:text-indigo-800 transition-colors">
                    <Link to="/tests" className="flex items-center gap-x-1">
                        <p>View All</p> <FcNext />
                    </Link>
                </div>
            </div>
            <div className='flex flex-col gap-y-4'>
                {
                    submissions.map((submission) => (
                        <div key={submission.id} className='flex items-center bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg p-3 gap-x-5 border border-gray-100'>
                            <div className='flex justify-center items-center w-10 h-10 rounded-full bg-indigo-50 text-indigo-600'>
                                {submission.profile}
                            </div>
                            <div className='flex-1'>
                                <p className='font-semibold text-gray-900 text-base mb-0.5'>{submission.name}</p>
                                <p className='text-sm font-medium text-gray-500'>{submission.title}</p>
                            </div>
                            <div className='text-xs font-medium text-gray-400 whitespace-nowrap'>{submission.time}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default RecentSubmissions