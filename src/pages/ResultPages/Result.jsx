import React, { useMemo, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import filterIcon from "/Icons/Result page icons/FilterIcon.svg";
import AdvancedResults from "./AdvancedResults";
import { Link } from "react-router-dom";

//component decelaration
const Result = () => {
  const [minScore, setMinScore] = useState("1234567");
  const [maxScore, setMaxScore] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("");

  //Function f0r clearing all inputs from the forms
  const clearAll = () => {
    setMinScore("");
    setMaxScore("");
    setDateRange("");
    setCourse("");
    setStatus("");
  };

  //function for checking the amount of filters selected in the inputs (useMemo for optimization)
  const activeFilters = useMemo(() => {
    const filters = [];
    if (dateRange) filters.push("Date Range");
    if (course) filters.push("Course");
    if (status) filters.push("Status");
    if (minScore || maxScore) filters.push("Score Range");
    return filters;
  }, [dateRange, course, status, minScore, maxScore]);

  const hasActivefilters = activeFilters.length > 0;

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
  const handleMinScoreChange = (e) => {
    setMinScore(e.target.value);
    console.log("Selected Min Score:", e.target.value);
  };
  const handleMaxScoreChange = (e) => {
    setMaxScore(e.target.value);
    console.log("Selected Max Score:", e.target.value);
  };
  return (
    <div className="bg-background-offwhite w-full overflow-hidden">
      <section className="p-5 flex justify-between items-center w-full">
        <div>
          <h1 className="text-[2rem] font-semibold">Assessment Result</h1>
          <p className="text-[#6c757d] mt-2">Total 245 assessments completed</p>
        </div>
        <div>
          <button className="flex items-center bg-[#5046e5] text-white font-bold px-4 py-2 rounded-lg gap-2 cursor-pointer">
            <FaDownload size={15} /> Export Result
          </button>
        </div>
      </section>

      <section className="p-5 w-full">
        <div className="bg-white rounded-lg shadow-md p-5">
          <form className="flex gap-5 justify-between items-start">
            {/* Date Range - Using TextField for consistency */}
            <div className="flex flex-col w-full">
              <TextField
                id="date-range"
                label="Date Range"
                type="date"
                value={dateRange}
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
                className="bg-white"
                size="small"
                fullWidth
              />
            </div>

            {/* Course Dropdown */}
            <div className="flex flex-col w-full">
              <FormControl fullWidth size="small">
                <InputLabel id="course-select-label">Course</InputLabel>
                <Select
                  labelId="course-select-label"
                  id="select-course"
                  value={course}
                  label="Course"
                  onChange={handleCourseChange}
                  className="bg-white"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="course1">Course 1</MenuItem>
                  <MenuItem value="course2">Course 2</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Status Dropdown */}
            <div className="flex flex-col w-full">
              <FormControl fullWidth size="small">
                <InputLabel id="status-select-label">Status</InputLabel>
                <Select
                  labelId="status-select-label"
                  id="status"
                  value={status}
                  label="Status"
                  onChange={handleStatusChange}
                  className="bg-white"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                  <MenuItem value="in-progress">In Progress</MenuItem>
                  <MenuItem value="not-started">Not Started</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Score Range */}
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2">
                <TextField
                  type="number"
                  label="Min Score"
                  value={minScore}
                  onChange={handleMinScoreChange}
                  size="small"
                  className="bg-white"
                  InputProps={{ inputProps: { min: 0 } }}
                />
                <span className="text-xl font-bold text-gray-400">–</span>
                <TextField
                  type="number"
                  label="Max Score"
                  value={maxScore}
                  onChange={handleMaxScoreChange}
                  size="small"
                  className="bg-white"
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </div>
            </div>
          </form>

          <hr className="my-4" />

          {hasActivefilters && (
            <>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img src={filterIcon} alt="" />
                  <span className="text-sm font-medium">
                    {activeFilters.length} filter
                    {activeFilters.length !== 1 ? "s" : ""} applied
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={clearAll}
                    className="flex items-center text-gray-600 hover:text-gray-800 font-medium px-3 py-2 rounded-lg gap-2 cursor-pointer transition-colors hover:bg-gray-100"
                  >
                    Clear all
                  </button>
                  <button
                    type="button"
                    className="flex items-center bg-background-blue text-white font-medium px-4 py-2 rounded-lg gap-2 cursor-pointer transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <h3 className="text-xl font-bold my-3 px-5">
        Advanced Statistics Midterm Examination
      </h3>

      <AdvancedResults></AdvancedResults>
    </div>
  );
};

export default Result;
