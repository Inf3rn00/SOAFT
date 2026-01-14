import { useState } from "react";
import { date } from "yup";
import TestModal from "./TestModal";
import { Link, useNavigate } from "react-router-dom";

/* StudentDashboard
 - Shows upcoming tests and recent results for the logged-in student.
 - Responsive card layout for upcoming tests and a compact results table.
 - Small UX improvements: logout clears session and redirects to home.
*/

const StudentDashboard = () => {
  // Sample upcoming tests (static data for demo). Each item includes metadata and availability.
  const upcomingTests = [
    {
      header: "Midterm Examination",
      state: "Ready",
      subject: "Computer Science",
      teacher: "Prof Joseph Ayodeji",
      schedule: "Today, 10:00 AM - 11:00 AM",
      time: "90 minutes",
      isClickable: true,
    },
    {
      header: "Weekly Quiz #5",
      state: "Upcoming",
      subject: "Introduction to Physics",
      teacher: "Dr Elizabeth Lizzy",
      schedule: "June 19, 2025 2:00 PM",
      time: "45 minutes",
      isClickable: false,
    },
    {
      header: "Project Submission",
      state: "Upcoming",
      subject: "Software Engineering",
      teacher: "Prof Joseph Ayodeji",
      schedule: "June 25 2025 11:59 PM",
      time: "45 minutes",
      isClickable: false,
    },
  ];

  // Recent results shown in the table below (static demo data)
  const recentResults = [
    {
      testName: "Midterm Examination",
      subject: "Computer Science",
      date: "June 10, 2025",
      score: 92,
      actions: "View details",
    },
    {
      testName: "Midterm Examination",
      subject: "Computer Science",
      date: "June 10, 2025",
      score: 92,
      actions: "View details",
    },
    {
      testName: "Midterm Examination",
      subject: "Computer Science",
      date: "June 10, 2025",
      score: 45,
      actions: "View details",
    },
    {
      testName: "Midterm Examination",
      subject: "Computer Science",
      date: "June 10, 2025",
      score: 72,
      actions: "View details",
    },
  ];

  // Map a numeric score to a tailwind color class for quick visual cues
  const getScoreColor = (score) => {
    if (score >= 90) return "text-green-800 ";
    if (score >= 70) return "text-yellow-500 ";
    if (score >= 45) return "text-red-500 ";
    return "text-red-500 ";
  };

  const [isModalOpen, setisModalOpen] = useState(false);

  // Navigation utility and logout handler
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session and send user to homepage
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div className="bg-background-offwhite w-full overflow-hidden">
      <section className="py-8 px-10 flex justify-between items-center w-full">
        <div>
          <h1 className="text-[32px] font-bold">Upcoming Tests</h1>
        </div>
      </section>
      {/* Upcoming tests: responsive grid with small cards */}
      <section className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
        {upcomingTests.map((test, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-md p-6 transform transition-transform duration-200 hover:scale-[1.02]
            border-l-4 ${
              test.header === "Midterm Examination"
                ? "border-l-background-blue"
                : "border-l-yellow-500"
            }`}
          >
            <section className="flex justify-between items-center">
              <h1 className="font-semibold">{test.header}</h1>
              <div
                className={`p-2 rounded-full font-semibold flex justify-center items-center gap-2 text-xs ${
                  test.state === "Ready"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                <div
                  className={`w-2 h-2 p-1 rounded-full  ${
                    test.state === "Ready" ? "bg-green-500" : "bg-yellow-500"
                  }`}
                ></div>

                {test.state}
              </div>
            </section>

            <section className="mt-4 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img src="./images/book.png" alt="" />
                <p>{test.subject}</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="./images/profile (2).png" alt="" />
                <p>{test.teacher}</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="./images/calender.png" alt="" />
                <p>{test.schedule}</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="./images/clock.png" alt="" />
                <p>{test.time}</p>
              </div>
            </section>
            <section className="mt-5 text-center font-semibold">
              <button
                className={`py-2 w-full rounded-lg text-sm font-semibold transition-colors duration-150 ${
                  test.isClickable
                    ? "bg-background-blue text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-background-blue"
                    : "bg-background-offwhite text-gray-400 cursor-not-allowed"
                }`}
                disabled={!test.isClickable}
                aria-disabled={!test.isClickable}
                onClick={() => {
                  setisModalOpen(!isModalOpen);
                }}
                title={test.isClickable ? "Start the test now" : "Test not available yet"}
              >
                {test.isClickable ? "Start Test" : "Not Available Yet"}
              </button>
            </section>
          </div>
        ))}
      </section>
      <section className="px-6 md:px-8 lg:px-10 w-full my-8">
        <div className="mb-3">
          <h2 className="text-[28px] font-bold">Recent Results</h2>
          <p className="text-sm text-gray-600">Your most recent completed assessments and scores.</p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-md border border-gray-100 bg-white p-3">
          <table className="w-full min-w-[600px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-5 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Test Name
                </th>
                <th className="py-5 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Subject
                </th>
                <th className="py-5 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Date
                </th>
                <th className="py-5 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Score
                </th>
                <th className="py-5 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {recentResults.map((result, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="py-5 px-6 font-semibold text-gray-900">
                    {result.testName}
                  </td>
                  <td className="py-5 px-6 text-gray-700">{result.subject}</td>
                  <td className="py-5 px-6 text-gray-600">{result.date}</td>
                  <td className="py-5 px-6">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${getScoreColor(
                        result.score
                      )}`}
                    >
                      {result.score}/100
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-blue-600 font-semibold cursor-pointer hover:text-blue-800 transition-colors duration-200">
                      {result.actions}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="px-10 mt-9 flex justify-end w-full mb-10">
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-background-blue rounded-lg text-white font-semibold cursor-pointer hover:bg-blue-800 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background-blue"
          aria-label="Log out"
        >
          Log Out
        </button>
      </section>

      {/* Modal for starting/previewing tests */}
      {isModalOpen && (
       <TestModal closeModal={setisModalOpen}/>
      )}
    </div>
  );
};

export default StudentDashboard;
