import React from 'react'

const AdminStatisticsCard = () => {
    const statistics = [
        { title: "Active Tests", quantity: 8, icon: "📊", percentage: 12, updatefrom: "from last week" },
        { title: "Total Student", quantity: 243, icon: "👩‍🎓", percentage: 5, updatefrom: "from last month" },
        { title: "Submissions", quantity: 187, icon: "🆕", percentage: 18, updatefrom: "from last Month" },
        { title: "Pending Grading", quantity: 24, icon: "⏳", percentage: 7, updatefrom: "from last month" }
    ];
    return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 p-3'>
            {/* Statistics Cards */}
            {statistics.map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-[#ffffff] rounded-[8px] shadow-md">
                    <div className="flex justify-between items-center w-full p-3">
                        {/* Statistics Info */}
                        <div className='flex flex-col gap-5'>
                            {/* Statistics Title */}
                            <h3 className='text-[#2e2e2e] text-[18px] font-semibold'>{stat.title}</h3>
                            {/* Statistics Quantity */}
                            <p className='text-[28px] font-semibold'>{stat.quantity}</p>
                            {/* Statistics Percentage */}
                            <p className={`text-sm flex gap-x-4 ${stat.percentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {stat.percentage > 0 ? '+' : '-'}{Math.abs(stat.percentage)}%
                            {/* Statistics Update From */}
                            <span className='text-[#6c757d] font-semibold'> {stat.updatefrom}</span>
                            </p>
                        </div>
                        {/* Statistics Icon */}
                        <div className='w-[40px] h-[40px] rounded-full bg-[#f0f0f0] flex items-center justify-center'>
                            <span className="text-2xl">{stat.icon}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AdminStatisticsCard