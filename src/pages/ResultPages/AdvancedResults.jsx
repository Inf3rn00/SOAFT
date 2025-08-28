import { Link } from "react-router-dom";

const AdvancedResults = () => {
  const studentData = [
    {
      key: 1,
      name: "Joseph Ayodeji",
      email: "Joseph.deji@university.edu",
      submitted: function () {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1; // Months start with 0 like an array
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
    },
    {
      key: 2,
      name: "Elizabeth Lizzy",
      email: "Joseph.deji@university.edu",
      submitted: function () {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1; // Months start with 0 like an array
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
      "time-spent": "1hr 29m",
      "School-grade": "Top 10%",
      image: "/images/Heroface2.jpg",
    },
     {
      key: 3,
      name: "Ayodeji Joseph",
      email: "Joseph.deji@university.edu",
      submitted: function () {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1; // Months start with 0 like an array
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
      "time-spent": "1 hour",
      "School-grade": "Top 5%",
      image: "/images/Heroface1.jpg",
    },
    {
      key: 4,
      name: "Lizzy Elizabeth",
      email: "Joseph.deji@university.edu",
      submitted: function () {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1; // Months start with 0 like an array
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
      "time-spent": "1hr 45m",
      "School-grade": "Top 10%",
      image: "/images/Heroface2.jpg",
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
                    <Link to={`advancedStat/${student.name}`}>
                      {student.name}{" "}
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
                  <p className="text-gray-600 font-semibold">
                    Submitted 
                  </p>
                  <p>{student.submitted()}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">
                    Time Spent 
                  </p>
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
