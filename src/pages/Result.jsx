import React from 'react'
import { TbWorldPause } from 'react-icons/tb'

const Result = () => {
  return (
    
    <div className="flex flex-col items-center justify-center h-screen">
      <TbWorldPause className="text-6xl text-gray-500 mb-4" />
      <h1 className="text-2xl font-bold">Results Page</h1>
      <p className="text-gray-600 mt-2">This is where the results will be displayed.</p>
      <p className="text-gray-500 mt-1">Stay tuned for updates!</p>
    </div>

  )
}

export default Result