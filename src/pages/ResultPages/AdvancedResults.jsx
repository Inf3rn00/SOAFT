import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { submittedTime } from "../../utils/timeUtils.js";

//component declaration
const AdvancedResults = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
 

  // handle submitted time logic

  return (
    <section className="p-5 w-full ">
      <div>
        {students.map((student, index) => {
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
                  
                  {
                    // Mapping the array to an object for easier access to each component
                    submittedTime(student.submitted).map(item => (
                      <p key={item.time}>{`${item.month} ${item.day},${item.year} \u2022 ${item.time}${item.form}`}</p>
                    ))
                  }
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
