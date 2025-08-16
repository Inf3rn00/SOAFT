import React from 'react'
import { BiShow } from 'react-icons/bi'
import { FcNext } from 'react-icons/fc'
import { FiEdit2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ActiveTest = () => {
  // Sample data for active tests
  const data = [
    { id : 1, name: "Midterm Examination", status: "in progress", participant: "42/45"},
    { id : 2, name: "Final Project", status: "upcoming", participant: "0/45"},
    { id : 3, name: "Midterm Test", status: "completed", participant: "45/45"},
    { id : 4, name: "Final Examination", status: "upcoming", participant: "0/45"}
  ]

  
  // Render the ActiveTest component
  return (
    <div className='bg-[#ffffff] p-4 rounded-[16px] shadow-md mt-8'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className="text-[24px] font-semibold mb-4">Active Tests</h2>
        <div className='cursor-pointer text-[#5046e5] font-semibold text-[18px]'>
          <Link to="/tests" className='flex items-center gap-x-1'><p>View All</p> <FcNext /></Link>
        </div>
      </div>
      <div className="rounded-lg">
        <table className="min-w-full">
          <thead>
            <tr className='text-[#6c757d] text-[18px] font-semibold'>
              <th className="py-2 px-4 border-b-[0.5px] border-b-[#d6d6d6]">TEST NAME</th>
              <th className="py-2 px-4 border-b-[0.5px] border-b-[#d6d6d6]">STATUS</th>
              <th className="py-2 px-4 border-b-[0.5px] border-b-[#d6d6d6]">PARTICIPANT</th>
              <th className="py-2 px-4 border-b-[0.5px] border-b-[#d6d6d6]">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-5 px-4 border-b-[0.5px] border-b-[#d6d6d6] font-semibold">{item.name}
                  <p className='font-medium text-[#6c757d] text-[16px]'>Ends in 45 minutes</p>
                </td>
                <td className="py-5 px-4 border-b-[0.5px] border-b-[#d6d6d6]"><p className='bg-[#eafaef] py-2 px-4 rounded-full text-[#239d2a] text-[16px] font-medium'>{item.status}</p></td>
                <td className="py-5 px-4 border-b-[0.5px] border-b-[#d6d6d6] text-[#6c757d] text-[18px] font-medium">{item.participant}</td>
                <td className="py-5 px-4 border-b-[0.5px] border-b-[#d6d6d6]">
                  <div className="flex justify-center gap-1">
                    <button className="text-gray-500 px-2 py-2 rounded"><FiEdit2 size={20}/></button>
                    <button className="text-gray-500 px-2 py-2 rounded"><BiShow size={20}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ActiveTest