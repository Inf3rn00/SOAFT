import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import deleteBtn from "/Icons/Question Bank Icons/deleteBtn.svg";
import { FaDownload, FaEdit, FaTrash, FaCopy } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";

const QuestionBank = () => {
  const [subject, setSubject] = useState("");
  const [question, setquestion] = useState("");
  const [sort, setSort] = useState("Recent");
  const [checked, setChecked] = useState(false);
  

  const questionData = [
    {
      id: 1,
      question:
        "Calculate the standard deviation of the following data set: 12, 15, 18, 22, 30, 35, 40.",
      subject: "Statistics",
      type: "Multiple Choice",
      lastUsage: "2023-10-01",
      Actions: "Click me",
    },
    {
      id: 2,
      question: "What is the derivative of the function f(x) = 3x^2 + 5x - 7?",
      subject: "Mathematics",
      type: "Short Answer",
      lastUsage: "2023-09-25",
      Actions: "Click me",
    },
    {
      id: 3,
      question:
        "Explain the process of photosynthesis in plants and its significance.",
      subject: "Biology",
      type: "Essay",
      lastUsage: "2023-09-20",
      Actions: "Click me",
    },
    {
      id: 4,
      question:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      subject: "Computer",
      type: "Matching",
      lastUsage: "2023-09-15",
      Actions: "Click me",
    },
  ];

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

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const questionTypeColour = (question) => {
    if (question === "Multiple Choice") return "bg-[#EAE9FC] text-[#5046E5]";
    if (question === "Essay") return "bg-[#E9F2FB] text-[#4A90E2]";
    if (question === "Short Answer") return "bg-[#F3ECF8] text-[#8743BE]";
    if (question === "Matching") return "bg-[#FCF7E9] text-[#E5BE46]";
    return "";
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

          <div className="w-1/5 ml-auto flex flex-col gap-5">
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

            {sort && (
              <div className="bg-background-offwhite p-4 font-medium text-xs rounded-[30px] flex justify-between ">
                <p>Sort: {sort}</p>
                <img
                  src={deleteBtn}
                  alt="Delete button"
                  onClick={() => setSort("")}
                  className="cursor-pointer"
                />
              </div>
            )}  
          </div>
        </div>
      </section>

      <section className="p-5 flex gap-5 ">
        <div className="bg-white rounded-lg shadow-md  w-full">
          <header className="flex justify-between items-center p-5">
            <div className="flex items-center w-1/3 gap-2">
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  "&.Mui-checked": {
                    color: "#5046e5", // checked color
                  },
                  "&:hover": {
                    backgroundColor: "rgba(80, 70, 229, 0.04)", // hover effect
                  },
                  marginLeft: "-10px",
                }}
              />
              Select All
            </div>
            <div className="flex gap-10">
              <p className="flex gap-3 items-center cursor-pointer">
                <FaDownload size={20}></FaDownload> Export
              </p>
              <p className="flex gap-3 items-center cursor-pointer">
                <FaTrash size={20}></FaTrash> Delete
              </p>
            </div>
          </header>

          <table className="text-left w-full">
            <thead className="h-20 bg-background-offwhite text-md font-semibold">
              <tr className="">
                <th className="pl-14  ">QUESTION</th>
                <th>SUBJECT</th>
                <th className="">TYPE</th>
                <th>LAST USAGE</th>
                <th className="text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {questionData.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="py-4 pl-2">
                    <div className="flex  gap-2 items-center">
                      <Checkbox
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        inputProps={{ "aria-label": "controlled" }}
                        sx={{
                          "&.Mui-checked": {
                            color: "#5046e5",
                          },
                          "&:hover": {
                            backgroundColor: "rgba(80, 70, 229, 0.04)",
                          },
                        }}
                      />
                      <span className="leading-relaxed">
                        {item.question.length > 50
                          ? `${item.question.substring(0, 50)}...`
                          : item.question}
                      </span>
                    </div>
                  </td>
                  <td className="px-5">{item.subject}</td>
                  <td>
                    <div
                      className={`${questionTypeColour(
                        item.type
                      )} py-3 px-3 rounded-[30px] text-center`}
                    >
                      {item.type}
                    </div>
                  </td>
                  <td className="px-5">{item.lastUsage}</td>
                  <td className="px-5">
                    <div className="flex gap-4 text-gray-600 ">
                      <FaEdit
                        className="cursor-pointer  hover:scale-110"
                        size={18}
                      />
                      <FaCopy
                        className="cursor-pointer  hover:scale-110"
                        size={18}
                        onClick={() => copyToClipboard(item.question)}
                      />
                      <FaTrash
                        className="cursor-pointer  hover:scale-110"
                        size={18}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default QuestionBank;
