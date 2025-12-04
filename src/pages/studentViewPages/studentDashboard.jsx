import { useState } from "react";
import { date } from "yup";

const StudentDashboard = () => {
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

  const getScoreColor = (score) => {
    if (score >= 90) return "text-green-800 ";
    if (score >= 70) return "text-yellow-500 ";
    if (score >= 45) return "text-red-500 ";
    return "text-red-500 ";
  };

  const [isModalOpen, setisModalOpen] = useState(false);

  return (
    <div className="bg-background-offwhite w-full overflow-hidden">
      <section className="py-8 px-10 flex justify-between items-center w-full">
        <div>
          <h1 className="text-[32px] font-bold">Upcoming Tests</h1>
        </div>
      </section>
      <section className="px-10 flex justify-between items-center w-full my-4">
        {upcomingTests.map((test, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-md p-5 w-[30%]
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
                className={` py-2 w-full rounded-lg ${
                  test.isClickable
                    ? "bg-background-blue text-white cursor-pointer hover:bg-blue-800"
                    : "bg-background-offwhite text-gray-400 cursor-not-allowed"
                }`}
                disabled={!test.isClickable}
                onClick={() => {
                  setisModalOpen(!isModalOpen);
                  console.log(toggleBtn);
                }}
              >
                {test.isClickable ? "Start Test" : "Not Available Yet"}
              </button>
            </section>
          </div>
        ))}
      </section>
      <section className="px-6 md:px-8 lg:px-10 w-full my-8">
        <div className="mb-6">
          <h1 className="text-[28px] font-bold">Recent Results</h1>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-md border border-gray-100">
          <table className="w-full">
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
                <tr key={index} className=" transition-colors duration-150">
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
      <section className="px-10 mb-13 mt-9 flex justify-end w-full">
        <button className=" px-10 py-2 bg-background-blue rounded-lg text-white  font-semibold cursor-pointer hover:bg-blue-800">
          Log Out
        </button>
      </section>

      {isModalOpen && (
        <div className="absolute w-[200px] h-[300px] bg-red-400 top-[300px] left-[300px]">
          <button className="bg-blue-300 text-white  px-6 py-6 mt-5 ml-3 cursor-pointer">
            {" "}
            click me
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
