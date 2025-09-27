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
  // State Variables - Control component's behavior and UI updates
  const [subject, setSubject] = useState(""); // Selected subject filter
  const [question, setquestion] = useState(""); // Selected question type filter
  const [sort, setSort] = useState(""); // Selected sort option
  const [checkedItems, setCheckedItems] = useState({})

; // Object tracking checkbox states

  // Main data array - holds all question objects
  const [questionData, setquestionData] = useState([
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
      question:
        "Calculate the probability of drawing a heart from a standard deck of cards.",
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
    },
  ]);

  // Computed boolean - checks if all visible questions are selected
  // Returns true when questionData has items AND every item's ID exists in checkedItems
  const isAllSelected =
    questionData.length > 0 &&
    questionData.every((item) => checkedItems[item.id]);

  /**
   * Single Item Deletion Function
   * - Filters out the item with matching ID from questionData array
   * - Re-renders table without the deleted item
   * DOM Effect: Removes table row immediately
   */
  const deleteElement = (id) => {
    setquestionData(questionData.filter((item) => item.id !== id));
  };

  /**
   * Bulk Export Function - Creates CSV file from selected items
   * Line by line breakdown:
   */
  const handleBulkExport = () => {
    // Get array of currently selected question objects
    const selectedItems = getSelectedItems();

    // Validation: Show alert if no items selected, exit function
    if (selectedItems.length === 0) {
      alert("Please select at least one question to export.");
      return;
    }

    // Create CSV header row with column names
    const csvHeaders = "ID,Question,Subject,Type,Last Usage\n";
    
    // Transform each selected item into CSV row format
    const csvContent = selectedItems
      .map(
        (item) =>
          // Escape quotes in questions by doubling them (CSV standard)
          `${item.id},"${item.question.replace(/"/g, '""')}",${item.subject},${
            item.type
          },${item.lastUsage}`
      )
      .join("\n"); // Join all rows with newlines

    // Combine headers and content
    const finalCsvContent = csvHeaders + csvContent;

    // Create downloadable blob object (binary data)
    const blob = new Blob([finalCsvContent], {
      type: "text/csv;charset=utf-8;",
    });
    
    // Create temporary DOM link element for download
    const link = document.createElement("a");

    // Check if download attribute is supported
    if (link.download !== undefined) {
      // Create object URL pointing to the blob
      const url = URL.createObjectURL(blob);
      // Set link attributes for download
      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `questions_export_${new Date().toISOString().split("T")[0]}.csv`
      );
      // Hide link from view
      link.style.visibility = "hidden";
      // Add to DOM temporarily
      document.body.appendChild(link);
      // Trigger download by clicking the link
      link.click();
      // Clean up by removing link from DOM
      document.body.removeChild(link);
    }

    // Show success message
    alert(`Successfully exported ${selectedItems.length} question(s)!`);
  };

  /**
   * Bulk Deletion Function - Removes multiple selected items
   * DOM Effect: Multiple table rows disappear, selection checkboxes reset
   */
  const handleBulkDelete = () => {
    // Get currently selected items
    const selectedItems = getSelectedItems();

    // Validation check
    if (selectedItems.length === 0) {
      alert("Please select at least one question to delete.");
      return;
    }

    // Show confirmation dialog with item count
    const confirmMessage = `Are you sure you want to delete ${selectedItems.length} selected question(s)? This action cannot be undone.`;

    // Proceed only if user confirms
    if (confirm(confirmMessage)) {
      // Extract IDs from selected items
      const selectedIds = selectedItems.map((item) => item.id);

      // Filter out selected items from main data array
      const remainingQuestions = questionData.filter(
        (item) => !selectedIds.includes(item.id)
      );

      // Update state with remaining questions
      setquestionData(remainingQuestions);

      // Clear all checkbox selections
      setCheckedItems({});

      // Show success message
      alert(`Successfully deleted ${selectedItems.length} question(s)!`);
    }
  };

  /**
   * Helper function - counts selected items
   * Returns: Number of checked items for display in buttons
   */
  const getSelectedCount = () => {
    return Object.values(checkedItems).filter(Boolean).length;
  };

  /**
   * Individual Checkbox Toggle Function
   * DOM Effect: Updates single checkbox state, may affect "Select All" checkbox
   */
  const handleItemCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev, // Keep all existing checkbox states
      [id]: !prev[id], // Toggle the specific item's state
    }));
  };

  /**
   * Master Checkbox Function - Select/Deselect All
   * DOM Effect: Updates all checkboxes simultaneously
   */
  const handleSelectAll = () => {
    if (isAllSelected) {
      // If all selected, clear all selections
      setCheckedItems({});
    } else {
      // If not all selected, select all items
      const allSelected = {};
      questionData.forEach((item) => {
        allSelected[item.id] = true;
      });
      setCheckedItems(allSelected);
    }
  };

  /**
   * Utility function - filters main data for selected items
   * Returns: Array of question objects that are currently selected
   */
  const getSelectedItems = () => {
    return questionData.filter((item) => checkedItems[item.id]);
  };

  /**
   * Dropdown Change Handlers - Update filter states
   * DOM Effect: Re-renders dropdown, shows/hides filter tags
   */
  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const handleChangeQuestion = (event) => {
    setquestion(event.target.value);
  };

  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

  /**
   * Filter Clear Functions - Reset filter states
   * DOM Effect: Dropdowns reset to default, filter tags disappear
   */
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

  /**
   * Clipboard Function - Uses browser API to copy text
   * DOM Effect: Copies text to user's clipboard, shows alert
   */
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

  /**
   * Styling Helper Function - Returns CSS classes based on question type
   * DOM Effect: Changes badge colors in table cells
   */
  const questionTypeColour = (question) => {
    if (question === "Multiple Choice") return "bg-[#EAE9FC] text-[#5046E5]";
    if (question === "Essay") return "bg-[#E9F2FB] text-[#4A90E2]";
    if (question === "Short Answer") return "bg-[#F3ECF8] text-[#8743BE]";
    if (question === "Matching") return "bg-[#FCF7E9] text-[#E5BE46]";
    return "";
  };

  return (
    <div className="bg-background-offwhite w-full overflow-hidden  ">
      {/* PAGE HEADER SECTION */}
      <section className="p-5 flex justify-between items-center w-full">
        <div>
          <h1 className="text-[32px] font-semibold">Question Bank</h1>
          <p className="text-[rgb(108,117,125)] mt-2">
            Create, manage and organize your question library all in one place
          </p>
        </div>
      </section>

      {/* FILTER CONTROLS SECTION */}
      <section className="p-5 w-full">
        <div className="bg-white rounded-lg shadow-md p-5 flex justify-between  gap-20">
          <div className="flex gap-5 w-3/4">
            
            {/* Subject Filter Column */}
            <div className="w-1/3 flex flex-col gap-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  All Subjects
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={subject}
                  label="Subject Filter"
                  onChange={handleChange}
                >
                  <MenuItem value={"Mathematics"}>Mathematics</MenuItem>
                  <MenuItem value={"Biology"}>Biology</MenuItem>
                  <MenuItem value={"Statistics"}>Statistics</MenuItem>
                  <MenuItem value={"Computer"}>Computer</MenuItem>
                </Select>
              </FormControl>

              {/* Active Subject Filter Tag */}
              {subject && (
                <div className="bg-background-offwhite p-4 text-xs font-medium rounded-[30px] flex justify-between ">
                  <p>Subject: {subject}</p>
                  <img
                    src={deleteBtn}
                    alt="Remove subject filter"
                    onClick={clearinputSubject}
                    className="cursor-pointer"
                  />
                </div>
              )}
            </div>

            {/* Question Type Filter Column */}
            <div className="w-1/3 flex flex-col gap-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  All Question Types
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={question}
                  label="Question Type Filter"
                  onChange={handleChangeQuestion}
                >
                  <MenuItem value={"Multiple Choice"}>Multiple Choice</MenuItem>
                  <MenuItem value={"Essay"}>Essay</MenuItem>
                  <MenuItem value={"Short Answer"}>Short Answer</MenuItem>
                  <MenuItem value={"Matching"}>Matching</MenuItem>
                </Select>
              </FormControl>

              {/* Active Question Type Filter Tag */}
              {question && (
                <div className="bg-background-offwhite p-4 font-medium text-xs rounded-[30px] flex justify-between ">
                  <p>Question Type: {question}</p>
                  <img
                    src={deleteBtn}
                    alt="Remove question type filter"
                    onClick={clearInput}
                    className="cursor-pointer"
                  />
                </div>
              )}
            </div>

            {/* Clear All Filters Button - Only shows when both filters active */}
            {subject && question ? (
              <p
                className=" text-background-blue font-bold px-4 py-2 rounded-lg gap-1 cursor-pointer h-[40px] self-end"
                onClick={clearAll}
              >
                Clear All
              </p>
            ) : null}
          </div>

          {/* Sort Options Column */}
          <div className="w-1/5 ml-auto flex flex-col gap-5">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort:</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort Options"
                onChange={handleChangeSort}
              >
                <MenuItem value={"Recent"}>Recent</MenuItem>
                <MenuItem value={"Oldest"}>Oldest</MenuItem>
                <MenuItem value={"A-Z"}>A-Z</MenuItem>
                <MenuItem value={"Z-A"}>Z-A</MenuItem>
              </Select>
            </FormControl>

            {/* Active Sort Filter Tag */}
            {sort && (
              <div className="bg-background-offwhite p-4 font-medium text-xs rounded-[30px] flex justify-between ">
                <p>Sort: {sort}</p>
                <img
                  src={deleteBtn}
                  alt="Remove sort option"
                  onClick={() => setSort("")}
                  className="cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MAIN TABLE SECTION */}
      <section className="p-5 flex gap-5 ">
        <div className="bg-white rounded-lg shadow-md  w-full">
          
          {/* Table Header with Bulk Actions */}
          <header className="flex justify-between items-center p-5">
            <div className="flex items-center w-1/3 gap-2">
              {/* Master Select All Checkbox */}
              <Checkbox
                checked={isAllSelected}
                onChange={handleSelectAll}
                inputProps={{ "aria-label": "Select all questions" }}
                sx={{
                  "&.Mui-checked": {
                    color: "#5046e5",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(80, 70, 229, 0.04)",
                  },
                  marginLeft: "-10px",
                }}
              />
              Select All
            </div>

            {/* Bulk Action Buttons */}
            <div className="flex gap-10">
              <p className="flex gap-3 items-center cursor-pointer ">
                <img
                  src={downloadIcon}
                  onClick={handleBulkExport}
                  alt="Export selected questions"
                  className="cursor-pointer  hover:scale-110"
                />
                Export {getSelectedCount() > 0 && `(${getSelectedCount()})`}
              </p>
              <p className="flex gap-3 items-center cursor-pointer">
                <img
                  src={trashIcon}
                  onClick={handleBulkDelete}
                  alt="Delete selected questions"
                  className="cursor-pointer  hover:scale-110"
                />
                Delete {getSelectedCount() > 0 && `(${getSelectedCount()})`}
              </p>
            </div>
          </header>

          {/* Data Table */}
          <table className="text-left w-full">
            {/* Table Column Headers */}
            <thead className="h-20 bg-background-offwhite text-md font-semibold">
              <tr className="">
                <th className="pl-14  ">QUESTION</th>
                <th>SUBJECT</th>
                <th className="">TYPE</th>
                <th>LAST USAGE</th>
                <th className="text-center">ACTIONS</th>
              </tr>
            </thead>

            {/* Table Body - Dynamic Rows */}
            <tbody className="text-sm">
              {questionData.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  
                  {/* Question Text Column with Individual Checkbox */}
                  <td className="py-4 pl-2">
                    <div className="flex  gap-2 items-center">
                      <Checkbox
                        checked={checkedItems[item.id] || false}
                        onChange={() => handleItemCheck(item.id)}
                        inputProps={{ "aria-label": `Select question ${item.id}` }}
                        sx={{
                          "&.Mui-checked": {
                            color: "#5046e5",
                          },
                          "&:hover": {
                            backgroundColor: "rgba(80, 70, 229, 0.04)",
                          },
                        }}
                      />
                      {/* Truncated question text */}
                      <span className="leading-relaxed">
                        {item.question.length > 50
                          ? `${item.question.substring(0, 50)}...`
                          : item.question}
                      </span>
                    </div>
                  </td>

                  {/* Subject Column */}
                  <td className="px-5">{item.subject}</td>

                  {/* Question Type Column with Colored Badge */}
                  <td>
                    <div
                      className={`${questionTypeColour(
                        item.type
                      )} py-3 px-3 rounded-[30px] text-center`}
                    >
                      {item.type}
                    </div>
                  </td>

                  {/* Last Usage Date Column */}
                  <td className="px-5">{item.lastUsage}</td>

                  {/* Action Buttons Column */}
                  <td className="px-5">
                    <div className="flex gap-4 text-gray-600 ">
                      {/* Copy Question Button */}
                      <img
                        src={copyIcon}
                        alt="Copy question to clipboard"
                        className="cursor-pointer  hover:scale-110"
                        onClick={() => copyToClipboard(item.question)}
                      />
                      {/* Edit Question Button */}
                      <img
                        src={editIcon}
                        alt="Edit question"
                        className="cursor-pointer  hover:scale-110"
                      />
                      {/* Delete Single Question Button */}
                      <img
                        src={trashIcon}
                        alt="Delete question"
                        className="cursor-pointer  hover:scale-110"
                        onClick={() => {
                          confirm("Do you want to delete this item?")
                            ? deleteElement(item.id)
                            : null;
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