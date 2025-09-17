import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import deleteBtn from "/Icons/Question Bank Icons/deleteBtn.svg";

const QuestionBank = () => {
  const [subject, setSubject] = useState("");
  const [question, setquestion] = useState("");
  const [sort, setSort] = useState("Recent");

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const handleChangeQuestion = (event) => {
    setquestion(event.target.value);
  };

  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

  const clearAll = () => {
    setSubject("");
    setquestion("");
  };

  const clearInput = () => {
    setquestion("");
  };

  const clearinputSubject = () => {
    setSubject("");
  };

  return (
    <div className="bg-background-offwhite w-full  relative">
      <section className="p-5 flex justify-between items-center w-full">
        <div>
          <h1 className="text-[32px] font-semibold">Question Bank</h1>
          <p className="text-[rgb(108,117,125)] mt-2">
            Create, manage and organize your question library all in one place
          </p>
        </div>
      </section>
      <section className="p-5 w-full">
        {/*i still need to work on the cancel filter and apply button*/}
        <div className="bg-white rounded-lg shadow-md p-5 flex justify-between  gap-20">
          <div className="flex gap-5 w-3/4">
            <div className="w-1/3 flex flex-col gap-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  All Subjects
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={subject}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Mathematics"}>Mathematics</MenuItem>
                  <MenuItem value={"Biology"}>Biology</MenuItem>
                  <MenuItem value={"Statistics"}>Statistics</MenuItem>
                  <MenuItem value={"Computer"}>Computer</MenuItem>
                </Select>
              </FormControl>

              {subject && (
                <div className="bg-background-offwhite p-4 text-xs font-medium rounded-[30px] flex justify-between ">
                  <p>Subject: {subject}</p>{" "}
                  <img
                    src={deleteBtn}
                    alt="Delete button"
                    onClick={clearinputSubject}
                    className="cursor-pointer"
                  />
                </div>
              )}
            </div>

            <div className="w-1/3 flex flex-col gap-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  All Question Types
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={question}
                  label="Age"
                  onChange={handleChangeQuestion}
                >
                  <MenuItem value={"Multiple Choice"}>Multiple Choice</MenuItem>
                  <MenuItem value={"Essay"}>Essay</MenuItem>
                  <MenuItem value={"Short Answer"}>Short Answer</MenuItem>
                  <MenuItem value={"Matching"}>Matching</MenuItem>
                </Select>
              </FormControl>
              {}{" "}
              {question && (
                <div className="bg-background-offwhite p-4 font-medium text-xs rounded-[30px] flex justify-between ">
                  <p>Question Type: {question}</p>{" "}
                  <img
                    src={deleteBtn}
                    alt="Delete button"
                    onClick={clearInput}
                    className="cursor-pointer"
                  />
                </div>
              )}
            </div>

            {subject && question ? (
              <p
                className=" text-background-blue font-bold px-4 py-2 rounded-lg gap-1 cursor-pointer h-[40px] self-end"
                onClick={clearAll}
              >
                Clear All
              </p>
            ) : null}
          </div>

          <div className="w-1/5 ml-auto">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort:</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Age"
                onChange={handleChangeSort}
              >
                <MenuItem value={"Recent"}>Recent</MenuItem>
                <MenuItem value={"Oldest"}>Oldest</MenuItem>
                <MenuItem value={"A-Z"}>A-Z</MenuItem>
                <MenuItem value={"Z-A"}>Z-A</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuestionBank;
