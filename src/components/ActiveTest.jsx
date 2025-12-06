import React from 'react'
import { BiShow } from 'react-icons/bi'
import { FcNext } from 'react-icons/fc'
import { FiEdit2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ActiveTest = () => {
  // Sample data for active tests
  const data = [
    { id : 1, name: "Midterm Examination", status: "in progress", participant: "42/45"},
    { id : 2, name: "Final Project", status: "in progress", participant: "42/45"},
    { id : 3, name: "Midterm Test", status: "in progress", participant: "42/45"},
    { id : 4, name: "Final Examination", status: "in progress", participant: "42/45"}
  ]

  
  // Render the ActiveTest component
  return (
    <section className='bg-[#ffffff] p-4 rounded-[1rem] shadow-md mt-8'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className="text-[1.5rem] font-semibold mb-4">Active Tests</h2>
        <div className='cursor-pointer text-[#5046e5] font-semibold text-[1.125rem]'>
          <Link to="/tests" className='flex items-center gap-x-1'><p>View All</p> <FcNext /></Link>
        </div>
      </div>
      <div className="rounded-lg">
        {/* Table Container */}
        <table className="min-w-full">
          {/* Table Header */}
          <thead>
            <tr className='text-[#6c757d] text-[1.125rem] font-semibold text-left'>
              <th className="py-2 px-4 border-b-[.0313rem] border-b-[#d6d6d6]">TEST NAME</th>
              <th className="py-2 px-4 border-b-[.0313rem] border-b-[#d6d6d6]">STATUS</th>
              <th className="py-2 px-4 border-b-[.0313rem] border-b-[#d6d6d6]">PARTICIPANT</th>
              <th className="py-2 px-4 border-b-[.0313rem] border-b-[#d6d6d6]">ACTIONS</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-5 px-4 border-b-[.0313rem] border-b-[#d6d6d6] font-semibold">{item.name}
                  <p className='font-medium text-[#6c757d] text-[1rem]'>Ends in 45 minutes</p>
                </td>
                <td className="py-5 px-4 border-b-[.0313rem] border-b-[#d6d6d6]"><span className='bg-[#eafaef] px-4 py-2 rounded-full text-[#239d2a] text-[1rem] font-medium'>{item.status}</span></td>
                <td className="py-5 px-4 border-b-[.0313rem] border-b-[#d6d6d6] text-[#6c757d] text-[1.125rem] font-medium">{item.participant}</td>
                <td className="py-5 px-4 border-b-[.0313rem] border-b-[#d6d6d6]">
                  <div className="flex gap-1">
                    <button className="text-gray-500 px-2 py-2 rounded"><FiEdit2 size={25}/></button>
                    <button className="text-gray-500 px-2 py-2 rounded"><BiShow size={25}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ActiveTest