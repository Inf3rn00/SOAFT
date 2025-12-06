import React from 'react'

const SecurityAlert = () => {
  const securityAlertDatas = [
    { 
      type: "Multiple ip Addresses",
      student: [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          ips: ["192.168.1.1", "192.168.1.2"]
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          ips: ["192.168.1.3", "192.168.1.4"]
        },
        {
          id: 3,
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
          ips: ["192.168.1.5", "192.168.1.6"]
        }
      ]
    },
    {
      type: "Plagiarism Detected",
      student: [
        {
          id: 1,
          name: "Bob Brown",
          email: "bob.brown@example.com"
        },
        {
          id: 2,
          name: "Charlie Davis",
          email: "charlie.davis@example.com"
        }
      ]
    }
  ]


  return (
    <section className='bg-white rounded-[16px] shadow-md p-5'>
      <h2 className="text-[22px] font-semibold mb-4">Security Alert</h2>
      <ul className='overflow-y-auto scroll-hidden space-y-4 max-h-[332px]'>
        {
          securityAlertDatas.map((alert, index) => (
            <li key={index} className={`${alert.type === "Multiple ip Addresses" ? "bg-[#FFEBEB]" : alert.type === "Plagiarism Detected" ? "bg-[#FCF7E9]" : ""} flex space-x-4 p-4 rounded-2xl`}>
              <span>{alert.type === "Multiple ip Addresses" ? "🚫" : alert.type === "Plagiarism Detected" ? "⚠️" : ""}</span>
              <div className='space-y-3'>
                <h1 className='text-[18px] font-Monteserrat font-medium'>{alert.type}</h1>
                <p className='text-sm text-[#6c757d] font-Monteserrat font-medium'>Student james Joseph Accessed the test from 3 different ip address</p>
                <button className='bg-red-500 rounded-2xl text-white px-4 py-3 font-Monteserrat font-bold text[16px]'>Flag Submission</button>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default SecurityAlert