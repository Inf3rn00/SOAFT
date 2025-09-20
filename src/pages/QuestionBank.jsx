import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import deleteBtn from "/Icons/Question Bank Icons/deleteBtn.svg";
import copyIcon from "/Icons/Question Bank Icons/copyicon.svg";
import downloadIcon from "/Icons/Question Bank Icons/downloadIcon.svg";
import editIcon from "/Icons/Question Bank Icons/editIcon.svg";
import trashIcon from "/Icons/Question Bank Icons/trashIcon.svg";
import { FaDownload, FaEdit, FaTrash, FaCopy } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";

const QuestionBank = () => {
  const [subject, setSubject] = useState("");
  const [question, setquestion] = useState("");
  const [sort, setSort] = useState("");
  const [checked, setChecked] = useState(false);
  const [questionData, setquestionData] = useState([
  {
    id: 1,
    question: "Calculate the standard deviation of the following data set: 12, 15, 18, 22, 30, 35, 40.",
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
    question: "Explain the process of photosynthesis in plants and its significance.",
    subject: "Biology",
    type: "Essay",
    lastUsage: "2023-09-20",
    Actions: "Click me",
  },
  {
    id: 4,
    question: "What are the main components of a CPU and their functions?",
    subject: "Computer Science",
    type: "Matching",
    lastUsage: "2023-09-15",
    Actions: "Click me",
  },
  {
    id: 5,
    question: "Solve the quadratic equation: x² - 5x + 6 = 0",
    subject: "Mathematics",
    type: "Multiple Choice",
    lastUsage: "2023-09-10",
    Actions: "Click me",
  },
  {
    id: 6,
    question: "Describe the structure and function of DNA molecules.",
    subject: "Biology",
    type: "Essay",
    lastUsage: "2023-09-05",
    Actions: "Click me",
  },
  {
    id: 7,
    question: "What is the time complexity of binary search algorithm?",
    subject: "Computer Science",
    type: "Short Answer",
    lastUsage: "2023-08-30",
    Actions: "Click me",
  },
  {
    id: 8,
    question: "Calculate the probability of drawing a heart from a standard deck of cards.",
    subject: "Statistics",
    type: "Multiple Choice",
    lastUsage: "2023-08-25",
    Actions: "Click me",
  },
  {
    id: 9,
    question: "Differentiate between mitosis and meiosis.",
    subject: "Biology",
    type: "Matching",
    lastUsage: "2023-08-20",
    Actions: "Click me",
  },
  {
    id: 10,
    question: "Implement a bubble sort algorithm in pseudocode.",
    subject: "Computer Science",
    type: "Essay",
    lastUsage: "2023-08-15",
    Actions: "Click me",
  },
  {
    id: 11,
    question: "Find the integral of ∫(2x + 3) dx",
    subject: "Mathematics",
    type: "Short Answer",
    lastUsage: "2023-08-10",
    Actions: "Click me",
  },
  {
    id: 12,
    question: "What is the normal distribution and its properties?",
    subject: "Statistics",
    type: "Essay",
    lastUsage: "2023-08-05",
    Actions: "Click me",
  },
  {
    id: 13,
    question: "Explain the concept of object-oriented programming.",
    subject: "Computer Science",
    type: "Multiple Choice",
    lastUsage: "2023-07-30",
    Actions: "Click me",
  },
  {
    id: 14,
    question: "Solve the system of equations: 2x + y = 5, x - y = 1",
    subject: "Mathematics",
    type: "Short Answer",
    lastUsage: "2023-07-25",
    Actions: "Click me",
  },
  {
    id: 15,
    question: "Describe the human circulatory system.",
    subject: "Biology",
    type: "Essay",
    lastUsage: "2023-07-20",
    Actions: "Click me",
  },
  {
    id: 16,
    question: "Calculate the correlation coefficient for the given data set.",
    subject: "Statistics",
    type: "Multiple Choice",
    lastUsage: "2023-07-15",
    Actions: "Click me",
  },
  {
    id: 17,
    question: "What is a linked list and how does it work?",
    subject: "Computer Science",
    type: "Matching",
    lastUsage: "2023-07-10",
    Actions: "Click me",
  },
  {
    id: 18,
    question: "Find the limit of (x² - 4)/(x - 2) as x approaches 2",
    subject: "Mathematics",
    type: "Short Answer",
    lastUsage: "2023-07-05",
    Actions: "Click me",
  },
  {
    id: 19,
    question: "Explain the process of cellular respiration.",
    subject: "Biology",
    type: "Essay",
    lastUsage: "2023-06-30",
    Actions: "Click me",
  },
  {
    id: 20,
    question: "What is hypothesis testing and its steps?",
    subject: "Statistics",
    type: "Multiple Choice",
    lastUsage: "2023-06-25",
    Actions: "Click me",
  },
  {
    id: 21,
    question: "Describe the TCP/IP model layers.",
    subject: "Computer Science",
    type: "Matching",
    lastUsage: "2023-06-20",
    Actions: "Click me",
  },
  {
    id: 22,
    question: "Calculate the area under the curve y = x² from x = 0 to x = 3",
    subject: "Mathematics",
    type: "Short Answer",
    lastUsage: "2023-06-15",
    Actions: "Click me",
  },
  {
    id: 23,
    question: "What are enzymes and how do they function?",
    subject: "Biology",
    type: "Multiple Choice",
    lastUsage: "2023-06-10",
    Actions: "Click me",
  },
  {
    id: 24,
    question: "Explain the central limit theorem and its importance.",
    subject: "Statistics",
    type: "Essay",
    lastUsage: "2023-06-05",
    Actions: "Click me",
  }
]);

  const deleteElement = (id) => {
    console.log(questionData);

    setquestionData(questionData.filter((item) => item.id !== id));
  };

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
              <p className="flex gap-3 items-center cursor-pointer ">
                <img
                  src={downloadIcon}
                  alt="Export button"
                  className="cursor-pointer  hover:scale-110"
                />
                Export
              </p>
              <p className="flex gap-3 items-center cursor-pointer">
                <img
                  src={trashIcon}
                  alt="Delete button"
                  className="cursor-pointer  hover:scale-110"
                />{" "}
                Delete
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
                      <img
                        src={copyIcon}
                        alt="Copy to clipboard"
                        className="cursor-pointer  hover:scale-110"
                        onClick={() => copyToClipboard(item.question)}
                      />
                      <img
                        src={editIcon}
                        alt="Edit button"
                        className="cursor-pointer  hover:scale-110"
                      />
                      <img
                        src={trashIcon}
                        alt="download button"
                        className="cursor-pointer  hover:scale-110"
                        onClick={() => {
                          confirm("Do you want to delete this item?") ? deleteElement(item.id): null;
                        }}
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
