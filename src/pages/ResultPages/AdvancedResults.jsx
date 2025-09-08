import { Link } from "react-router-dom";

const AdvancedResults = () => {
  const studentData = [
    {
      id: 1,
      name: "Joseph Ayodeji",
      email: "Joseph.deji@university.edu",
      submitted: function () {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1; // Months start with 0
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        month = months[month - 1]; // Convert to month name
        let year = date.getFullYear();
        let time = date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        return `${month}, ${day}, ${year}  ${time}`;
      },
      "time-spent": "2 hours",
      "School-grade": "Top 5%",
      image: "/images/Heroface1.jpg",
      textContent: "Advanced Statistics Midterm Examination",
      flags: "No Flags",
      similarity: "5% Similarity",
      "Assesment-deatails": "45 questions",
      finalScore: "42/45",
      integrityCheck: 3,
      plagiarismScore: 3,
    },
    {
      id: 2,
      name: "Aisha Mohammed",
      email: "Aisha.mohammed@university.edu",
      submitted: function () {
        let date = new Date("2025-08-28T10:30:00");
        let day = date.getDate();
        let month = date.getMonth() + 1;
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        month = months[month - 1];
        let year = date.getFullYear();
        let time = date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        return `${month}, ${day}, ${year}  ${time}`;
      },
      "time-spent": "1 hour, 45 minutes",
      "School-grade": "Top 10%",
      image: "/images/Heroface2.jpg",
      textContent: "Advanced Statistics Midterm Examination",
      flags: "No Flags",
      similarity: "8% Similarity",
      "Assesment-deatails": "45 questions",
      finalScore: "40/45",
      integrityCheck: 3,
      plagiarismScore: 2,
    },
    {
      id: 3,
      name: "Chukwudi Nwachukwu",
      email: "Chukwudi.nwa@university.edu",
      submitted: function () {
        let date = new Date("2025-08-27T14:15:00");
        let day = date.getDate();
        let month = date.getMonth() + 1;
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        month = months[month - 1];
        let year = date.getFullYear();
        let time = date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        return `${month}, ${day}, ${year}  ${time}`;
      },
      "time-spent": "2 hours, 10 minutes",
      "School-grade": "Top 25%",
      image: "/images/Heroface3.jpg",
      textContent: "Advanced Statistics Midterm Examination",
      flags: "Behavioral Flagged",
      similarity: "15% Similarity",
      "Assesment-deatails": "45 questions",
      finalScore: "35/45",
      integrityCheck: 2,
      plagiarismScore: 4,
    },
    {
      id: 4,
      name: "Fatima Aliyu",
      email: "Fatima.aliyu@university.edu",
      submitted: function () {
        let date = new Date("2025-08-28T09:00:00");
        let day = date.getDate();
        let month = date.getMonth() + 1;
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        month = months[month - 1];
        let year = date.getFullYear();
        let time = date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        return `${month}, ${day}, ${year}  ${time}`;
      },
      "time-spent": "1 hour, 55 minutes",
      "School-grade": "Top 15%",
      image: "/images/Heroface4.jpg",
      textContent: "Advanced Statistics Midterm Examination",
      flags: "No Flags",
      similarity: "6% Similarity",
      "Assesment-deatails": "45 questions",
      finalScore: "38/45",
      integrityCheck: 3,
      plagiarismScore: 3,
    },
    {
      id: 5,
      name: "Bello Emeka",
      email: "Bello.emeka@university.edu",
      submitted: function () {
        let date = new Date("2025-08-27T16:40:00");
        let day = date.getDate();
        let month = date.getMonth() + 1;
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        month = months[month - 1];
        let year = date.getFullYear();
        let time = date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        return `${month}, ${day}, ${year}  ${time}`;
      },
      "time-spent": "2 hours, 30 minutes",
      "School-grade": "Top 50%",
      image: "/images/Student2Image.jpg",
      textContent: "Advanced Statistics Midterm Examination",
      flags: "Late Submission",
      similarity: "12% Similarity",
      "Assesment-deatails": "45 questions",
      finalScore: "30/45",
      integrityCheck: 1,
      plagiarismScore: 5,
    },
  ];
  return (
    <section className="p-5 w-full ">
      <div>
        {studentData.map((student, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md px-6 py-6 mb-4 flex items-center justify-between gap-5"
            >
              <div className="flex items-center gap-4">
                <div>
                  <img
                    src={student["image"]}
                    className="w-15 h-15 rounded-[50%]"
                  ></img>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-semibold flex gap-4 items-center">
                    <Link to={`/admin/result/advancedStat/${student.id}`}>
                      {student.name}
                    </Link>
                    <span className="text-blue-800 bg-blue-100 p-2 rounded-2xl font-medium text-sm">
                      {student["School-grade"]}
                    </span>
                  </h4>
                  <p className="text-gray-600">{student.email}</p>
                </div>
              </div>

              <div className=" flex gap-5 text-right">
                <div>
                  <p className="text-gray-600 font-semibold">Submitted</p>
                  <p>{student.submitted()}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Time Spent</p>
                  <p>{student["time-spent"]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdvancedResults;
