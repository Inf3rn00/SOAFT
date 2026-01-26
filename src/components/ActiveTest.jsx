import React from 'react'
import { BiShow } from 'react-icons/bi'
import { FcNext } from 'react-icons/fc'
import { FiEdit2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ActiveTest = () => {
  // Sample data for active tests
  const data = [
    { id: 1, name: "Midterm Examination", status: "in progress", participant: "42/45" },
    { id: 2, name: "Final Project", status: "in progress", participant: "42/45" },
    { id: 3, name: "Midterm Test", status: "in progress", participant: "42/45" },
    { id: 4, name: "Final Examination", status: "in progress", participant: "42/45" }
  ]


  // Render the ActiveTest component
  return (
    <section className='bg-white p-5 rounded-lg shadow-md mt-8'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className="text-[1.5rem] font-semibold mb-4 text-gray-900">Active Tests</h2>
        <div className='cursor-pointer text-indigo-600 font-semibold text-lg hover:text-indigo-800 transition-colors'>
          <Link to="/tests" className='flex items-center gap-x-1'><p>View All</p> <FcNext /></Link>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden border border-gray-100">
        {/* Table Container */}
        <table className="min-w-full text-left">
          {/* Table Header */}
          <thead className="bg-[#f0f1f2] h-16">
            <tr className='text-gray-900 font-semibold text-sm uppercase tracking-wider'>
              <th className="px-6 py-3 border-b border-gray-100">Test Name</th>
              <th className="px-6 py-3 border-b border-gray-100">Status</th>
              <th className="px-6 py-3 border-b border-gray-100">Participant</th>
              <th className="px-6 py-3 border-b border-gray-100 text-center">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className='text-sm'>
            {data.map((item) => (
              <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className='font-normal text-gray-500 text-xs mt-1'>Ends in 45 minutes</p>
                </td>
                <td className="px-6 py-4">
                  <span className='bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase'>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600 font-medium">
                  {item.participant}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="text-gray-400 hover:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50 transition-colors"><FiEdit2 size={18} /></button>
                    <button className="text-gray-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors"><BiShow size={20} /></button>
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