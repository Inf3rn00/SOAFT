import React from "react";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";

const Result = () => {
  const [minScore, setMinScore] = useState("");
  const [maxScore, setMaxScore] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("");

  const handleDateChange = (e) => {
    setDateRange(e.target.value);
    console.log("Selected Date Range:", e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
    console.log("Selected Course:", e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    console.log("Selected Status:", e.target.value);
  };
  return (
    <div className="bg-background-offwhite w-full overflow-hidden">
      <section className="p-5 flex justify-between items-center w-full">
        <div>
          <h1 className="text-[32px] font-semibold">Assessment Result</h1>
          <p className="text-[#6c757d] mt-2">Total 245 assessments completed</p>
        </div>
        <div>
          <button className="flex items-center bg-[#5046e5] text-white font-bold px-4 py-2 rounded-lg gap-2 cursor-pointer">
            <FaDownload size={15} /> Create test
          </button>
        </div>
      </section>

      <section className="p-5 w-full">
        <div className="bg-white rounded-lg shadow-md mb-5 p-5">
          <form className="flex gap-5 justify-between">
            {/* Date Range */}
            <div className="flex flex-col">
              <label htmlFor="date-range" className="mb-1">
                Date Range
              </label>
              <input
                type="date"
                id="date-range"
                value={dateRange}
                onChange={handleDateChange}
                className="border-1 border-gray-300 rounded px-3 py-2 relative z-100"
              />
            </div>

            {/* Course Dropdown */}
            <div className="flex flex-col">
              <label htmlFor="select-course" className="mb-1">
                Course
              </label>
              <select
                value={course}
                onChange={handleCourseChange}
                id="select-course"
                className="border-1 border-gray-300 rounded px-3 py-2 relative z-100 "
              >
                <option value="">Select Course</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
              </select>
            </div>

            {/* Status Dropdown */}
            <div className="flex flex-col">
              <label htmlFor="status" className="mb-1">
                Status
              </label>
              <select
                value={status}
                onChange={handleStatusChange}
                id="status"
                className="border-1 border-gray-300 rounded px-3 py-2 relative z-100 "
              >
                <option value="">Select Status</option>
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
                <option value="not-started">Not Started</option>
              </select>
            </div>

            {/* Score Range */}
            <div className="flex flex-col">
              <label className="mb-1">Score Range</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={minScore}
                  onChange={(e) => setMinScore(e.target.value)}
                  className="border-1 border-gray-300 rounded px-3 py-2 relative z-100 w-20"
                  min="0"
                />
                <span className="text-xl font-bold text-gray-600">–</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={maxScore}
                  onChange={(e) => setMaxScore(e.target.value)}
                  className="border-1 border-gray-300 rounded px-3 py-2 relative z-100 w-20"
                  min="0"
                />
              </div>
            </div>
          </form>


          <hr className="my-5" />
        </div>
      </section>
    </div>
  );
};

export default Result;
