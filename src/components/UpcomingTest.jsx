import React from 'react'
import { PiPlus } from 'react-icons/pi'

const UpcomingTest = () => {
    const upcomingTests = [
        { id: 1, name: "Midterm Examination", course: "Data Structures and Algorithms", date: "June 15, 2025", time: "10:00 PM" },
        { id: 2, name: "Final Examination", course: "Operating Systems", date: "June 30, 2025", time: "2:00 PM" },
        { id: 3, name: "Project Presentation", course: "Software Engineering", date: "July 10, 2025", time: "1:00 PM" },
        { id: 4, name: "Thesis Defense", course: "Computer Science", date: "July 20, 2025", time: "11:00 AM" }
    ]
  return (
    <section className='bg-[#ffffff]  rounded-[16px] shadow-md'>
        <div className='p-6 w-full flex flex-col'>
            <div className='flex justify-between mb-5'>
                <h1 className='text-[22px] font-semibold my-auto'>Upcoming Test</h1>
                <p className='text-[#5046e5] font-semibold text-[16px] my-auto'>View Calendar</p>
            </div>
            <div className='flex flex-col gap-y-6'>
                {
                    upcomingTests.map(test => (
                        <div key={test.id} className={`p-2 ${test.name === "Midterm Examination" ? "border-l-4 border-[#5046e5]" : test.name === "Final Examination" ? "border-l-4 border-[#f59e0b]" : test.name === "Project Presentation" ? "border-l-4 border-[#10b981]" : "border-l-4 border-[#ef4444]"}`}>
                            <span className='text-[18px] font-semibold text-[#2e2e2e]'>{test.name}</span>
                            <p className='text-[#6c757d] text-[16px]'>{test.course}</p>
                            <p className='text-[#6c757d] text-[14px]'>{test.date} &bull; {test.time}</p>
                        </div>
                    ))
                }
                <button className='flex items-center justify-center gap-x-2 p-4 border border-[#d6d6d6] text-[#6c6c7e] font-bold bg-[#e5e5e5] text-[16px] rounded-lg'>
                    <PiPlus /> Schedule New Test
                </button>
            </div>
        </div>
    </section>
  )
}

export default UpcomingTest